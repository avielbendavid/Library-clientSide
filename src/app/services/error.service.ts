import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseService } from '../components/response/response.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private responseService:ResponseService,private router:Router) { }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    
    if(error.status==0){
      this.responseService.response=0;
      this.router.navigate(['/response']);
    }
  }
}
