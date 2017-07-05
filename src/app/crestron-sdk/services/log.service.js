import { Subject } from 'rxjs';
var LoggerService = (function () {
    function LoggerService() {
        this.loggerSubject = {};
    }
    LoggerService.prototype.getLoggerSubscribe = function (type) {
        return this.getLoggerSubject(type).asObservable();
    };
    LoggerService.prototype.getLoggerSubject = function (type) {
        return this.loggerSubject[type] || (this.loggerSubject[type] = new Subject());
    };
    LoggerService.prototype.debug = function (message) {
        this.sendLogs('debug', message);
    };
    LoggerService.prototype.sendLogs = function (type, message) {
        var time = new Date();
        if (!this.loggerSubject[type]) {
            this.loggerSubject[type] = new Subject();
        }
        this.loggerSubject[type].next({ time: time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"), data: message });
    };
    return LoggerService;
}());
export { LoggerService };
//# sourceMappingURL=log.service.js.map