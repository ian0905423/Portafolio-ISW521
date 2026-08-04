"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
class NotificationService {
    processNotifications(notifications) {
        console.log("Iniciando proceso en bloqueos...");
        for (const notification of notifications) {
            notification.send();
        }
        console.log("...Finalizacion del proceso");
    }
}
exports.NotificationService = NotificationService;
//# sourceMappingURL=NotificationService.js.map