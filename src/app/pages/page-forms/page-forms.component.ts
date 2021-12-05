import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IndexDocument } from 'src/app/shared/models/index-document';
import { DataApiService } from '../../shared/services/data-api.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import * as Prism from '../../../assets/js/PrismJS_1.20.0.js';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';

interface Form {
  inputBasic: string;
  inputPassword: string;
  inputAutoSaved: string;
  inputDatetime: string;
  inputDatetimeAutoSaved: string;
  textareaAutoSaved: string;
  selectBasic: string;
  selectAutoSaved: string;
  autoCompleteBasic: string;
  autoCompleteAutoSaved: string;
}

@Component({
  selector: 'app-page-forms',
  templateUrl: './page-forms.component.html',
  styleUrls: ['./page-forms.component.scss']
})
export class PageFormsComponent implements OnInit {
  indexDocument: IndexDocument[];
  colors: string[] = ['Amarillo', 'Azul', 'rojo', 'Verde', 'Morado'];
  shoes: string[]  = ['Nike', 'Adidas', 'Reebok', 'Puma', 'Umbro' ];
  filteredColors: Observable<string[]>;
  filteredShoes: Observable<string[]>;
  hidePassword: boolean = true;
  tabLoadContent: string[] = [];
  panelOpenState = true;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  selectableCar = true;
  removableCar =true;
  carCtrl = new FormControl();
  filteredCars: Observable<string[]>;
  cars: string[] = ['Jeep'];
  allCars: string[] = ['Audi', 'Jeep', 'Buggati', 'Ferrari', 'Lamborgini'];

