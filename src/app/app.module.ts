import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CollapsibleWellComponent, JQ_TOKEN, ModalTriggerDirective, SimpleModalComponent, Toastr, TOASTR_TOKEN } from './common/index';
import { Error404Component } from './error/404.component';
import { EventsAppComponent } from './events-app.component';
import { CreateEventComponent, CreateSesionComponent, DurationPipe, EventDetailsComponent, EventListResolver, EventRouteActivator, EventService, EventsListComponent, EventThumbnailComponent, SessionListComponent } from './events/index';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';



//declare let toastr: Toastr;
let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

//Declaretions es para los componentes,
// los servicios van en providers
//Imports es para la importacion de otros modules
@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSesionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective,
        DurationPipe
    ],
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        EventRouteActivator,
        EventListResolver,
        AuthService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('Esta seguro de que se quiere ir? aun no ha salvado el evento');
    } else {
        return true;
    }
}
