import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../results/services/currency.service';

@Pipe({
  name: 'conversion',
  pure: false
})
export class DivisasPipe implements PipeTransform, OnDestroy {

  public value: string = ''
  private listen$: Array<any> = []

  constructor(private currencyService: CurrencyService) {

  }

  transform(valueIn: number): any {

    const observer1$ = this.currencyService.currency$
      .subscribe(({ symbol, value }) => { 

        this.value = `${(valueIn * value).toFixed(0)} ${symbol}`
      })

    this.listen$ = [observer1$]

    return this.value
  }

  ngOnDestroy(): void {
    this.listen$.forEach(a => a.unsubscribe())
  }

}
