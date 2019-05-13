import { Component, OnInit, NgModule } from '@angular/core';
import { Company } from '../company';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
  //company = 'Google';
  company : Company = {
   id:1,
   name:'Google' 
  };


  constructor() { }

  ngOnInit() {
  }

  



}
