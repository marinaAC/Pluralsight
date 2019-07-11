import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';
//{{INTERPOLACION: Representa un enlace unidericcional}} Angular lo buscara dentro del componente

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  //Esta es la forma abreviada de declarar el atributo y asignarle valor en typescript
  //No es buena idea poner respuestas de llamadas a sericios en el contrstructor por cuestiones de tiempo
  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  //Se llama al momento que se carga el componenet
  //Suscribe es para el observable que tenemos en el servicio, no va a ser de forma inmediata, sino momentanea
  // ngOnInit() {
  //   this.eventService.getEvents().subscribe(events => {
  //     this.events = events;
  //   });
  // }
  //Ya no es necesario llamarlo de esta forma, ya que el resuelto y su suscricipcion se resuelven en el route

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  /**
   *  Utilizar #propiedad, hace que sea accesible desde cualquier lugar de nuestra plantilla
   *  Sirve para reemplazar los input y output, ya que se accede directamente hacia el otro lugar
   */
  /*
   <h3>{{ thumbnail.someProperty }}</h3>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
  Se llama desde la directiva como (eventClick)="handleEventClicked($event)"
  //Forma de capturar el evento que me envia el hijo
  handleEventClicked(data) {
    console.log('recibido: ', data);
  }*/
}
