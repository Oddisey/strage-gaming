import { Component, OnInit } from "@angular/core";
import { bios } from './bios';

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    bios = bios;

    constructor() { }

    ngOnInit() { }

    

}
