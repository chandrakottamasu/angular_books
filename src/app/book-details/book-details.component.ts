import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  userData:any;
  constructor(private httpreq:BookDataService) { }

  save(product:NgForm)
  {
    this.httpreq.postData('/book',product.value).subscribe((res)=>{
      console.log(res);
    })
     
  }
  getData(){
    this.httpreq.getData('/book').subscribe((res)=>
    {
      this.userData =res;
    })

  }
  ngOnInit(): void {
  }

}
