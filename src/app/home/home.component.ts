import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  constructor(private meta: Meta, private title: Title){

    this.title.setTitle('Angular with SEO');
    this.meta.addTag({ property: "og:title", content: "Angular SEO" });
    this.meta.addTag({ property: "og:type", content: "Server Side Rendering" });
    this.meta.addTag({ property: "og:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.addTag({ property: "og:image:alt", content: "Image" });
    this.meta.addTag({ property: "og:url", content: "https://dainty-pithivier-76e1c1.netlify.app/" });
    this.meta.addTag({ property: "og:description", content: "Since some online shoppers only scan text on websites, it might be helpful to use bullet points that cover the most important product details. Bullet points should generally be used for specs (like dimensions) or short phrases (like features) so they are quick and easy to read." });
    
    this.meta.addTag({ name: "twitter:title", content: "List of products" });
    this.meta.addTag({ name: "twitter:type", content: "products" });
    this.meta.addTag({ name: "twitter:site", content: "@getproducts" });
    this.meta.addTag({ name: "twitter:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.addTag({ name: "twitter:image:alt", content: "Product Images" });
    this.meta.addTag({ name: "twitter:creator", content: "@productsh" });
    this.meta.addTag({ name: "twitter:description", content: "Since some online shoppers only scan text on websites, it might be helpful to use bullet points that cover the most important product details. Bullet points should generally be used for specs (like dimensions) or short phrases (like features) so they are quick and easy to read." });
    
  }
  ngOnInit(): void {
  }
}
