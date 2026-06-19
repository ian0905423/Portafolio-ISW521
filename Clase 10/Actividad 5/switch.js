const rol = "admin";
let permiso;

switch (rol) {
    case "admin":
        permiso = "total";
        break;
    case "editor":
        permiso = "lectura-escritura";
        break;
    case "viewer":
        permiso = "solo-lectura";
        break;
    default:
        permiso = "sin-acceso";
}