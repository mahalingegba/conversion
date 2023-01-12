import { Component, OnInit, Pipe } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup; //same name as formGroup name in the template.

  constructor(private formBuilder: FormBuilder) {
    // this.checkoutForm = formBuilder.group({
    //   //building form using formBuilder
    //   emailAdress: new FormControl(), //creating group of form elements same as form.
    //   password: new FormControl(), //also have it in dynamic
    //   terms: new FormControl(),
    // });

    this.checkoutForm = formBuilder.group({
      //building form using formBuilder
      emailAdress: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ], //creating group of form elements same as form.
      password: ['', Validators.required], //also have it in dynamic
      terms: ['', Validators.requiredTrue],

      //FormsArray simple
      // items: this.formBuilder.array([
      //   new FormControl('Angular'),
      //   new FormControl('Javascript'),
      // ]),

      //FormsArray
      items: this.formBuilder.array([
        this.formBuilder.group({
          itemId: ['1'],
          itemName: ['Maadevaa'],
          teamDesc: ['', Validators.requiredTrue],
        }),
      ]),
    });
  }

  ngOnInit(): void {
    this.checkoutForm.get('emailAdress').valueChanges.subscribe((data) => {
      console.log(data);
    });
    //entire form
    this.checkoutForm.valueChanges.subscribe((data) => console.log(data));

    //statusChange - Induvidual;
    this.checkoutForm.get('emailAdress').statusChanges.subscribe((data) => {
      console.log(data);
    });
    //statusChange - entire Form;
    this.checkoutForm.statusChanges.subscribe((status) => {
      console.log('status---' + status);
    });
    console.log(this.checkoutForm.get('items').value);
  }
  postData() {
    console.log(this.checkoutForm);
    console.log(this.checkoutForm.value);
    console.log(this.checkoutForm.value.emailAdress);
  }

  resetForm() {
    this.checkoutForm.reset();
  }
  //adding rows dyanmically

  get items() {
    return this.checkoutForm.get('items') as FormArray;
  }
  addNewRow() {
    const itemLength = this.items.length;
    const newItem = this.formBuilder.group({
      itemId: [itemLength + 1],
      itemName: [''],
      teamDesc: ['', Validators.requiredTrue],
    });
    this.items.push(newItem);
  }
  removeItem(itemId) {
    this.items.removeAt(itemId);
  }
}