  form: Form = {
    inputBasic: "",
    inputPassword: "secret",
    inputAutoSaved: "Texto guardado",
    inputDatetime: "",
    inputDatetimeAutoSaved: "",
    textareaAutoSaved: "",
    selectBasic: "",
    selectAutoSaved: "5",
    autoCompleteBasic: "",
    autoCompleteAutoSaved: "",
  }
  formInput: FormGroup = new FormGroup({
    inputBasic : new FormControl(this.form.inputBasic),
    inputPassword : new FormControl(this.form.inputPassword),
    inputAutoSaved : new FormControl({value: this.form.inputAutoSaved, disabled: true}),
    inputDatetime : new FormControl(this.form.inputDatetime),
    inputDatetimeAutoSaved : new FormControl({value: this.form.inputDatetimeAutoSaved, disabled: true}),
    textareaAutoSaved : new FormControl({value: this.form.textareaAutoSaved, disabled: true}),
  });
  formSelect: FormGroup = new FormGroup({
    selectBasic : new FormControl(this.form.selectBasic),
    autoCompleteBasic : new FormControl(this.form.autoCompleteBasic),
    selectAutoSaved : new FormControl({value: this.form.selectAutoSaved, disabled: true}),
    autoCompleteAutoSaved : new FormControl({value: this.form.autoCompleteAutoSaved, disabled: true}),
  });

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('carInput') carInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor( private dataApiService: DataApiService ) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filterFruits(fruit) : this.allFruits.slice()));

    this.filteredCars = this.carCtrl.valueChanges.pipe(
      startWith(null),
      map((car: string | null) => car ? this._filterCars(car) : this.allCars.slice()));
   }

  private _filterFruits(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterCars(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCars.filter(car => car.toLowerCase().indexOf(filterValue) === 0);
  }

  addFruit(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  addCar(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  removeCar(car: string): void {
    const index = this.cars.indexOf(car);

    if (index >= 0) {
      this.cars.splice(index, 1);
    }
  }

  selectedFruit(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  selectedCar(event: MatAutocompleteSelectedEvent): void {
    this.cars.push(event.option.viewValue);
    this.carInput.nativeElement.value = '';
    this.carCtrl.setValue(null);
  }

  private _filter(arrOptions: string[], value: string): string[] { 
    return arrOptions.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0);
  }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Formularios");
    
    this.dataApiService.getData().subscribe(data => {
      this.indexDocument = data["forms"]["index"];
    });
    this.filteredColors = this.formSelect.controls.autoCompleteBasic.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.colors, value))
    );
    this.filteredShoes = this.formSelect.controls.autoCompleteAutoSaved.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.shoes, value))
    );
  }

  editInput(actions: HTMLDivElement) {
    this.formInput.controls.inputAutoSaved.enable();
    this.showActions(actions);
  }
  saveInput(actions: HTMLDivElement) {
    this.form.inputAutoSaved = this.formInput.controls.inputAutoSaved.value;
    this.formInput.controls.inputAutoSaved.disable();
    this.hideActions(actions);
  }
  cancelInput(actions: HTMLDivElement) {
    this.formInput.controls.inputAutoSaved.setValue(this.form.inputAutoSaved);
    this.formInput.controls.inputAutoSaved.disable();
    this.hideActions(actions);
  }
  editTextarea(actions: HTMLDivElement) {
    this.formInput.controls.textareaAutoSaved.enable();
    this.showActions(actions);
  }
  saveTextarea(actions: HTMLDivElement) {
    this.form.textareaAutoSaved = this.formInput.controls.textareaAutoSaved.value;
    this.formInput.controls.textareaAutoSaved.disable();
    this.hideActions(actions);
  }
  cancelTextarea(actions: HTMLDivElement) {
    this.formInput.controls.textareaAutoSaved.setValue(this.form.textareaAutoSaved);
    this.formInput.controls.textareaAutoSaved.disable();
    this.hideActions(actions);
  }
  editSelect(actions: HTMLDivElement) {
    this.formSelect.controls.selectAutoSaved.enable();
    this.showActions(actions);
  }
  saveSelect(actions: HTMLDivElement) {
    this.form.selectAutoSaved = this.formSelect.controls.selectAutoSaved.value;
    this.formSelect.controls.selectAutoSaved.disable();
    this.hideActions(actions);
  }
  cancelSelect(actions: HTMLDivElement) {
    this.formSelect.controls.selectAutoSaved.setValue(this.form.selectAutoSaved);
    this.formSelect.controls.selectAutoSaved.disable();
    this.hideActions(actions);
  }
  editAutoComplete(actions: HTMLDivElement) {
    this.formSelect.controls.autoCompleteAutoSaved.enable();
    this.showActions(actions);
  }
  saveAutoComplete(actions: HTMLDivElement) {
    this.form.autoCompleteAutoSaved = this.formSelect.controls.autoCompleteAutoSaved.value;
    this.formSelect.controls.autoCompleteAutoSaved.disable();
    this.hideActions(actions);
  }
  cancelAutoComplete(actions: HTMLDivElement) {
    this.formSelect.controls.autoCompleteAutoSaved.setValue(this.form.autoCompleteAutoSaved);
    this.formSelect.controls.autoCompleteAutoSaved.disable();
    this.hideActions(actions);
  }
  editAutoCompleteTag(chipList: HTMLDivElement, actions: HTMLDivElement) {
    chipList.classList.remove("mat-chip-disabled");
    this.showActions(actions);
  };
  saveAutoCompleteTag(chipList: HTMLDivElement, actions: HTMLDivElement) {
    chipList.classList.add("mat-chip-disabled");
    this.hideActions(actions);
  };
  cancelAutoCompleteTag(chipList: HTMLDivElement, actions: HTMLDivElement) {
    chipList.classList.add("mat-chip-disabled");
    this.hideActions(actions);
  };
  editDateTime(actions: HTMLDivElement) {
    this.formInput.controls.inputDatetimeAutoSaved.enable();
    this.showActions(actions);
  }
  saveDateTime(actions: HTMLDivElement) {
    this.form.inputDatetimeAutoSaved = this.formInput.controls.inputDatetimeAutoSaved.value;
    this.formInput.controls.inputDatetimeAutoSaved.disable();
    this.hideActions(actions);
  }
  cancelDateTime(actions: HTMLDivElement) {
    this.formInput.controls.inputDatetimeAutoSaved.setValue(this.form.inputDatetimeAutoSaved);
    this.formInput.controls.inputDatetimeAutoSaved.disable();
    this.hideActions(actions);
  }

  showActions(actions: HTMLDivElement) { actions.classList.remove("hidden"); }
  hideActions(actions: HTMLDivElement) { actions.classList.add("hidden"); }

  getContentLoaded(index: number) {
    if ( !this.tabLoadContent[index] ) {
      this.tabLoadContent[index] = ''; // `Contenido del tab ${index}`;
    }

    Prism.highlightAll();
    return this.tabLoadContent[index];
  }
}
