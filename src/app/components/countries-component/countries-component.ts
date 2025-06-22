import {ChangeDetectionStrategy, Component, Signal, signal, WritableSignal} from "@angular/core";
import {TableModule} from "primeng/table";
import {Country} from "../../model/home";
import {MultiSelectModule} from 'primeng/multiselect';
import {FormsModule} from '@angular/forms';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: "countries",
  imports: [TableModule, MultiSelectModule, FormsModule],
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

  public availableColumns: Signal<Column[]> = signal([
    {field: "code", header: "Code"},
    {field: "name", header: "Name"},
    {field: "tld", header: "Top level domain"},
  ]).asReadonly();
  public initialColumns: WritableSignal<Column[]> = signal([
    {field: "code", header: "Code"},
    {field: "name", header: "Name"},
  ]);
  public enabledColumns: WritableSignal<Column[]> = signal(this.initialColumns());

  public isColumnEnabled(field: string): boolean {
    return this.enabledColumns().some(column => column.field === field);
  }
}
