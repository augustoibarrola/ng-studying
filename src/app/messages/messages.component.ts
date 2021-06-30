import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message-service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  color:string = "red";
  
  constructor(public messageService:MessageService) { }
  /*Angular will inject the singleton MessageService into that property when it creates the MessagesComponent.*/

  ngOnInit(): void {
  }

}
