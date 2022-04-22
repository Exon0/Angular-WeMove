import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponentComponent } from "./landing-page-component/landing-page-component.component";
import { SingleFaceSnapComponentComponent } from "./single-face-snap-component/single-face-snap-component.component";

const routes: Routes=[
    { path :'faceSnaps/:id', component : SingleFaceSnapComponentComponent},
    {
        path: 'faceSnaps' , component : FaceSnapListComponent
    },
    {
        path: '' , component: LandingPageComponentComponent 
    }


];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}