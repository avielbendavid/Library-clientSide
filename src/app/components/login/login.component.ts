import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientType } from 'src/app/enums/client-type.enum';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType = ClientType;
  loginFormGroup: FormGroup;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
      clientType: ['', Validators.required]
    });
  }


  login() {
    const fr = this.loginFormGroup.value;
    const user = {
      email: fr.email,
      password: fr.password,
      clientType: fr.clientType
    }
    this.apiService.login(user.clientType, user.email, user.password).subscribe(
      (token) => {
        localStorage.setItem("userType", user.clientType);
        localStorage.setItem("userName", user.clientType);
        localStorage.setItem("token", token);
        this.router.navigate(['personal-zone']);
      },
      (error) => { this.errorService.handleError(error) }
    );
  }
a(){
  console.dir(this.loginFormGroup);
  
}
}
