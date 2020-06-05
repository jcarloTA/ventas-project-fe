import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  /* -------------------------------------------------------------------------------------------------------------- */
  private serviceURL = 'http://localhost:8585/persona';



  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  /* -------------------------------------------------------------------------------------------------------------- */

  constructor(private httpClient: HttpClient) {
  }

  /* -------------------------------------------------------------------------------------------------------------- */

  /**
   * Servicio que permite la conexion hacia el servicio reactivo,
   * dicha funcion retorna
   */
  public getPersonaNotification(): Observable<any> {

    // creando un observable ... que este conectado mediante un "EventSource"
    return Observable.create((observer) => {

      const url: any = this.serviceURL + '/notification/sse';

      // definiendo conexion de event source ... asi como los eventos que estara escuchando
      /*const eventSource = new EventSourcePolyfill(url,
        {
          heartbeatTimeout: 20000,
          connectionTimeout: 60000
        }
      );*/

      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) => {
        console.log('Received event: ', event);

      };
      eventSource.addEventListener('persona-result', function (event: any) {
        observer.next(event.data);
      });

      // verificar los "event" definidos para los flujos en el server
      eventSource.addEventListener('heartbeat-result', function (event) {
        console.log('eventSource.addEventListener: on heartbeat....');
      });

      return () => eventSource.close();
    });
  }
}
