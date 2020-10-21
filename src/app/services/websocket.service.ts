import { Injectable, Inject } from '@angular/core';
import { of, Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  websocket: WebSocket;

  constructor() {}
}
