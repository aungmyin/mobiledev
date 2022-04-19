import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  
  public skillsForm: FormGroup;
  namedly: String;
  submitted = false;

  data: any;

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: ['', [Validators.required]],
      skills: this.fb.array([]),
      tranexp: this.fb.array([])
    });
  }

  ngOnInit() {

    this.data = {skills: [{skill: 'my skill1', exp: 'photoshop'}, {skill: 'my skill2', exp: 'php, mysql'}, {skill: 'my skill3', exp: 'Angular 8 mobile'}, {skill: '', exp: ''}] };
    //this.skillsForm.controls.name.setValue('abc');

    for(let i=0; i < this.data.skills.length; i++){
      let formGroup = this.fb.group({
        skill: this.data.skills[i].skill,
        exp: this.data.skills[i].exp,
      });

      this.skills.push(formGroup);
    }

   // console.log(this.skills);

    for(let i=0; i < this.data.skills.length; i++){
      let formGroup = this.fb.group({
        skill: this.data.skills[i].skill,
        exp: this.data.skills[i].exp,
      });

      this.tranexp.push(formGroup);
    }

    console.log(this.tranexp);

  }

  // convenience getter for easy access to form fields
  get f() { return this.skillsForm.controls; }

  getValidity(i) {
    return (<FormArray>this.skillsForm.get('tranexp')).controls[i].invalid;
  }

  //read only formarray
  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  //read only formarray
  get tranexp() : FormArray {
    return this.skillsForm.get("tranexp") as FormArray
  }


  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
  newTexpense(): FormGroup {
    return this.fb.group({
      skill: ['', [Validators.required]],
      exp: ['', [Validators.required]],
    })
  }

  addTexpense() {
    this.tranexp.push(this.newTexpense());
  }
  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
  removeTexpense(i:number) {
    this.tranexp.removeAt(i);
  }

  onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.skillsForm.invalid) {
      return;
    }

    // display form values on success
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.skillsForm.value, null, 4));

    console.log(this.skillsForm.value);
  }

  onReset() {
    this.submitted = false;
    this.skillsForm.reset();
  }


}
