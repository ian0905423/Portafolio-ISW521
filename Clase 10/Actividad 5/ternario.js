const rol = "admin";

const permiso = rol === "admin" ? "total"
              : rol === "editor" ? "lectura-escritura"
              : rol === "viewer" ? "solo-lectura"
              : "sin-acceso";

