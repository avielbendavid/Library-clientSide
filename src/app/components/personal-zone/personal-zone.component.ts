import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-zone',
  templateUrl: './personal-zone.component.html',
  styleUrls: ['./personal-zone.component.css']
})
export class PersonalZoneComponent implements OnInit {
  userType:string;
  constructor() { }

  ngOnInit(): void {
    this.userType=localStorage.getItem("userType");
  }

}
