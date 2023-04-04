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
      this.title.setTitle('Product Details Page');
    this.meta.addTag({ property: "og:title", content: this.productlist.title });
    this.meta.addTag({ property: "og:type", content: this.productlist.category });
    this.meta.addTag({ property: "og:image", content: this.productlist.image });
    this.meta.addTag({ property: "og:image:alt", content: "Product Image" });
    this.meta.addTag({ property: "og:url", content: "https://dainty-pithivier-76e1c1.netlify.app/"+ this.iddata });
    this.meta.addTag({ property: "og:description", content: this.productlist.description });
    

    this.meta.updateTag({ name: "twitter:title", content: this.productlist.title });
    this.meta.updateTag({ name: "twitter:type", content: this.productlist.category });
    this.meta.updateTag({ name: "twitter:image", content: this.productlist.image });
    this.meta.updateTag({ name: "twitter:site", content: "@getproducts" });
    this.meta.updateTag({ name: "twitter:creator", content: "@productsh" });
    this.meta.addTag({ name: "twitter:image:alt", content: "Product Images" });
    this.meta.updateTag({ name: "twitter:description", content: this.productlist.description });
    
  });
  }
  ngOnInit(): void {
  }

}
