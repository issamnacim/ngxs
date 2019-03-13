import { Component, ViewChild, ElementRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormState } from './app.state';
import { MatSelect, MatSlideToggle, MatOption } from '@angular/material';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Person } from './shared/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(FormState.personForm) person$: Observable<any>;

  filtersForm: FormGroup;

  title = 'app';

  constructor(
    private formBuilder: FormBuilder,
    private store: Store) {
      this.filtersForm = this.formBuilder.group({
        nom: [null],
        prenom: [null],
        age: [null]
      });
      
  }

  submitForm() {
    this.person$.subscribe(item=>{
      console.log('person: ',item.model)
    });
  }
}
