import {ChangeDetectionStrategy, Component, Signal, signal,} from "@angular/core";
import {City} from "../../model/home";
import {TableModule} from "primeng/table";

@Component({
  selector: "cities",
  imports: [TableModule],
  templateUrl: "./cities-component.html",
  styleUrl: "./cities-component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent {
  public cities: Signal<City[]> = signal([
    {
      code: "KE",
      name: "Košice",
      postNumber: "04001",
    },
    {
      code: "BA",
      name: "Bratislava",
      postNumber: "???",
    },
  ]).asReadonly();
}
