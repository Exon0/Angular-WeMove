import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() facesnap !: FaceSnap;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText='Click me!';
  r=1;
constructor(private FS :FaceSnapService){}
  ngOnInit() {
  }
  onAddSnap(){
    if(this.r)
    {this.FS.Snap(this.facesnap.id,'snap');
      this.buttonText='Impossible';

    this.r=0}
    else{
   
    if(!this.r &&this.buttonText=='Impossible')
    this.FS.Snap(this.facesnap.id,'unsnap');

    this.buttonText='Click me!'
      this.r=1;
  }

    
   
  }
  onMore(){
    this.facesnap.snaps++;
  }
}
