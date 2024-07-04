import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { UserInputComponent } from '@components/user-input/user-input.component';
import { InvestmentResultsComponent } from '@components/investment-results/investment-results.component';
import { InvestmentResult } from '@interfaces/investment-result.interface';
import { InvestmentInput } from '@interfaces/investment-input.interface';
import { InvestmentResultsService } from '@services/investment-results.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData = signal<InvestmentResult[] | undefined>(undefined);
  private investmentResultsService = inject(InvestmentResultsService);

  onCalculateInvestmentResults(data: InvestmentInput): void {
    this.resultsData.set(
      this.investmentResultsService.calculateInvestmentResults(data)
    );
  }
}
