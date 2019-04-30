import { Component, OnInit } from "@angular/core";

@Component({
    selector: "news-reel",
    templateUrl: "./news-reel.component.html",
    styleUrls: ["./news-reel.component.scss"]
})
export class NewsReelComponent implements OnInit {

    titles: string[] = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    constructor() { }

    ngOnInit() {
    }

}
