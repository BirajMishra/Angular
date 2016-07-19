import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contact-form',
  templateUrl: 'contact-form.component.html'
})
export class ContactForm {

onSubmit(form){
  console.log(form);
}
}
