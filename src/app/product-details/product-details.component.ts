import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productlist: any;
  iddata: any;
  images: any;

  constructor(private meta: Meta, private title: Title, private route: ActivatedRoute, private http: HttpClient) {
    this.iddata = this.route.snapshot.params['id'];
    this.http.get('https://fakestoreapi.com/products/' + this.iddata).subscribe((response: any) => {
      console.log(response)
      this.productlist = response;
    });
  }
  ngOnInit(): void {
    
  }

}
