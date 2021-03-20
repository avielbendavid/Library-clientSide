import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Library } from 'src/app/models/library';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) {

  }

  ngOnInit(): void {

  }

  contact(){
    this.router.navigate(['/contact']);
  }

}
