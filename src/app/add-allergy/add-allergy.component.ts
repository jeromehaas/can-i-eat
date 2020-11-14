import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Allergy } from '../allergy';
import { AllergyService } from '../allergy.service';

@Component({
  selector: 'app-add-allergy',
  templateUrl: './add-allergy.component.html',
  styleUrls: ['./add-allergy.component.scss']
})
export class AddAllergyComponent implements OnInit {

  constructor(private allergyService: AllergyService) { }
  allergyForm: FormGroup;

  ngOnInit(): void {
    // form config
    this.allergyForm = new FormGroup({
      'allergy': new FormControl(null, Validators.required)
    })
  }



  onSubmit (): void {
    console.log(this.allergyForm.value);

    const { invalid } = this.allergyForm;

    // const allergyObject: Allergy = {
    //   allergy: allergy,
    // }

    // if (!invalid) {
    //   this.allergyService.postAllergy(allergy)
    //     .subscribe((allergy) => {
    //       this.allergyService.addToAllergies(allergy)
    //     })
    // }

  }
}