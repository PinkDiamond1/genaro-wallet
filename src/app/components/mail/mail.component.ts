import { Component, OnInit } from '@angular/core';
import { EdenService } from '../../services/eden.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  public path: string = null;
  public edenDialogName: string = null;
  public edenDialogOpt: any = null;

  public mails: any[] = [];

  constructor(
    public edenService: EdenService,
  ) { }

  ngOnInit() {
    this.edenService.updateAll();
    console.log(this.edenService.mail)
  }

  openInbox() {
    this.path = "inbox";
    this.edenService.changePath(["/", this.edenService.mail.inbox]);
  }

  openOutbox() {
    this.path = "outbox";
    this.edenService.changePath(["/", this.edenService.mail.outbox]);
  }

  sendMessage() {
    this.edenDialogName = "sendMessage";
    this.edenDialogOpt = this.edenService.mail.outbox;
  }

  showMessage(data) {
    this.edenDialogName = "openMessage";
    this.edenDialogOpt = {
      file: data,
      bucketId: this.edenService.currentPathId[0]
    };
  }
}
