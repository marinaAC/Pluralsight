import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

//Esta es una forma de protejer las rutas, cuando reciben algun parametro incompleto.
//Esto se termina de configurar desde el archivo routes cuando se da las definiciones de las rutas
@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    //forma de casteo hacia booleano
    const eventExist = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExist) {
      this.router.navigate(['/404']);
    }
    return eventExist;
  }
}
