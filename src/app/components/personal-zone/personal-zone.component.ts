import { Component, OnInit } from '@angular/core';
import { ClientType } from 'src/app/enums/client-type.enum';

@Component({
  selector: 'app-personal-zone',
  templateUrl: './personal-zone.component.html',
  styleUrls: ['./personal-zone.component.css']
})
export class PersonalZoneComponent implements OnInit {
  userType:ClientType;
  constructor() { }

  ngOnInit(): void {
  }

}
