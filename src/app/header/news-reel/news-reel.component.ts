import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";


@Component({
    selector: "news-reel",
    templateUrl: "./news-reel.component.html",
    styleUrls: ["./news-reel.component.scss"],
})
export class NewsReelComponent implements AfterViewInit {

    @ViewChild("reelContainer") reelContainerRef: ElementRef;
    @ViewChild("reel") reelRef: ElementRef;
    leftWithOffset = "";
    animationWithOffset = "";
    reelContainerWidth = 0;
    reelWidth = 0;
    reelWidthRatio = 1;

    titles: string[] = ["Brent says game things", 
        "Oddisey makes a dope play", 
        "Dylan talks hustle",
        "Surprise! Xphobia is gunna stream again"
    ];

    constructor() { }

    ngAfterViewInit() {
        this.reelContainerWidth = this.reelContainerRef.nativeElement.offsetWidth;
        this.reelWidth = this.reelRef.nativeElement.offsetWidth;
        this.reelWidthRatio = this.reelWidth / this.reelContainerWidth;
        this.animationWithOffset = `marqueefar ${60 * this.reelWidthRatio}s linear infinite`;
    }

}
