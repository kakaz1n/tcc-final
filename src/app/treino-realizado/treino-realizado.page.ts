import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-treino-realizado',
  templateUrl: './treino-realizado.page.html',
  styleUrls: ['./treino-realizado.page.scss'],
})
export class TreinoRealizadoPage implements OnInit {
  data: string;
  data2: string;
  data3:Date;
  uid:string;
  atual_aero: number;
  max_aero: number;
  atual_resis: number;
  max_resis: number;
  atual_along: number;
  max_along: number;
  atual_along_final: number;
  max_along_final: number;
  semana: string;
  cor:string;
  etapa:string
  cor_aero: string;
  cor_along: string;
  cor_along_final: string;
  cor_resis: string;
  constructor(private actRoute: ActivatedRoute,
    private authService: AuthenticateService,public navCtrl: NavController, private datePipe: DatePipe,
    ) {
    this.data3 = new Date(this.actRoute.snapshot.paramMap.get('data'));
   this.data2 = (this.datePipe.transform(this.data3,"dd/MM/yyyy")).toString()
     this.data = this.actRoute.snapshot.paramMap.get('data');
    this.authService.userDetails().subscribe(res => {
          console.log('res', res);
          if (res !== null) {
            this.uid = res.uid;
            console.log(this.uid)
            console.log(this.data)
            let a = this.authService.getTreino_realizado2(this.uid,this.data)
            a.snapshotChanges().subscribe(res => {
              const data = res.payload.toJSON()
              console.log(data)
              this.semana = data['semana']
              this.atual_aero = data['atual_aero']
              this.max_aero = data['max_aero']
              this.atual_resis = data['atual_resis']
              this.max_resis = data['max_resis']
              this.atual_along = data['atual_along']
              this.max_along = data['max_along']
              this.atual_along_final = data['atual_along_final']
              this.max_along_final = data['max_along_final']
              this.etapa = data['etapa']     
              
              if (this.atual_aero == 0) this.cor_aero = 'medium'
              else if (this.atual_aero < this.max_aero) this.cor_aero = 'warning'
              else this.cor_aero = 'tertiary'
              if (this.atual_along == 0) this.cor_along = "medium"
              else if (this.atual_along < this.max_along) this.cor_along = "warning"
              else this.cor_along = "tertiary"
              if (this.atual_along_final == 0) this.cor_along_final = "medium"
              else if (this.atual_along_final < this.max_along_final) this.cor_along_final = "warning"
              else this.cor_along_final = "tertiary"
              if (this.atual_resis == 0) this.cor_resis = "medium"
              else if (this.atual_resis < this.max_resis) this.cor_resis = "warning"
              else this.cor_resis = "tertiary"          
            })
          }
        })
   }

  ngOnInit() {
    

  }
  
  voltar(){
    this.navCtrl.navigateBack('treinos-realizados')
  }
}
