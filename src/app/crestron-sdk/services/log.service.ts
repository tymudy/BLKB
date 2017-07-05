import { Subject, Observable } from 'rxjs';

interface ILogger {
    debug( message: string ):void;
}

export class LoggerService implements ILogger {

    loggerSubject:any= {};

    getLoggerSubscribe( type: string ):Observable<any> {
        return this.getLoggerSubject( type ).asObservable();
    }

    private getLoggerSubject( type: string ):Subject<any> {
        return this.loggerSubject[ type ] || (this.loggerSubject[ type ] = new Subject());
    }

    public debug( message: string ):void {
        this.sendLogs('debug', message);
    }

    private sendLogs( type: string, message: string ): void {
        let time = new Date();

        if( !this.loggerSubject[type] ) {
            this.loggerSubject[type] = new Subject();
        }

        this.loggerSubject[type].next({time: time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"), data: message});
    }

}