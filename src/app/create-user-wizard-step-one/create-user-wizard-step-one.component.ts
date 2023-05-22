import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-wizard-step-one',
  templateUrl: './create-user-wizard-step-one.component.html',
  styleUrls: ['./create-user-wizard-step-one.component.css']
})
export class CreateUserWizardStepOneComponent{
    public Bus_No: string | undefined;
    public Agent_No: string | undefined;
    public Team_No: string | undefined;
    public username: string | undefined;
    public UserNameDomain: string | undefined;
    public first_name: string | undefined;
    public middle_name: string | undefined;
    public last_name: string | undefined;
    public email: string | undefined;
    public Status: string | undefined;
    public Mod_DateTime: string | undefined;
    public TimeZone: string | undefined;
    public EmailRefusalTimeout: string | undefined;
    public DocumentRefusalTimeout: string | undefined;
    public ChatRefusalTimeout: string | undefined;
    public PhoneCallRefusalTimeout: string | undefined;
    public VoiceMailRefusalTimeout: string | undefined;
    public WorkItemRefusalTimeout: string | undefined;
    public UseTeamMaxConcurrentChats: string | undefined;
    public MaxConcurrentChats: string | undefined;
    public WfmNotificationEnabled: string | undefined;
    public WfmNotificationInterval: string | undefined;
    public Billable: string | undefined;
    public UseTeamMaxEmailInboxCount: string | undefined;
    public MaxEmailInboxCount: string | undefined;
    public UserId: string | undefined;
  
  saveDataToJSON =() => {
    let InputJson=[{
      Bus_No: this.Bus_No,
      Agent_No: this.Agent_No,
      Team_No: this.Team_No,
      username: this.username,
      UserNameDomain: this.UserNameDomain,
      first_name: this.first_name,
      middle_name: this.middle_name,
      last_name: this.last_name,
      email: this.email,
      Status: this.Status,
      Mod_DateTime: this.Mod_DateTime,
      TimeZone: this.TimeZone,
      EmailRefusalTimeout: this.EmailRefusalTimeout,
      DocumentRefusalTimeout: this.DocumentRefusalTimeout,
      ChatRefusalTimeout: this.ChatRefusalTimeout,
      PhoneCallRefusalTimeout: this.PhoneCallRefusalTimeout,
      VoiceMailRefusalTimeout: this.VoiceMailRefusalTimeout,
      WorkItemRefusalTimeout: this.WorkItemRefusalTimeout,
      UseTeamMaxConcurrentChats: this.UseTeamMaxConcurrentChats,
      MaxConcurrentChats: this.MaxConcurrentChats,
      WfmNotificationEnabled: this.WfmNotificationEnabled,
      WfmNotificationInterval: this.WfmNotificationInterval,
      Billable: this.Billable,
      UseTeamMaxEmailInboxCount: this.UseTeamMaxEmailInboxCount,
      MaxEmailInboxCount: this.MaxEmailInboxCount,
      UserId: this.UserId,
    }]
    console.log('Saved to JSON:\n', InputJson)

  }
  submitData=() => {
    console.log("Submitted.")
  }
  postUserData=()=>{
    let InputJson={
      Bus_No: this.Bus_No,
      Agent_No: this.Agent_No,
      Team_No: this.Team_No,
      username: this.username,
      UserNameDomain: this.UserNameDomain,
      first_name: this.first_name,
      middle_name: this.middle_name,
      last_name: this.last_name,
      email: this.email,
      Status: this.Status,
      Mod_DateTime: this.Mod_DateTime,
      TimeZone: this.TimeZone,
      EmailRefusalTimeout: this.EmailRefusalTimeout,
      DocumentRefusalTimeout: this.DocumentRefusalTimeout,
      ChatRefusalTimeout: this.ChatRefusalTimeout,
      PhoneCallRefusalTimeout: this.PhoneCallRefusalTimeout,
      VoiceMailRefusalTimeout: this.VoiceMailRefusalTimeout,
      WorkItemRefusalTimeout: this.WorkItemRefusalTimeout,
      UseTeamMaxConcurrentChats: this.UseTeamMaxConcurrentChats,
      MaxConcurrentChats: this.MaxConcurrentChats,
      WfmNotificationEnabled: this.WfmNotificationEnabled,
      WfmNotificationInterval: this.WfmNotificationInterval,
      Billable: this.Billable,
      UseTeamMaxEmailInboxCount: this.UseTeamMaxEmailInboxCount,
      MaxEmailInboxCount: this.MaxEmailInboxCount,
      UserId: this.UserId,
    }
    console.log('Saved to JSON:\n', InputJson)
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(InputJson),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('POST request successful', data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.log('Error in POST request', error);
        // Handle the error as needed
      });
  }
}
