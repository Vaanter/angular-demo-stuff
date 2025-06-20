import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CountriesComponent } from "../countries-component/countries-component";
import { CitiesComponent } from "../cities-component/cities-component";
import { ContinentsComponent } from "../continents-component/continents-component";
import { TabsModule } from "primeng/tabs";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-home",
  imports: [
    ButtonModule,
    CountriesComponent,
    CitiesComponent,
    ContinentsComponent,
    TabsModule,
  ],
  templateUrl: "./home-component.html",
  styleUrl: "./home-component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public currentTab = 0;

  public resetTabs() {
    console.log("resetting");
    this.currentTab = 0;
  }
}
