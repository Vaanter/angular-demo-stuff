import {ChangeDetectionStrategy, Component, Signal, signal,} from "@angular/core";
import {TableModule} from "primeng/table";
import {Continent} from "../../model/home";

@Component({
  selector: "continents",
  imports: [TableModule],
  templateUrl: "./continents-component.html",
  styleUrl: "./continents-component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContinentsComponent {
  public continents: Signal<Continent[]> = signal([
    {
      name: "Europe",
      landAreaKm: 10000000,
      population: 745173774,
    },
    {
      name: "Asia",
      landAreaKm: 44614000,
      population: 4694576167,
    },
  ]).asReadonly();
}
