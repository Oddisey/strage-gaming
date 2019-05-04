import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { NewsReelComponent } from "./header/news-reel/news-reel.component";
import { NewsItemComponent } from "./header/news-reel/news-item/news-item.component";
import { BioModalComponent } from './home/bio-modal/bio-modal.component';
import { BioWidgetComponent } from './home/bio-widget/bio-widget.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        NewsReelComponent,
        NewsItemComponent,
        BioModalComponent,
        BioWidgetComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        BioModalComponent
    ]
})
export class AppModule { }
