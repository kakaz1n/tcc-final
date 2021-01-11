import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AppointmentService } from './../shared/appointment.service';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.page.html',
  styleUrls: ['./exercicio.page.scss'],
})
export class ExercicioPage implements OnInit {
  id: any;
  descricao: any;
  video: SafeResourceUrl;
  nome: any;
  page: any;
  treino:any;
  sem:any;
  data:any;
  constructor(
    private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router,private domSatizer: DomSanitizer,
    public navCtrl: NavController,
    private authService: AuthenticateService,

  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.page = this.actRoute.snapshot.paramMap.get('page');
    this.treino = this.actRoute.snapshot.paramMap.get('treino');
    this.sem = this.actRoute.snapshot.paramMap.get('sem');
    this.data = this.actRoute.snapshot.paramMap.get('data');
    console.log(this.page,this.treino,this.sem,this.data)
    console.log(this.page)
     this.authService.getExercicio().valueChanges().subscribe(res => {
      console.log(res[this.id])


          this.descricao = res[this.id]['descricao']
          this.nome = res[this.id]['nome']
          this.video = this.domSatizer.bypassSecurityTrustResourceUrl(res[this.id]['video'])
        
      
    
      //lembrar que a url tem que ser embed
     
     
    });

  }

  ngOnInit() {
  }
  voltar(){
    let x = 'treino/:'+this.treino
    //this.navCtrl.pop()
    //this.navCtrl.back()
    //this.navCtrl.back()
    if(this.page == 'fake_treino') this.navCtrl.navigateBack('treino/'+this.treino+'/'+this.sem+'/' +this.data)
    else if(this.treino) this.navCtrl.navigateBack(x)
    else this.navCtrl.back();

    
  }

}
