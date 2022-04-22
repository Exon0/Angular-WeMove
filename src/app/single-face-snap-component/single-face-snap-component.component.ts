import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.component.html',
  styleUrls: ['./single-face-snap-component.component.scss']
})
export class SingleFaceSnapComponentComponent implements OnInit {

  @Input() facesnap !: FaceSnap;

  buttonText='Click me!';
  r=1;
constructor(private FS :FaceSnapService,
            private route: ActivatedRoute,
            private Sroute: Router){}
  ngOnInit() {
    const id= +this.route.snapshot.params['id'];
    this.facesnap=this.FS.getFaceSnapById(id);
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
  onRetour(){
    this.Sroute.navigateByUrl('faceSnaps');
  }
}
