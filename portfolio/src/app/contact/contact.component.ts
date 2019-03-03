import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 contactForm: FormGroup;
 //  submitted: false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm =  this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      })
    });
  }
  onSubmit() {
    console.warn(this.contactForm.value.name);
    //  this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value));
    this.contactForm.reset();
  }

}
