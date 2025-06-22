import {ChangeDetectionStrategy, Component, input, InputSignal, OnInit, signal, WritableSignal,} from "@angular/core";
import {CountriesComponent} from "../countries-component/countries-component";
import {CitiesComponent} from "../cities-component/cities-component";
import {ContinentsComponent} from "../continents-component/continents-component";
import {TabsModule} from "primeng/tabs";
import {ButtonModule} from "primeng/button";
import {FormComponent} from '../form-component/form-component';

@Component({
  selector: "app-home",
  imports: [
    ButtonModule,
    CountriesComponent,
    CitiesComponent,
    ContinentsComponent,
    TabsModule,
    FormComponent,
  ],
  templateUrl: "./home-component.html",
  styleUrl: "./home-component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public userId: InputSignal<number | undefined> = input();

  public currentTab: WritableSignal<number | string> = signal(0);

  ngOnInit(): void {
    console.log("userId", this.userId());
  }

  public resetTabs() {
    console.log("resetting");
    this.currentTab.set(0);
  }

  public logStuff() {
    console.log("userId", this.userId());
    console.log("currentTab", this.currentTab());
  }
}
