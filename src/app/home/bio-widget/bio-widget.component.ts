import { Component, OnInit, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BioModalComponent } from "../bio-modal/bio-modal.component";
import { BioInfo } from 'src/app/types/bio-info';

@Component({
    selector: "bio-widget",
    templateUrl: "./bio-widget.component.html",
    styleUrls: ["./bio-widget.component.scss"]
})
export class BioWidgetComponent implements OnInit {
    @Input() bio: BioInfo;

    constructor(private modalService: NgbModal) { }

    ngOnInit() { }

    getFirstName(): string {
        return this.bio.name.split(" ")[0];
    }

    openBio(): void {
        const modalRef = this.modalService.open(BioModalComponent);
        modalRef.componentInstance.bio = this.bio;
    }

}
