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
      
      this.title.setTitle('Product List for Products');
      
    this.meta.addTag({ property: "og:title", content: "List of products" });
    this.meta.addTag({ property: "og:type", content: "products" });
    this.meta.addTag({ property: "og:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.addTag({ property: "og:image:alt", content: "Product Image" });
    this.meta.addTag({ property: "og:url", content: "https://dainty-pithivier-76e1c1.netlify.app" });
    this.meta.addTag({ property: "og:description", content: "Since some online shoppers only scan text on websites, it might be helpful to use bullet points that cover the most important product details. Bullet points should generally be used for specs (like dimensions) or short phrases (like features) so they are quick and easy to read." });
    
    this.meta.updateTag({ name: "twitter:title", content: "List of products" });
    this.meta.updateTag({ name: "twitter:type", content: "products" });
    this.meta.updateTag({ name: "twitter:site", content: "@getproducts" });
    this.meta.updateTag({ name: "twitter:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.updateTag({ name: "twitter:image:alt", content: "Product Images" });
    this.meta.updateTag({ name: "twitter:creator", content: "@productsh" });
    this.meta.updateTag({ name: "twitter:description", content: "Since some online shoppers only scan text on websites, it might be helpful to use bullet points that cover the most important product details. Bullet points should generally be used for specs (like dimensions) or short phrases (like features) so they are quick and easy to read." });
    
  });
}
ngOnInit(): void {
  }
}
