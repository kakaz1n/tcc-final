import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AppointmentService } from './../shared/appointment.service';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { AngularFireList } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';

import { Dados } from '../services/dados';
import { DadosService } from '../services/dados.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { throwIfEmpty } from 'rxjs/operators';
@Component({
  selector: 'app-treino',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {
  uid: string;
  public now: string;
  public nivel: string;
  public semana: string;
  etapa:any;
  count: number = 0;
  treino: any;
  treinos: any[];
  cores: any[];
  descanso: any;
  carga:any;
  public innerWidth: any;
  sem: any;
  vezes = -1;
  data_volta: any;
  constructor(private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router, private domSatizer: DomSanitizer,
    public navCtrl: NavController,
    private authService: AuthenticateService,
    private dadosService: DadosService,
    public alertController: AlertController) {
    this.treino = this.actRoute.snapshot.paramMap.get('treino');
    if(this.treino[0] == ':') this.treino = this.treino.replace(":",'');
    this.sem = this.actRoute.snapshot.paramMap.get('semana')
    this.data_volta = this.actRoute.snapshot.paramMap.get('data')
    console.log(this.data_volta)
    console.log(this.sem)
    console.log(this.treino)
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    this.vezes++;
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.uid = res.uid;
        if (!this.sem) {
          console.log(this.uid)
          let b = this.authService.pegarProgresso(this.uid)
          console.log(b)
          b.snapshotChanges().subscribe(res => {
            console.log(res.payload)
            const data = res.payload.toJSON()
            console.log(data)
            console.log(this.treino)
            this.etapa = data['etapa'];
            this.nivel = data['nivel']
            let c = this.authService.getTreino(this.treino )
            console.log(c)
            c.snapshotChanges().subscribe(res => {
              console.log(res.payload.toJSON())
              let x = res.payload.toJSON()
              console.log(this.etapa)
              console.log(x[this.etapa]['Niveis']['1'])
              this.treinos = []
              for (let i in x[this.etapa]['Exercicios']) {
                this.count++;
                console.log(i)
                console.log(x[this.etapa]['Niveis'][this.nivel])
                if(this.treino == 'Aerobico'){
                  console.log('entrou')
                    this.treinos.push({
                    nome: i,
                    cor: "success",
                    intensidade: x[this.etapa]['Niveis'][this.nivel]['intensidade'],
                    duracao: x[this.etapa]['Niveis'][this.nivel]['tempo']
                  })
                }
                if(this.treino == 'Resistido'){
                  console.log('entrou')
                    this.treinos.push({
                    nome: i,
                    cor: "success",
                    carga: x[this.etapa]['Niveis'][this.nivel]['carga'],
                    descanso:  x[this.etapa]['Niveis'][this.nivel]['descanso'],
                    quantidade: x[this.etapa]['Niveis'][this.nivel]['quantidade']
                  })
                  this.descanso=  x[this.etapa]['Niveis'][this.nivel]['descanso']
                  this.carga=  x[this.etapa]['Niveis'][this.nivel]['carga']

                }
                
               
              }

            })

          })
          //console.log(res.uid)
          // console.log(this.authService.lerDados(res.uid))
        }else {
          console.log(this.uid)
          let b = this.authService.pegarProgresso(this.uid)
          console.log(b)
          b.snapshotChanges().subscribe(res => {
            console.log(res.payload)
            const data = res.payload.toJSON()
            console.log(data)
            console.log(this.treino)
            this.etapa = data['etapa'];
            this.nivel = data['nivel']
            let c = this.authService.getTreino(this.treino )
            console.log(c)
            c.snapshotChanges().subscribe(res => {
              console.log(res.payload.toJSON())
              let x = res.payload.toJSON()
              console.log(this.etapa)
              console.log(x[this.etapa]['Niveis'])
              this.treinos = []
              for (let i in x[this.etapa]['Exercicios']) {
                this.count++;
                console.log(i)
                console.log(x[this.etapa]['Niveis'][this.nivel])
                if(this.treino == 'Aerobico'){
                  console.log('entrou')
                    this.treinos.push({
                    nome: i,
                    cor: "tertiary",
                    intensidade: x[this.etapa]['Niveis'][this.nivel]['intensidade'],
                    duracao: x[this.etapa]['Niveis'][this.nivel]['tempo']
                  })
                }
                if(this.treino == 'Resistido'){
                  console.log('entrou')
                    this.treinos.push({
                    nome: i,
                    cor: "tertiary",
                    carga: x[this.etapa]['Niveis'][this.nivel]['carga'],
                    descanso:  x[this.etapa]['Niveis'][this.nivel]['descanso'],
                    quantidade: x[this.etapa]['Niveis'][this.nivel]['quantidade']
                  })
                  this.descanso=  x[this.etapa]['Niveis'][this.nivel]['descanso']
                  this.carga=  x[this.etapa]['Niveis'][this.nivel]['carga']

                }
                
               
              }

            })

          })
        }

      } else {
        this.navCtrl.navigateBack('');
      }
      console.log(this.authService.userDetails)
    }, err => {
      console.log('err', err);
    })

  }
  checkado() {
    if (this.sem) return true
    if (this.count) return false;
    return true
  }

  onTermsChecked($event) {
    console.log($event.currentTarget.name)
    if ($event.currentTarget.checked) this.count--;
    else this.count++;
    this.mudarcor($event.currentTarget.name)
  }
  mudarcor(nome) {
    let x=0;
    for( let i of this.treinos){
      console.log('i:'+i['nome']+'nome:'+nome)
      if(i['nome'] == nome) break;
      x++;
    } 
    if (!this.sem) {
      console.log(nome)
      if (this.treinos[x]['cor'] == "success") {
        this.treinos[x]['cor'] = "tertiary"
      } else this.treinos[x]['cor'] = "success"
    }

  }
  goExercicio(x) {
    console.log(x)
    if(!this.sem)this.navCtrl.navigateForward('exercicio/' + x+'/treino/'+this.treino)
    else this.navCtrl.navigateForward('exercicio/' + x+'/fake_treino/'+this.treino+'/'+this.sem+'/'+this.data_volta)
  }
  voltar() {
    if(this.sem) this.router.navigate(['/treino-realizado/',this.data_volta])
    else{
      this.navCtrl.navigateBack('/dashboard')
    this.vezes++;
    }
  }
  set_treino() {
    if(!this.sem){
      console.log('dale')
    this.authService.SetTreino(this.uid, this.treino)
    this.navCtrl.navigateBack('dashboard')
    }else this.router.navigate(['/treino-realizado/',this.data_volta])
  }
}
