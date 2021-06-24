// dashboard.page.ts
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { AngularFireList } from '@angular/fire/database';
import { Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';

import { Dados } from '../services/dados';
import { DadosService } from '../services/dados.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';
import { NgModuleFactory } from '@angular/core/src/r3_symbols';
import { MenuController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  todos$: AngularFireList<any[]>;
  userEmail: string;
  uid: string;
  Usuarios: Dados[];

  DadosForm: FormGroup;
  user: Dados;
  atual_aero: number;
  max_aero: number;
  atual_resis: number;
  max_resis: number;
  atual_along: number;
  max_along: number;
  atual_along_final: number;
  max_along_final: number;
  cor_aero: string = 'sucess';
  cor_resis: string;
  cor_along: string;
  cor_along_final: string;
  dia_aero: string;
  dia_resis: string;
  dia_along: string;
  dia_along_final: string;
  semana: string;
  etapa: string;
  subscription: any;
  public myColor: string = 'secondary';

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private dadosService: DadosService, private menu: MenuController,
    private datePipe: DatePipe,
    public alertController: AlertController,
  ) {
    this.user = {
      $key: '',
      nome: '',
      email: '',
      telefone: 0,
      estado: '',
      cidade: '',
      dob: null,
      foto: null,
      sexo: '',
      senha: '',
    }
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  ngOnDestroy() { console.log(`onDestroy`); }
  ionViewDidEnter() {
  this.ngOnInit()
    this.subscription = this.platform.backButton.subscribe(() => {
      if (window.confirm("Você quer mesmo sair do aplicativo?")) navigator['app'].exitApp();
    });
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  setUpLocationChangeListener() {
    this.ngOnInit()
  }
  ngOnInit() {

    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
        this.uid = res.uid;
        console.log(this.uid)
        //console.log(this.uid.replace(/\D/g,''))
        this.verifica_questionario()
        let b = this.authService.pegarProgresso(this.uid)
        console.log(b)
        let o = 0
        b.snapshotChanges().subscribe(res => {
          if (o) return
          const data = res.payload.toJSON()
          console.log(data)
          if (data == null) this.authService.setProgressoInicial(this.uid)
          else {
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
            this.dia_aero = data['dia_aero']
            this.dia_resis = data['dia_resis']
            this.dia_along = data['dia_along']
            this.dia_along_final = data['dia_along_final']
            console.log(data)
            this.mudacor()

            this.verifica_questionario();
            this.verifica_dia()
            o++;
            /*var dados = [this.userEmail,"teste","pedrohnbarros@gmail.com"]
            var indexedArray: {[key: string]: string} = {
              usuario: this.userEmail.toString(),
              mensagem: "teste",
              email:"pedrohnbarros@gmail.com"
          }
        console.log(indexedArray)
            this.authService.sendEmail(indexedArray) */
          }
        })
        console.log('nada')
        console.log("usuario" + this.uid)
        //console.log(res.uid)
        // console.log(this.authService.lerDados(res.uid))
      } else {
        this.navCtrl.navigateBack('');
      }
      console.log(this.authService.userDetails)
    }, err => {
      console.log('err', err);
    })
    //console.log(this.uid)
    /*
    this.dadosService.getBooking(this.uid).valueChanges().subscribe(res => {
      this.usuario = res;
      console.log(res)
    });
    console.log(this.usuario)
    */
    this.fetchBookings();


    let userRes = this.dadosService.getBookingList();
    userRes.snapshotChanges().subscribe(res => {
      this.Usuarios = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Usuarios.push(a as Dados);
      })
    })
  }
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      message: msg,
      buttons: [
        {
          text: 'Ok',
        },
      ],
    });

    await alert.present();
  }

  verifica_dia() {
    console.log('verifica')
    let d = 0
    let a = this.authService.getTreino_realizado2(this.uid, this.datePipe.transform(new Date(), "yyyy-MM-dd"));
    a.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      console.log(dados)
      if (dados != null) {
        console.log('nao eh null')
        if (d == 0) this.presentAlert('<h2 style="text-align:justify">Você já realizou os treinos de hoje. Eles só estarão disponíveis amanhã!</h2>')
      }
      else {
        console.log('aqui')
        console.log(this.along_final, this.max_along_final)
        console.log(this.aero(), this.resis(), this.along(), this.along_final())
        if (!this.aero() && !this.resis() && !this.along() && !this.along_final()) {
          console.log('asd123')
          this.authService.setTreino_realizado(this.uid)
        }
      }
      d++;
    })
    return false;

  }

  fetchBookings() {
    this.dadosService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })

  }
  aero() {
    if (this.atual_aero >= this.max_aero) return false
    if (this.datePipe.transform(this.dia_aero, "yyyy-MM-dd") == this.datePipe.transform(new Date(), "yyyy-MM-dd")) return false
    return true
  }
  resis() {
    if (this.atual_resis >= this.max_resis) return false
    if (this.datePipe.transform(this.dia_resis, "yyyy-MM-dd") == this.datePipe.transform(new Date(), "yyyy-MM-dd")) return false
    return true
  }
  along() {
    if (this.datePipe.transform(this.dia_along, "yyyy-MM-dd") == this.datePipe.transform(new Date(), "yyyy-MM-dd")) return false
    if (this.atual_along >= this.max_along) return false
    return true
  }
  along_final() {
    if (this.datePipe.transform(this.dia_along_final, "yyyy-MM-dd") == this.datePipe.transform(new Date(), "yyyy-MM-dd")) return false
    if (this.atual_along_final >= this.max_along_final) return false
    return true
  }

  verifica_questionario() {
    console.log(this.uid)
    let a = this.dadosService.pegarQuestionario(this.uid)
    console.log(a)
    a.snapshotChanges().subscribe(res => {
      const data = res.payload.toJSON()
      //data['dados'] = user.dados
      //if(data['dados'].cidade =='Água Fria') 
      console.log(data['questionarios'])
      if (data['questionarios']['questionario1'] == 'false') {
        this.goPre_questionario()

        console.log("não fez o questionario 1 ainda")
      } else {
        if (data['questionarios']['questionario2'] == 'false') {
          this.goSinais()
          console.log("não fez o questionario 2 ainda")
        } else {
          if (data['questionarios']['questionario3']['checked'] == 'false') {
            this.goAtividade_fisica()
            console.log("não fez o questionario 3 ainda")
          } else {
            if (data['questionarios']['questionario4']['checked'] == 'false') {
              this.goAtividades_fisicas_realizadas()
              console.log("não fez o questionario 4 ainda")
            } else {
              if (data['questionarios']['questionario5']['checked'] == 'false') {
                this.goEstado_historico()
                console.log("não fez o questionario 5 ainda")
              } else {
                if (data['questionarios']['questionario6']['checked'] == 'false') {
                  this.goConfirmacao()
                  console.log("não fez o questionario 6 ainda")
                } else {
                  if (data['questionarios']['treino_iniciar']['checked'] == 'false') {
                    this.goTreino_iniciar()
                    console.log("não fez o treino ainda")
                  }
                  else {
                    if (data['questionarios']['orientacoes_gerais']['checked'] == 'false') {
                      this.goOrientacoes_Gerais()
                      console.log("não fez as orientacoes gerais")
                    } else {
                      if (data['questionarios']['antropometria1']['checked'] == 'false') {
                        this.goAntropometria_Intro()
                        console.log("não fez a primeira fase da antropometria")
                      } else {
                        if (data['questionarios']['antropometria2']['checked'] == 'false') {
                          this.goAntropometria_Registro()
                          console.log("não fez o registro da antropometria")
                        } else {
                          if (data['questionarios']['flexibilidade1']['checked'] == 'false') {
                            this.goFlexibilidade_Intro()
                            console.log("não fez a primeira fase da flexibilidade")
                          } else {
                            if (data['questionarios']['flexibilidade2']['checked'] == 'false') {
                              this.goFlexibilidade_Registro()
                              console.log("não fez o registro da flexibilidade")
                            } else { //pode ser null o funcional1
                              if (data['questionarios']['funcional1'] && data['questionarios']['funcional1']['checked'] == 'false') {
                                this.goFuncionalIntro()
                                //this.goMuscoIntro()
                                console.log("não fez a primeira fase do funcional")
                              } else {
                                if (data['questionarios']['muscoesqueletica1'] && data['questionarios']['muscoesqueletica1']['checked'] == 'false') {
                                  this.goMuscoIntro()
                                  console.log("não fez a primeira fase da muscoesqueletica")
                                } else {
                                  if (data['questionarios']['muscoesqueletica2'] && data['questionarios']['muscoesqueletica2']['checked'] == 'false') {
                                    this.goMuscoRegistro()
                                    console.log("não fez o registro da muscoesqueletica")
                                  } else {
                                    if (data['questionarios']['subir_descer'] && data['questionarios']['subir_descer']['checked'] == 'false') {
                                      this.goSubir_Descer1()
                                      console.log("não fez a primeira fase de subir e descer")
                                    } else {
                                      if (data['questionarios']['subir_descer2'] && data['questionarios']['subir_descer2']['checked'] == 'false') {
                                        this.goSubir_Descer2()
                                        console.log("não fez a segunda fase de subir e descer")
                                      } else {
                                        if (data['questionarios']['aerobica1'] && data['questionarios']['aerobica1']['checked'] == 'false') {
                                          this.goAerobicaIntro()
                                          console.log("não fez a primeira fase de aerobica")
                                        } else {
                                          if (data['questionarios']['aerobica2'] && data['questionarios']['aerobica2']['checked'] == 'false') {
                                            this.goAerobicaRegistro()
                                            console.log("não fez o registro da aerobica")
                                          } else {
                                            if (data['questionarios']['funcional2'] && data['questionarios']['funcional2']['checked'] == 'false') {
                                              this.goFuncionalRegistro()
                                              console.log("não fez o registro do funcional TIMED & GO")
                                            } else {
                                              if (data['questionarios']['funcional3'] && data['questionarios']['funcional3']['checked'] == 'false') {
                                                this.goFuncional2Intro()
                                                console.log("não fez a introducao sentar e levantar")
                                              } else {
                                                if (data['questionarios']['funcional4'] && data['questionarios']['funcional4']['checked'] == 'false') {
                                                  this.goFuncional2Registro()
                                                  console.log("não fez o registro do funcional sentar e levantar")
                                                } else { // tudo feito
                                                  let b = this.authService.pegarProgresso(this.uid)
                                                  console.log(b)
                                                  b.snapshotChanges().subscribe(res => {
                                                    const data = res.payload.toJSON()
                                                    console.log(data)
                                                    if (data == null) this.authService.setProgressoInicial(this.uid)
                                                    else if(data['semana'] == 1 && data['etapa'] == 'A' && data['atual_aero'] == 0 && data['atual_resis'] == 0 && data['atual_along'] == 0 && data['atual_along_final'] == 0) this.authService.setProgressoInicial(this.uid)    
                                                    else {
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
                                                      this.dia_aero = data['dia_aero']
                                                      this.dia_resis = data['dia_resis']
                                                      this.dia_along = data['dia_along']
                                                      this.dia_along_final = data['dia_along_final']
                                                      this.mudacor()
                                                    }
                                                  })
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }

                  }
                }
              }
            }
          }
        }
      }
    })

  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }

  goPre_questionario() {
    this.navCtrl.navigateForward('pre-questionario');
  }
  goSinais() {
    this.navCtrl.navigateForward('sinais-sintomas');
  }
  goAtividade_fisica() {
    this.navCtrl.navigateForward('atividade-fisica');
  }

  goAtividades_fisicas_realizadas() {
    this.navCtrl.navigateForward('/atividades-fisicas-realizadas')
  }

  goEstado_historico() {
    this.navCtrl.navigateForward('/estado-historico');
  }
  goConfirmacao() {
    this.navCtrl.navigateForward('/confirmacao');
  }
  goTreino_iniciar() {
    this.navCtrl.navigateForward('/treino-iniciar');
  }
  goOrientacoes_Gerais() {
    this.navCtrl.navigateForward('/orientacoes-gerais');
  }
  goAntropometria_Intro() {
    this.navCtrl.navigateForward('/antropometria-introducao');
  }
  goAntropometria_Registro() {
    this.navCtrl.navigateForward('antropometria-registro');
  }
  goFlexibilidade_Intro() {
    this.navCtrl.navigateForward('flexibilidade-introducao');
  }
  goFlexibilidade_Registro() {
    this.navCtrl.navigateForward('flexibilidade-registro');
  }

  goFuncionalIntro() {
    this.navCtrl.navigateForward('funcional-introducao');
  }
  goFuncionalRegistro() {
    this.navCtrl.navigateForward('funcional-registro');
  }
  goFuncional2Intro() {
    this.navCtrl.navigateForward('sentar-levantar-introducao');
  }
  goFuncional2Registro() {
    this.navCtrl.navigateForward('sentar-levantar-registro');
  }



  goMuscoIntro() {
    this.navCtrl.navigateForward('muscoesqueletico-introducao');
  }
  goMuscoRegistro() {
    this.navCtrl.navigateForward('muscoesqueletico-registro');
  }

  goAerobicaIntro() {
    this.navCtrl.navigateForward('aerobica-introducao');
  }
  goAerobicaRegistro() {
    this.navCtrl.navigateForward('aerobica-registro');
  }
  goSubir_Descer1() {
    this.navCtrl.navigateForward('subir-descer')
  }
  goSubir_Descer2() {
    this.navCtrl.navigateForward('subir-descer-registro')
  }
  mudacor() {
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
    console.log(this.myColor)
  }
  pular() {
    this.authService.pularEtapa(this.uid);
  }
}
