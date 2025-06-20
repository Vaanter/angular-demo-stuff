import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  signal,
} from "@angular/core";
import { TableModule } from "primeng/table";
import { Country } from "../../model/home";

@Component({
  selector: "countries",
  imports: [TableModule],
  templateUrl: "./countries-component.html",
  styleUrl: "./countries-component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent {
  public countries: Signal<Country[]> = signal([
    {
      code: "SK",
      name: "Slovakia",
      tld: "sk",
    },
    {
      code: "CZ",
      name: "Czechia",
      tld: "cz",
    },
  ]).asReadonly();
}
