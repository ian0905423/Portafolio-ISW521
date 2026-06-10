/**
 * ============================================================
 *  AcueductosIoT — dashboard.js
 *  ISW-521 · Laboratorio #3 (v2.0 — Sello Distintivo CR)
 *  Autor: Ian Angulo Matamoros
 * ============================================================
 *
 * Módulos implementados:
 *  1. Reloj en tiempo real (navbar)
 *  2. Simulador de sensores IoT (actualización de datos cada 8s)
 *  3. Sistema de toasts / notificaciones emergentes
 *  4. Botones de acción rápida (exportar, emergencia, notificar)
 *  5. Descarte de alertas con animación
 *  6. Botón de actualización manual con feedback visual
 *  7. Contador de tiempo sin corte (uptime)
 * ============================================================
 */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────
     MÓDULO 1 — RELOJ EN TIEMPO REAL
     Actualiza el elemento #navClock cada segundo con la hora
     local formateada. Usa Intl.DateTimeFormat para localización.
  ────────────────────────────────────────────────────────── */

  /**
   * Referencia al elemento del reloj en el navbar.
   * @type {HTMLElement|null}
   */
  const navClock = document.getElementById('navClock');

  /**
   * Formateador de hora para Costa Rica (es-CR, UTC-6).
   * Se instancia una sola vez para reutilizarlo en cada tick.
   * @type {Intl.DateTimeFormat}
   */
  const timeFormatter = new Intl.DateTimeFormat('es-CR', {
    hour:   '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  /**
   * Actualiza el contenido del reloj con la hora actual.
   * Se llama cada 1000ms mediante setInterval.
   */
  function tickClock() {
    if (!navClock) return;
    const now = new Date();
    navClock.textContent   = timeFormatter.format(now);
    navClock.dateTime      = now.toISOString();
  }

  // Primer tick inmediato para evitar el parpadeo en blanco
  tickClock();
  setInterval(tickClock, 1000);


  /* ──────────────────────────────────────────────────────────
     MÓDULO 2 — SIMULADOR DE SENSORES IoT
     Genera variaciones aleatorias realistas de cada sensor
     cada 8 segundos para simular datos en tiempo real.
     
     Diseño: los valores oscilan dentro de un rango plausible
     usando una función de ruido gaussiano simplificada
     (walk aleatorio con límites mínimo/máximo).
  ────────────────────────────────────────────────────────── */

  /**
   * Estado mutable de los sensores.
   * Cada sensor tiene: valor actual, mín, máx, elemento DOM, relleno.
   * @type {Object}
   */
  const sensors = {
    tank: {
      value: 73,  min: 20,  max: 99,
      elValue: document.getElementById('valTank'),
      elFill:  document.getElementById('fillTank'),
      format: (v) => `${v}<span class="unit">%</span>`,
      fillPct: (v) => v,
    },
    pressure: {
      value: 42,  min: 20,  max: 80,
      elValue: document.getElementById('valPressure'),
      elFill:  document.getElementById('fillPressure'),
      format: (v) => `${v}<span class="unit">PSI</span>`,
      fillPct: (v) => Math.round((v / 80) * 100),
      threshold: 45,   // PSI mínimo aceptable
      warnClass: 'sensor-value--warn',
    },
    quality: {
      value: 0.7, min: 0.3, max: 1.2, decimals: 1,
      elValue: document.getElementById('valQuality'),
      elFill:  document.getElementById('fillQuality'),
      format: (v) => `${v.toFixed(1)}<span class="unit">mg/L</span>`,
      fillPct: (v) => Math.round((v / 1.2) * 100),
    },
    flow: {
      value: 128, min: 60,  max: 200,
      elValue: document.getElementById('valFlow'),
      elFill:  document.getElementById('fillFlow'),
      format: (v) => `${v}<span class="unit">L/min</span>`,
      fillPct: (v) => Math.round((v / 200) * 100),
    },
    temp: {
      value: 22,  min: 14,  max: 30,
      elValue: document.getElementById('valTemp'),
      elFill:  document.getElementById('fillTemp'),
      format: (v) => `${v}<span class="unit">°C</span>`,
      fillPct: (v) => Math.round(((v - 14) / 16) * 100),
    },
  };

  /**
   * Genera un delta aleatorio con distribución gaussiana simplificada.
   * Evita cambios bruscos usando la media de dos números aleatorios.
   * @param {number} spread - Amplitud máxima del cambio.
   * @returns {number} Delta centrado en 0.
   */
  function gaussianDelta(spread) {
    return (Math.random() + Math.random() - 1) * spread;
  }

  /**
   * Aplica una actualización simulada a todos los sensores.
   * Genera un delta, aplica límites y actualiza el DOM.
   */
  function updateSensors() {
    Object.entries(sensors).forEach(([key, sensor]) => {
      if (!sensor.elValue || !sensor.elFill) return;

      // Calcular nuevo valor con ruido controlado
      const spread   = sensor.decimals ? 0.08 : 3;
      let newVal     = sensor.value + gaussianDelta(spread);

      // Aplicar límites min/max
      newVal = Math.max(sensor.min, Math.min(sensor.max, newVal));

      // Redondear según el sensor
      sensor.value = sensor.decimals
        ? parseFloat(newVal.toFixed(sensor.decimals))
        : Math.round(newVal);

      // Actualizar DOM
      sensor.elValue.innerHTML = sensor.format(sensor.value);
      sensor.elFill.style.width = `${sensor.fillPct(sensor.value)}%`;

      // Cambiar color de valor si cruza umbral (solo presión)
      if (sensor.threshold && sensor.warnClass) {
        if (sensor.value < sensor.threshold) {
          sensor.elValue.classList.add(sensor.warnClass);
        } else {
          sensor.elValue.classList.remove(sensor.warnClass);
          // Notificar recuperación si había advertencia
          if (sensor._wasWarning) {
            showToast('ok', '✅ Presión recuperada', `Presión volvió a ${sensor.value} PSI (sobre ${sensor.threshold} PSI)`);
            sensor._wasWarning = false;
          }
        }
        // Marcar advertencia activa para detectar recuperación
        if (sensor.value < sensor.threshold) {
          sensor._wasWarning = true;
        }
      }
    });

    // Actualizar el campo de última actualización
    const elLastUpdate = document.getElementById('lastUpdate');
    if (elLastUpdate) {
      elLastUpdate.textContent = 'Última actualización: ahora';
      // Volver a "hace X seg" después de 5s
      setTimeout(() => {
        if (elLastUpdate) elLastUpdate.textContent = 'Última actualización: hace 8 seg';
      }, 5000);
    }

    // Actualizar métricas del sidebar
    updateSidebarMetrics();
  }

  /**
   * Actualiza los KPIs del sidebar basado en el estado actual de los sensores.
   * Simula cambios pequeños en eficiencia y alertas activas.
   */
  function updateSidebarMetrics() {
    const efficiency = (94 + Math.random() * 2).toFixed(1);
    const elEff = document.getElementById('sideEfficiency');
    if (elEff) elEff.textContent = `${efficiency}%`;
  }

  // Iniciar el ciclo de actualización de sensores cada 8 segundos
  setInterval(updateSensors, 8000);


  /* ──────────────────────────────────────────────────────────
     MÓDULO 3 — SISTEMA DE TOASTS / NOTIFICACIONES
     
     Crea, muestra y auto-destruye notificaciones emergentes.
     Soporta 4 tipos: info, warning, danger, ok.
     Cada toast desaparece tras 5 segundos automáticamente.
  ────────────────────────────────────────────────────────── */

  /**
   * @type {HTMLElement|null} Contenedor de todos los toasts.
   */
  const toastContainer = document.getElementById('toastContainer');

  /**
   * Crea y muestra un toast de notificación.
   * @param {'info'|'warning'|'danger'|'ok'} type - Tipo de toast.
   * @param {string} title - Título en negrita.
   * @param {string} message - Mensaje descriptivo.
   * @param {number} [duration=5000] - Duración en ms antes de auto-cerrar.
   */
  function showToast(type, title, message, duration = 5000) {
    if (!toastContainer) return;

    const icons = { info: 'ℹ️', warning: '⚠️', danger: '🚨', ok: '✅' };

    // Crear el elemento del toast
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', type === 'danger' ? 'alert' : 'status');
    toast.innerHTML = `
      <span class="toast__icon" aria-hidden="true">${icons[type] || 'ℹ️'}</span>
      <div class="toast__body">
        <p class="toast__title">${escapeHtml(title)}</p>
        <p class="toast__msg">${escapeHtml(message)}</p>
      </div>
      <button class="toast__close" aria-label="Cerrar notificación" title="Cerrar">✕</button>
    `;

    // Evento de cierre manual
    toast.querySelector('.toast__close').addEventListener('click', () => {
      dismissToast(toast);
    });

    toastContainer.appendChild(toast);

    // Auto-cerrar después de `duration` ms
    const autoClose = setTimeout(() => dismissToast(toast), duration);

    // Guardar el timer en el elemento para cancelarlo si se cierra manualmente
    toast._autoClose = autoClose;
  }

  /**
   * Aplica la animación de salida y elimina el toast del DOM.
   * @param {HTMLElement} toast - El elemento del toast a descartar.
   */
  function dismissToast(toast) {
    if (!toast || !toast.parentNode) return;
    clearTimeout(toast._autoClose);
    toast.classList.add('toast--out');
    setTimeout(() => toast.remove(), 300); // Esperar la animación CSS
  }

  /**
   * Escapa caracteres HTML para prevenir XSS.
   * @param {string} str - Cadena a escapar.
   * @returns {string} Cadena escapada.
   */
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Toast de bienvenida al cargar el dashboard
  setTimeout(() => {
    showToast('info', '📊 Dashboard activo', 'Sistema de monitoreo conectado — Guanacaste, CR', 4000);
  }, 1000);

  // Toast de alerta de presión baja (simulando alerta existente)
  setTimeout(() => {
    showToast('warning', '⚠️ Presión baja detectada', 'Sector B — Calle 2: 42 PSI (mínimo: 45 PSI)', 6000);
  }, 3000);


  /* ──────────────────────────────────────────────────────────
     MÓDULO 4 — BOTONES DE ACCIÓN RÁPIDA
     
     Cada botón ejecuta una acción simulada con feedback visual
     mediante el sistema de toasts.
  ────────────────────────────────────────────────────────── */

  /** Botón de exportar reporte */
  const btnExport = document.getElementById('btnExport');
  if (btnExport) {
    btnExport.addEventListener('click', function () {
      this.textContent = '⏳ Generando...';
      this.disabled = true;

      setTimeout(() => {
        this.textContent = '📄 Exportar Reporte';
        this.disabled = false;
        showToast('ok', '✅ Reporte generado', 'El reporte PDF del día fue generado exitosamente.', 4000);
      }, 2000);
    });
  }

  /** Botón de emergencia — requiere confirmación */
  const btnEmergency = document.getElementById('btnEmergency');
  if (btnEmergency) {
    btnEmergency.addEventListener('click', function () {
      // Feedback inmediato antes de confirmar
      showToast('danger', '🚨 Protocolo de emergencia', '¿Confirmar activación? Se notificará al equipo de guardia.', 8000);
      this.style.animation = 'pulse-red 0.5s ease 3';
      setTimeout(() => { this.style.animation = ''; }, 1500);
    });
  }

  /** Botón de notificar equipo */
  const btnNotify = document.getElementById('btnNotify');
  if (btnNotify) {
    btnNotify.addEventListener('click', function () {
      this.textContent = '📣 Enviando...';
      this.disabled = true;

      setTimeout(() => {
        this.textContent = '📣 Notificar Equipo';
        this.disabled = false;
        showToast('ok', '📣 Equipo notificado', '3 técnicos han sido alertados vía SMS y correo.', 4000);
      }, 1500);
    });
  }


  /* ──────────────────────────────────────────────────────────
     MÓDULO 5 — DESCARTE DE ALERTAS DEL PANEL
     
     Los botones de descarte (✕) en las alertas del panel
     lateral eliminan la alerta con una transición de salida.
     También actualiza el contador de alertas.
  ────────────────────────────────────────────────────────── */

  /**
   * Descarta una alerta del panel lateral con animación.
   * @param {HTMLElement} alertEl - El elemento .alert a descartar.
   */
  function dismissAlert(alertEl) {
    if (!alertEl) return;
    alertEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    alertEl.style.opacity    = '0';
    alertEl.style.transform  = 'translateX(20px)';

    setTimeout(() => {
      alertEl.remove();
      updateAlertCount();
    }, 300);
  }

  /**
   * Actualiza el conteo de alertas en el badge del panel y el navbar.
   */
  function updateAlertCount() {
    const remainingAlerts  = document.querySelectorAll('.alert-panel .alert').length;
    const badgePanel       = document.getElementById('alertCountBadge');
    const badgeNav         = document.getElementById('navAlertCount');
    const sideAlerts       = document.getElementById('sideAlerts');

    // Contar solo las alertas de tipo crítico (warning + danger)
    const criticalAlerts = document.querySelectorAll('.alert-panel .alert-warning, .alert-panel .alert-danger').length;

    if (badgePanel)  badgePanel.textContent  = remainingAlerts;
    if (badgeNav)    badgeNav.textContent     = remainingAlerts;
    if (sideAlerts)  sideAlerts.textContent   = criticalAlerts;
  }

  // Delegar el evento 'click' en el panel de alertas para los botones de descarte
  const alertPanel = document.querySelector('.alert-panel');
  if (alertPanel) {
    alertPanel.addEventListener('click', function (event) {
      const dismissBtn = event.target.closest('.alert-dismiss');
      if (dismissBtn) {
        const alertEl = dismissBtn.closest('.alert');
        dismissAlert(alertEl);
      }
    });
  }


  /* ──────────────────────────────────────────────────────────
     MÓDULO 6 — BOTÓN DE ACTUALIZACIÓN MANUAL
     
     Permite forzar una actualización de todos los sensores
     con feedback visual de rotación en el ícono.
  ────────────────────────────────────────────────────────── */

  const btnRefresh = document.getElementById('btnRefresh');
  if (btnRefresh) {
    btnRefresh.addEventListener('click', function () {
      const icon = this.querySelector('.refresh-icon');

      // Animación de rotación
      if (icon) {
        icon.style.transition  = 'transform 0.6s ease';
        icon.style.transform   = 'rotate(360deg)';
        setTimeout(() => {
          icon.style.transform = 'rotate(0deg)';
          icon.style.transition = '';
        }, 650);
      }

      // Actualizar sensores inmediatamente
      updateSensors();
      showToast('info', '🔄 Datos actualizados', 'Todos los sensores fueron consultados.', 3000);
    });
  }


  /* ──────────────────────────────────────────────────────────
     MÓDULO 7 — CONTADOR DE UPTIME (tiempo sin corte)
     
     Simula un contador de tiempo sin corte de servicio,
     actualizándolo cada minuto con el formato Xd Xh Xm.
  ────────────────────────────────────────────────────────── */

  /**
   * Tiempo de inicio simulado: hace 18 días y 4 horas.
   * Se usa Date.now() como referencia para calcular el uptime dinámico.
   * @type {number}
   */
  const uptimeStart = Date.now() - (18 * 24 * 60 + 4 * 60) * 60 * 1000;

  /**
   * Formatea milisegundos como "Xd Xh Xm".
   * @param {number} ms - Milisegundos a formatear.
   * @returns {string} Uptime formateado.
   */
  function formatUptime(ms) {
    const totalMin = Math.floor(ms / 60000);
    const days     = Math.floor(totalMin / (24 * 60));
    const hours    = Math.floor((totalMin % (24 * 60)) / 60);
    const minutes  = totalMin % 60;
    return `${days}d ${hours}h ${minutes}m`;
  }

  /** Actualiza el elemento de uptime en la UI */
  function updateUptime() {
    const elUptime = document.getElementById('uptimeCounter');
    if (elUptime) {
      elUptime.textContent = formatUptime(Date.now() - uptimeStart);
    }
  }

  // Actualizar uptime inmediatamente y luego cada minuto
  updateUptime();
  setInterval(updateUptime, 60000);


  /* ──────────────────────────────────────────────────────────
     MÓDULO 8 — TOOLTIP ENRIQUECIDO PARA BARRAS DEL GRÁFICO
     
     Muestra el valor exacto en un tooltip al hacer hover
     sobre las barras del gráfico de consumo.
  ────────────────────────────────────────────────────────── */

  // Los tooltips se manejan mediante el atributo 'title' nativo del HTML
  // para mantener la accesibilidad sin librerías externas.
  // Los estilos de cursor: pointer ya están en el CSS de .bar-fill.


  /* ──────────────────────────────────────────────────────────
     MÓDULO 9 — NAVEGACIÓN DEL SIDEBAR (comportamiento activo)
     
     Permite cambiar el item activo del sidebar con click
     o mediante el teclado (Enter/Espacio) para accesibilidad.
  ────────────────────────────────────────────────────────── */

  const sidebarItems = document.querySelectorAll('.sidebar-item');

  sidebarItems.forEach(function (item) {
    // Evento de click para cambiar item activo
    item.addEventListener('click', function () {
      sidebarItems.forEach((el) => {
        el.classList.remove('active');
        el.removeAttribute('aria-current');
      });
      this.classList.add('active');
      this.setAttribute('aria-current', 'true');
    });

    // Soporte de teclado: Enter y Espacio activan el item (WCAG 2.1)
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.click();
      }
    });
  });


  /* ──────────────────────────────────────────────────────────
     MÓDULO 10 — ACTUALIZACIÓN PERIÓDICA DEL CONSUMO (SIMULADA)
     
     Genera un toast cada 60 segundos informando el consumo
     acumulado para simular reportes automáticos del sistema.
  ────────────────────────────────────────────────────────── */

  setInterval(function () {
    const consumed = (4820 + Math.round(Math.random() * 120)).toLocaleString('es-CR');
    const elMet   = document.getElementById('metConsumption');
    if (elMet) elMet.textContent = `${consumed} m³`;

    showToast('info', '💧 Consumo actualizado', `Consumo acumulado hoy: ${consumed} m³`, 4000);
  }, 60000); // Cada 60 segundos

})(); // Fin del IIFE principal
