import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  jobsdata: any;
  productlist: any;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private title: Title,
    private meta: Meta,
  ) {
    this.http.get('https://fakestoreapi.com/products').subscribe((response:any) => {
      console.log(response)
      this.productlist = response; 
      console.log(this.productlist);
      
    });
  }
  ngOnInit(): void {
    
  }
}
