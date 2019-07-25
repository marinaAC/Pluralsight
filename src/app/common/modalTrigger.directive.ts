import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';
//Al estar entre corchetes significa que es un atributo en el selector
@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    //Esto es una forma de crear un alias, ya que no va a poder tomar el guion en el medio
    @Input('modal-trigger') modalId: string;
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }
    ngOnInit() {
        this.el.addEventListener('click', e => {
            //esto se transforma a emmascriot6
            this.$(`#${this.modalId}`).modal({})
        })

    }
}