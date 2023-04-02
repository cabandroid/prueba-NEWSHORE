import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { DataFlight } from 'src/app/model/data-flight';
import { validationFields } from 'src/app/validations/different-validation';
import { DataService } from '../services/data.service';
import { CurrencyService } from 'src/app/results/services/currency.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  formData: FormGroup;
  origin: string = "";
  arrival: string = "";
  datafligths?: DataFlight[];
  datafligthsfound?: DataFlight[];
  fields_equals?: boolean = false;
  flagCard: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private currencyService: CurrencyService
  ) {
    this.getUniqueDataFlights();
    this.formData = this.fb.group({
      // departureStation: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      departureStation: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      arrivalStation: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    },{
      validators: validationFields //Self validation so that the two fields are not equal
    })
  }

  ngOnInit(): void {
    
  }
  /**
   * service subscription
   * 
   */
  private getUniqueDataFlights(): void {
    this.dataService.getUniqueDataFlights().subscribe(data => {
      this.datafligths = data;
    });
  }
 
  private formUpperCase(): void {
    //Logic to capitalize the form
    this.origin = this.formData.get('departureStation')?.value;
    this.origin = this.origin.toUpperCase();
    this.arrival = this.formData.get('arrivalStation')?.value;
    this.arrival = this.arrival.toUpperCase();
  }

  setCurrency(symbol: string, value: number): void {
    this.currencyService.setCurrency(symbol, value)
  }
  
  private filterFlight(): void{
    //Logic with filter to grab the object you are looking for
    this.datafligthsfound = this.datafligths?.filter(found => found.departureStation === this.origin && found.arrivalStation === this.arrival);
    //Logic to notify whether or not there is a flight
    if(this.datafligthsfound?.length != 0 ){
      this.flagCard = false;
    }
    else{
      this.flagCard = true;
    }
  }

  public validateDifferent(): boolean{
    return this.formData.hasError('differentValidation') 
    && this.formData.get('departureStation')?.value != ''
    && this.formData.get('arrivalStation')?.value != '';
  }

  public onFormSubmit(): void{
      this.formUpperCase();
      this.filterFlight();
  }

}
