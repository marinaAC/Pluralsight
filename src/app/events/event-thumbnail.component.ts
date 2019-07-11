import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event.name | uppercase }}</h2>
      <div>Date: {{ event.date | date: 'd/M/y' }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: {{ event.price | currency: 'USD' }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span>

        <span class="pad-left">{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        min-height: 232px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
})

//Input quiere decir que la informacion vendra de otro componente
export class EventThumbnailComponent {
  @Input() event: IEvent;

  someProperty: any = 'algun valor';

  logFoo() {
    console.log('foo');
  }
  /*
  <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
  //Este evento tiene que coincidir con el que se va a enviar o se va a mostrar en el otro componente
  @Output() eventClick = new EventEmitter();

  //Evento que se emite y se traspasa al otro componente principal
  handleClickMe() {
    console.log('Clickeado!');
    this.eventClick.emit(this.event.name);
  }*/
}
