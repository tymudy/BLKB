import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoggerService } from './log.service';

declare var Crestron: any;

@Injectable( )

export class CommunicationService {

  constructor( private logger: LoggerService ) { }

  private CJS:any = Crestron.UI.JoinService;
  private sygnalType: any = {
      analog: 'analogListener',
      serial: 'serialListener',
      digital: 'digitalListener'
  };


  public sendCodeAnalog ( code: number, value:number ) : void {
    this.logger.debug( 'Anlg Tx - ' + code + ' - ' + value);
    this.CJS.analogListener.updateCS( code, value );
  }

  public sendCodeDigital ( code:number, value:number ) : void {
    this.logger.debug( 'Dig Tx - ' + code + ' - ' + value);
    this.CJS.digitalListener.updateCS( code, value );
  }

  public sendCodeSerial ( code: number, value: number ) : void {
    this.logger.debug('Ser Tx - ' + code + ' - ' + value);
    this.CJS.serialListener.updateCS( code, value );
  }

  public subscribeCodeAnalog ( code:number, cb: (code: number, value: number) => void ) : void {
    let analog = this.sygnalType['Analog'];

    this.CJS[this.sygnalType.analog].subscribe( code, cb );
  }

  public subscribeCodeDigital ( code:number, cb: (code: number, value: number) => void ): void {
    this.CJS[this.sygnalType.digital].subscribe( code, cb );
  }

  public subscribeCodeSerial ( code:number, cb: (code: number, value: number) => void ) : void {
    this.CJS[this.sygnalType.serial].subscribe( code, cb );
  }
}
