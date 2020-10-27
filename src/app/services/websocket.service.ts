import { Injectable, Inject } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {Observable, of} from 'rxjs';
import {delay, filter, map, retryWhen, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  constructor() {
  }

  connection$: WebSocketSubject<any>;
  RETRY_SECONDS = 100;
  connect(): Observable<any> {
    return of('http://localhost:8080/devices/5').pipe(
      filter(apiUrl => !!apiUrl),
      // https becomes wws, http becomes ws
      map(apiUrl => apiUrl.replace(/^http/, 'ws') + '/stream'),
      switchMap(wsUrl => {
        if (this.connection$) {
          return this.connection$;
        } else {
          this.connection$ = webSocket(wsUrl);
          return this.connection$;
        }
      }),
      retryWhen((errors) => errors.pipe(delay(this.RETRY_SECONDS)))
    );
  }
  send(data: any) {
    if (this.connection$) {
      this.connection$.next(data);
    } else {
      console.error('Did not send data, open a connection first');
    }
  }
  closeConnection() {
    if (this.connection$) {
      this.connection$.complete();
      this.connection$ = null;
    }
  }
  ngOnDestroy() {
    this.closeConnection();
  }
}
