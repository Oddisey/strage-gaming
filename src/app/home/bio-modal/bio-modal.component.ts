import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BioInfo } from 'src/app/types/bio-info';

@Component({
    selector: "app-bio-modal",
    templateUrl: "./bio-modal.component.html",
    styleUrls: ["./bio-modal.component.scss"]
})
export class BioModalComponent implements OnInit {
    @Input() bio: BioInfo;

    constructor(private activeModal: NgbActiveModal) { }

    ngOnInit() {
    }

    close() {
        this.activeModal.dismiss();
    }

}
