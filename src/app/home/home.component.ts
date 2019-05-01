import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BioModalComponent } from "./bio-modal/bio-modal.component";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    bios = [
        {
            name: "Dylan Sinnott",
            bio: "Lorem ipsum dolor amet normcore umami slow-carb venmo tousled schlitz. " +
                "Swag knausgaard helvetica succulents. Listicle snackwave distillery green  " +
                "juice disrupt VHS echo park. Vaporware pok pok stumptown semiotics heirloom  " +
                "small batch kale chips blue bottle bespoke hammock cronut. Kickstarter gluten-free  " +
                "godard, ramps mustache meggings knausgaard meditation letterpress deep v.  " +
                "Gluten-free direct trade heirloom, photo booth paleo tote bag tumblr portland  " +
                "viral gastropub.",
            imagePath: "/assets/images/profile-pics/dylan.jpg"
        }
    ]

    constructor(private modalService: NgbModal) { }

    ngOnInit() { }

    bio(name: string) {
        const modalRef = this.modalService.open(BioModalComponent);
        modalRef.componentInstance.name = name;
    }

}
