import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '@app/services/investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // 'computed' returns a new signal that will update whenever the signals it depends on change
  // and is READONLY value, not like the signals it depends on
  results = computed(() => {
    return this.investmentService.resultsData();
  });
}
