import { Component, input } from '@angular/core';
import { InvestmentResult } from '@app/interfaces/investment-result.interface';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results = input<InvestmentResult[]>();
}