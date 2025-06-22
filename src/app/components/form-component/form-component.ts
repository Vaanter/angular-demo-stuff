import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FluidModule} from 'primeng/fluid';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'form-component',
  imports: [FluidModule, InputTextModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {

}
