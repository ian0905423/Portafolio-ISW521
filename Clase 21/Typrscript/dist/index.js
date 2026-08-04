"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailNotification_1 = require("./classes/EmailNotification");
const SmsNotification_1 = require("./classes/SmsNotification");
const NotificationService_1 = require("./services/NotificationService");
const email = new EmailNotification_1.EmailNotification("prueba@gmail.com", "Este es un mensaje de prueba", "Probando notificacion");
const sms = new SmsNotification_1.SmsNotification("123456789", "Hola, tú código de seguridad es: 8888");
const queue = [email, sms];
const service = new NotificationService_1.NotificationService();
service.processNotifications(queue);
//# sourceMappingURL=index.js.map