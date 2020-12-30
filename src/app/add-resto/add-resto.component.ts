import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert:boolean=false;
  addResto = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
  })

  constructor(private resto:RestoService,private router:Router) { }

  ngOnInit(): void {
  }
  createResto(){
   // console.warn(this.addResto.value);
   this.resto.saveResto(this.addResto.value).subscribe((result)=>{
    // console.warn("result is ",result);
    // this.goToRestoList();
    this.alert=true;
    this.addResto.reset({});

   })
   
  
  }
  // goToRestoList(){
  //   this.router.navigate(['/list']);
  // }

}
