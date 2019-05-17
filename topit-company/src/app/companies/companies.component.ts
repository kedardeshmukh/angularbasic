import { Component, OnInit, NgModule } from '@angular/core';
import { aCompany } from '../company';
import { COMPANIES } from '../mock-companies';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
  //company = 'Google';
  companysingle : aCompany = {
   id:1,
   name:'Google' 
  };

  //companies = COMPANIES;
  selectedcompanies = COMPANIES;
  onSelect(company: selectedcompanies): void {
    this.selectedcompanies = company;
  }

  constructor() { }

  ngOnInit() {
  }

  



}
