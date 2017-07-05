import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ComponentsCommunicationService {

    private componentsSubject = {};
    private controllersSubject = {};

    getComponentSubscribe( id:string ):Observable<any> {
        return this.getComponentSubject( id ).asObservable();
    }

    getControllerSubscribe( id: string ):Observable<any> {
        return this.getControllerSubject( id ).asObservable();
    }

    private getComponentSubject(id: string):Subject<any> {
        if(!this.componentsSubject[id]) {
            this.componentsSubject[ id ] = new Subject();
        }
        return this.componentsSubject[ id ];
    }

    private getControllerSubject( id: string ):Subject<any> {
        if(!this.controllersSubject[id]) {
            this.controllersSubject[ id ] = new Subject();
        }
        return this.controllersSubject[ id ];
    }

    publishData( data: any, id:string ):void {
        this.getComponentSubject( id ).next(data);
    }

    createDataRequest( id: string ) {
        this.getControllerSubject( id ).next( true );
    }
}