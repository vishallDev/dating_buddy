import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation ,jackInTheBoxOnEnterAnimation} from 'angular-animations';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
	jackInTheBoxOnEnterAnimation({anchor: 'enter'}),
	fadeOutOnLeaveAnimation()
      ]
})
export class AppComponent {
  title = 'dating-buddy';
  validDate:boolean = false;
  notMayuri: boolean = false;
  datingForm: FormGroup;
  authForm: FormGroup;
  stepCount:number =0;
setopacity: number = 0;
ifNo:boolean = false;
setBye:boolean = false;
saidYes:boolean = false;
ifNoCount:number = 0;
  constructor(private fb: FormBuilder) {
    this.datingForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.authForm = this.fb.group({
      name: ['', Validators.required],
    });
    for (let i = 14; i <= 20; i++) {
	this.days.push(i.toString());
      }
  }

  scheduleDate() {
    // Add your logic here for handling the scheduled date
    console.log('Scheduled Date:', this.datingForm.value);
  }

  scheduleAuth() {
    console.log(this.authForm.value);
    if (this.authForm.valid) {
      if (this.authForm.value['name'] == 'mayuri') {
        this.notMayuri = false;
	this.showLightning();
      } else {
	this.notMayuri = true;
      }
    }
  }

  showLightning() {
	this.validDate=true;
	this.stepCount=-1;
	setTimeout(() => {
		this.validDate=false;
		this.stepCount=1;
	}, 2400);
  }
  clearErrors() {
	this.notMayuri = false;
  }
  noaction() {
	this.ifNoCount++;
	this.ifNo = true;
	if (this.ifNoCount > 2) {
		this.setBye = true;
		this.stepCount=4;
	}
  }
  agreedate() {
	this.saidYes =true;
	this.ifNo=false;
	this.stepCount = 2;
  }

 selectedDay: string | null = '14';
  selectedMonth: string | null = 'April';
  selectedYear: string | null = '2024';

  days: string[] = ['14','15']; // replace with your day options
  months: string[] = ['April']; // replace with your month options
  years: string[] = ['2024']; 

  thankYou () {
	this.stepCount =3;
  }
}
