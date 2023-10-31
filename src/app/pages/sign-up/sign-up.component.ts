import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";

export interface MenuItem {
  label?: string;
  command?: any;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [MessageService]
})
export class SignUpComponent implements OnInit {

  items: MenuItem[] | undefined;
  activeIndex = 1;

  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
    this.items = [
      {
        label: '',
        command: (event: any) => this.messageService.add({severity:'', summary:'کد 6 رقمی برای شما ارسال شد', detail: event.item.label})
      },
      {
        label: '',
        command: (event: any) => this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label})
      },
      {
        label: '',
        command: (event: any) => this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label})
      },
      {
        label: '',
        command: (event: any) => this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label})
      }
    ];
  }
  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

}
