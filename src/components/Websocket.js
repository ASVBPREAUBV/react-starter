import * as WebSocket from 'ws';

import React from 'react';

class WebsocketComponent extends React.Component {
  constructor() {
    super();

    const ws = new WebSocket('wss://echo.websocket.org/', {
      origin: 'https://websocket.org'
    });

    ws.on('open', function open() {
      console.log('connected');
      ws.send(Date.now());
    });

    ws.on('close', function close() {
      console.log('disconnected');
    });

    ws.on('message', function incoming(data) {
      console.log(`Roundtrip time: ${Date.now() - data} ms`);

      setTimeout(function timeout() {
        ws.send(Date.now());
      }, 500);
    });
  }

  render() {
    return <h1>WEBSOCKET</h1>;
  }
}

export const Websocket = WebsocketComponent;
