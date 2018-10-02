import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  checkButton = false;
  username = '';

  constructor() { 
        
  }

  ngOnInit() {
  }

  changeUsername(){
    this.username = '';
  }

}
