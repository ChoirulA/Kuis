import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-kuisform',
  templateUrl: './kuisform.component.html',
  styleUrls: ['./kuisform.component.css']
})
export class KuisformComponent implements OnInit {
  input = 'Form Data Mahasiswa';
  output = 'Data Mahasiswa';
  nim='';
  nama='';
  kelas='';
  daftarMhs:Mahasiswa[] = [];
  mhs;

  constructor() { }

  ngOnInit() {
  }

  tambahMhs(){
    this.mhs = new Mahasiswa(this.nim, this.nama, this.kelas);
    this.daftarMhs.push(this.mhs);
    this.nim='';
    this.nama='';
    this.kelas='';
  }

}
