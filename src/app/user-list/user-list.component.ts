import { Component, OnInit } from '@angular/core';

interface Agent {  
  Bus_No: Number,
  Agent_No: Number,
  Team_No: Number,
  username: String,
  UserNameDomain: String,
  first_name: String,
  middle_name: String,
  last_name: String,
  email: String,
  Status: String,
  Mod_DateTime: String,
  TimeZone: String,
  EmailRefusalTimeout: String,
  DocumentRefusalTimeout: String,
  ChatRefusalTimeout: String,
  PhoneCallRefusalTimeout: String,
  VoiceMailRefusalTimeout: String,
  WorkItemRefusalTimeout: String,
  UseTeamMaxConcurrentChats: Number,
  MaxConcurrentChats: Number,
  WfmNotificationEnabled: Number,
  WfmNotificationInterval: Number,
  Billable: Number,
  UseTeamMaxEmailInboxCount: Number,
  MaxEmailInboxCount: Number,
  UserId: String  
}  

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  agents: Agent[] = [];

  constructor() {}

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    fetch('http://localhost:3000/',{
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data: Agent[]) => {
        this.agents = data;
        console.log('Data Gotten from FETCH: ', data)
      })
      .catch((error) => {
        console.log('Error fetching user data:', error);
      });
  }

  
}