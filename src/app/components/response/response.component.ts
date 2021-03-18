import { Component, OnInit } from '@angular/core';
import { ResponseService } from './response.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  response: number;
  constructor(private responseService: ResponseService) { }
  ngOnInit(): void {
    this.response = this.responseService.response;
  }

  public goBack() {
    window.history.back();
  }
}
