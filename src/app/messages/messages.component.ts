import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    constructor() { }
    @Input() messages: string[] = [];
    @Output() clear = new EventEmitter();
    ngOnInit() {
    }

    onClear() {
        //console.log("called");
        this.clear.emit();
    }
}
