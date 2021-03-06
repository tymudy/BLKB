import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommunicationService } from './communication.service';
import { LoggerService } from './log.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class JoinsService {

  private joins:any= {
    analog: {},
    serial: {},
    digital: {}
  };

  private joinSubject:any= {
    analog: {},
    serial: {},
    digital: {}
  };

  constructor( private communicationService: CommunicationService, private loggerService: LoggerService ) {}

  getDigitalSubscribe( id: number, cache: any ): Observable<any> {
    return this.subscribeSignalDigital( id ).asObservable();
  }

  getAnalogSubscribe(id: number, cache: any): Observable<any> {
    return this.subscribeSignalAnalog( id ).asObservable();
  }

  getSerialSubscribe(id: number, cache: any):Observable<any> {
    return this.subscribeSignalSerial(id).asObservable();
  }

  private subscribeSignalDigital ( id: number):Subject<any> {
    let me = this;

    if ( !me.joins.digital[ id ] ) {
      me.joinSubject.digital[ id ] = new Subject();
      this.communicationService.subscribeCodeDigital( id, function( id, value ){
        me.joins.digital[ id ] = Object.assign({}, {id: id, value: value});
        me.joinSubject.digital[ id ].next(me.joins.digital[ id ]);
        me.loggerService.debug('Dig Com Rx - ' +  id + ' - ' + value);
      });
    }
    return me.joinSubject.digital[ id ];
  }

  private subscribeSignalAnalog ( id: number):Subject<any> {
    let me = this;

    if ( !me.joins.analog[ id ] ) {
      me.joinSubject.analog[ id ] = new Subject();
      this.communicationService.subscribeCodeAnalog( id, function( id, value ){
        me.joins.analog[ id ] = Object.assign({}, {id: id, value: value});
        me.joinSubject.analog[ id ].next(me.joins.analog[ id ]);
        me.loggerService.debug('Anlg Com Rx - ' +  id + ' - ' + value);
      });
    }
    return me.joinSubject.analog[ id ];
  }

  private subscribeSignalSerial( id: number):Subject<any> {
    let me = this;
    if ( !me.joins.serial[ id ] ) {
      me.joinSubject.serial[ id ] = new Subject();
      this.communicationService.subscribeCodeSerial( id, function( id, value ){
        me.joins.serial[ id ] = Object.assign({}, {id: id, value: value});
        me.joinSubject.serial[ id ].next(me.joins.serial[ id ]);
        me.loggerService.debug('Ser Com Rx - ' +  id + ' - ' + value);
      });
    }
    return me.joinSubject.serial[ id ];
  }
}
