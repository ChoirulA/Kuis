import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  styleUrls: ['./tugas3.component.css']
})
export class Tugas3Component implements OnInit {
  // serverID = 10;
  // serverStatus = "offline";
  status = false;
  kata = "";
  log = [];
  data = this.log.length;

  constructor() { 
    // this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

  // getServerStatus(){
  //   return this.serverStatus;
  // }

  // getColor(){
  //   return this.serverStatus === 'online' ? 'green' : 'blue';
  // }

  onClick(){
    this.log.push(this.log.length+1);
    if(this.status === false){
      this.kata = "Politeknik Negeri Malang";
      this.status = true;
    }else{
      this.kata = "";
      this.status = false;
    }
  }

}
