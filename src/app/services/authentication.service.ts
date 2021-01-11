// authentication.service.ts
import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate, NgLocaleLocalization } from '@angular/common';
import { AlertController } from '@ionic/angular';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  todos$: AngularFireList<any[]>;
  a: number;
  b: number;
  imc: number;
  cintura_quadril: number;
  usuarioRef: AngularFireObject<any>;
  usuarioRef2: AngularFireObject<any>;

  idade: number;
  risco_quadril: string;
  nivel_condicionamento_fisico: string;
  nivel_flexibilidade: number;
  nivel_musculo: number;
  nivel_aero: number;
  public now: string;
  public nivel: string;
  public semana: string;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public alertController: AlertController
  ) {
  }
  database;
  registerUser(value, url) {
    console.log(value)
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(value.email, value.senha)
        .then(res => {
          this.db.database
            .ref('usuarios/' + res.user.uid + "/dados")
            .set({
              nome: value.nome,
              telefone: value.telefone,
              estado: value.estado,
              cidade: value.cidade,
              dob: value.dob,
              sexo: value.sexo,
              url: url
            })
          this.db.database
            .ref('questionario/' + res.user.uid + "/questionarios")
            .set({
              questionario1: "false"
            })
          resolve(res)
        },
          err => reject(err))
    })

  }

  lerDados(value): AngularFireList<any[]> {
    this.todos$ = this.db.list('usuarios/' + value + '/dados');
    return this.todos$;
  }

  //questionario 1 = pre questionario
  //questionario 2 = sinais
  //questionario 3 = nivel atividade fisica
  //questionario 4 = atividades fisicas realizadas
  //questionario 5 = estado e historico
  //questionario 6 = confirmacao
  setQuestionario1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        questionario1: "true",
        questionario2: "false"
      })

  }
  setQuestionario2(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        questionario1: "true",
        questionario2: "true",
        questionario3: "false"
      })
  }
  setQuestionario3(value, res) {
    if (res == 'sim') {
      this.db.database.ref('questionario/' + value + "/questionarios")
        .update({
          questionario1: "true",
          questionario2: "true",
          questionario3: {
            checked: "true",
            resposta: res
          },
          questionario4: {
            checked: "false",
          }
        })
    } else {
      this.db.database.ref('questionario/' + value + "/questionarios")
        .update({
          questionario1: "true",
          questionario2: "true",
          questionario3: {
            checked: "true",
            resposta: res
          },
          questionario4: {
            checked: "true",
            caminhada: "false",
            ciclismo: "false",
            corrida: "false",
            natacao: "false",
            hidro: "false",
            musculacao: "false",
            funcional: "false",
            pillates: "false",
            outra: "false"
          },
          questionario5: {
            checked: "false"
          }
        })
    }
  }
  setQuestionario4(value, caminhada, ciclismo, corrida, natacao, hidro, musculacao,
    funcional, pillates, outra) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        questionario1: "true",
        questionario2: "true",
        questionario3: {
          checked: "true",
          resposta: "sim"
        },
        questionario4: {
          checked: "true",
          caminhada: caminhada,
          ciclismo: ciclismo,
          corrida: corrida,
          natacao: natacao,
          hidro: hidro,
          musculacao: musculacao,
          funcional: funcional,
          pillates: pillates,
          outra: outra
        },
        questionario5: {
          checked: "false",
        },
      })
  }
  setQuestionario5(value, check, ataque_cardiaco, cirurgia_cardiaca, marcapasso, valvar, insuficiencia, transplante,
    cardiaca, diabetes, renal) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        questionario5: {
          checked: check,
          ataque_cardiaco: ataque_cardiaco,
          cirurgia_cardiaca: cirurgia_cardiaca,
          marcapasso: marcapasso,
          valvar: valvar,
          insuficiencia: insuficiencia,
          transplante: transplante,
          cardiaca: cardiaca,
          diabetes: diabetes,
          renal: renal
        },
        questionario6: {
          checked: 'false'
        }
      })
  }
  setQuestionario6(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        questionario6: {
          checked: "true",
        },
        treino_iniciar: {
          checked: "false"
        }
      })
    console.log("foi")
  }
  setTreino_iniciar(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        treino_iniciar: {
          checked: "true"
        },
        orientacoes_gerais: {
          checked: "false"
        }
      })
  }
  setOrientacoes_gerais(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        orientacoes_gerais: {
          checked: "true"
        },
        antropometria1: {
          checked: "false"
        }
      })
  }
  setAntropometria1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        antropometria1: {
          checked: "true"
        },
        antropometria2: {
          checked: "false"
        }
      })
  }

  setFlexibilidade1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        flexibilidade1: {
          checked: "true"
        },
        flexibilidade2: {
          checked: "false"
        }
      })
  }
  setFuncional1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        funcional1: {
          checked: "true"
        },
        funcional2: {
          checked: "false"
        }
      })
  }
  setFuncional3(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        funcional3: {
          checked: "true"
        },
        funcional4: {
          checked: "false"
        }
      })
  }

  setMusco1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        muscoesqueletica1: {
          checked: "true"
        },
        muscoesqueletica2: {
          checked: "false"
        }
      })
  }
  setSubirDescer1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        subir_descer: {
          checked: "true"
        },
        subir_descer2: {
          checked: "false"
        }
      })
  }
  setAerobica1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        aerobica1: {
          checked: "true"
        },
        aerobica2: {
          checked: "false"
        }
      })
  }
  RegistrarSubirDescer(id, value) {
    this.db.database.ref('questionario/' + id + "/questionarios")
      .update({
        subir_descer2: {
          checked: "true"
        },
        aerobica1: {
          checked: "false"
        }
      })
    this.db.database.ref('testes/' + id + "/subir_descer")
      .set({
        subir_descer: value['subir_descer']
      })
  }

  getUsuario(id) {
    this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
    console.log(this.usuarioRef)
    return this.usuarioRef;
  }

  Registrar_antro(id, value) {
    let x = '';
    this.a = value['peso'] * 2.20462
    console.log(this.a)
    this.b = value['altura'] * 39.3701
    console.log(this.b)
    this.imc = (703 * this.a) / (this.b * this.b)
    console.log(this.imc)
    this.cintura_quadril = value['cintura'] / value['quadril']

    this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      console.log(dados)
      this.now = Date.now().toString();
      console.log(formatDate(new Date, 'yyyy/MM/dd', 'en'))
      console.log(this.now);
      console.log(dados['sexo'])
      let dob = new Date(dados['dob'])
      let a = Math.abs(Date.now() - dob.getTime())
      this.idade = Math.floor((a / (1000 * 3600 * 24)) / 365);
      if (dados['sexo'] == "Masculino") {
        if (this.idade <= 29) { //era pra ser >20 mas ne
          if (this.cintura_quadril <= 0.825) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.80) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.94) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 30 && this.idade <= 39) {
          if (this.cintura_quadril <= 0.83) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.92) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.96) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 40 && this.idade <= 49) {
          if (this.cintura_quadril <= 0.87) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.95) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 1) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 50 && this.idade <= 59) {
          if (this.cintura_quadril <= 0.89) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.95) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 1.01) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 60 && this.idade <= 69) {
          if (this.cintura_quadril <= 0.9) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.97) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 1.02) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
      } else { //feminino
        if (this.idade <= 29) { //era pra ser > 20 tb
          if (this.cintura_quadril <= 0.71) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.78) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.81) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 30 && this.idade <= 39) {
          if (this.cintura_quadril <= 0.72) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.78) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.835) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 40 && this.idade <= 49) {
          if (this.cintura_quadril <= 0.73) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.79) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.87) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 50 && this.idade <= 59) {
          if (this.cintura_quadril <= 0.74) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.81) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.87) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 60 && this.idade <= 69) {
          if (this.cintura_quadril <= 0.77) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.83) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.9) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
      }

      console.log()
      if (this.imc > 30) {
        x = "verde"
      } else {
        if (this.imc >= 26) {
          if (this.risco_quadril == "Risco muito alto" || this.risco_quadril == "Alto risco") x = "amarelo";
          else x = "amarelo"
        } else {
          if (this.imc >= 19) {
            if (this.risco_quadril == "Risco muito alto" || this.risco_quadril == "Alto risco") x = "vermelho";
            else x = "amarelo"
          } else {
            x = "azul"
          }
        }

      }
      this.nivel_condicionamento_fisico = x;
      console.log(this.risco_quadril)
      console.log(this.nivel_condicionamento_fisico)
      console.log(this.imc)
      console.log(this.cintura_quadril)


      this.db.database.ref('testes/' + id + '/antropometria')
        .set({
          peso: value['peso'],
          altura: value['altura'],
          cintura: value['cintura'],
          quadril: value['quadril'],
          imc: this.imc,
          c_q: this.cintura_quadril,
          categoria_cq: this.risco_quadril,
          condicionamento_fisico: this.nivel_condicionamento_fisico
        })

    })


    this.db.database.ref('questionario/' + id + "/questionarios")
      .update({
        antropometria2: {
          checked: "true"
        },
        flexibilidade1: {
          checked: "false"
        }
      })
    //1 kg -- 2,20462 lbs

    // 1m -- 39,3701pol

  }

  Registrar_Flexibilidade(id, value) {
    console.log(value)
    this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      this.now = Date.now().toString();
      let dob = new Date(dados['dob'])
      let a = Math.abs(Date.now() - dob.getTime())
      this.idade = Math.floor((a / (1000 * 3600 * 24)) / 365);
      if (dados['sexo'] == "Masculino") {
        if (this.idade <= 29) {
          if (value['pontuacao'] <= 29) this.nivel_flexibilidade = 1
          else if (value['pontuacao'] <= 33) this.nivel_flexibilidade =2
          else if (value['pontuacao'] <= 39) this.nivel_flexibilidade = 3
          else this.nivel_flexibilidade = 4
        } else if (this.idade <= 39) {
          if (value['pontuacao'] <= 27) this.nivel_flexibilidade = 1
          else if (value['pontuacao'] <= 32) this.nivel_flexibilidade = 2
          else if (value['pontuacao'] <= 37) this.nivel_flexibilidade = 3
          else this.nivel_flexibilidade = 4
        } else if (this.idade <= 49) {
          if (value['pontuacao'] <= 23) this.nivel_flexibilidade = 1
          else if (value['pontuacao'] <= 28) this.nivel_flexibilidade = 2
          else if (value['pontuacao'] <= 34) this.nivel_flexibilidade = 3
          else this.nivel_flexibilidade = 4
        } else if (this.idade <= 59) {
          if (value['pontuacao'] <= 23) this.nivel_flexibilidade = 1
          else if (value['pontuacao'] <= 27) this.nivel_flexibilidade = 2
          else if (value['pontuacao'] <= 34) this.nivel_flexibilidade = 3
          else this.nivel_flexibilidade = 4
        } else if (this.idade >= 60) {
          if (value['pontuacao'] <= 19) this.nivel_flexibilidade = 1
          else if (value['pontuacao'] <= 24) this.nivel_flexibilidade = 2
          else if (value['pontuacao'] <= 32) this.nivel_flexibilidade = 3
          else this.nivel_flexibilidade = 4
        }
      } else {
        if (this.idade <= 29) {
          if (value['pontuacao'] <= 32) this.nivel_flexibilidade = 1
          else if (value['pontuacao'] <= 36) this.nivel_flexibilidade = 2
          else if (value['pontuacao'] <= 40) this.nivel_flexibilidade = 3
          else this.nivel_flexibilidade = 4
        } else if (this.idade <= 39) {
          if (value['pontuacao'] <= 31) this.nivel_flexibilidade = 1
          else if (value['pontuacao'] <= 35) this.nivel_flexibilidade = 2
          else if (value['pontuacao'] <= 40) this.nivel_flexibilidade = 3
          else this.nivel_flexibilidade = 4
        } else if (this.idade <= 49) {
          if (value['pontuacao'] <= 29) this.nivel_flexibilidade = 1
          else if (value['pontuacao'] <= 33) this.nivel_flexibilidade = 2
          else if (value['pontuacao'] <= 37) this.nivel_flexibilidade = 3
          else this.nivel_flexibilidade = 4
        } else if (this.idade <= 59) {
          if (value['pontuacao'] <= 29) this.nivel_flexibilidade = 1
          else if (value['pontuacao'] <= 32) this.nivel_flexibilidade = 2
          else if (value['pontuacao'] <= 38) this.nivel_flexibilidade = 3
          else this.nivel_flexibilidade = 4
        } else if (this.idade >= 60) {
          if (value['pontuacao'] <= 26) this.nivel_flexibilidade = 1
          else if (value['pontuacao'] <= 30) this.nivel_flexibilidade = 2
          else if (value['pontuacao'] <= 34) this.nivel_flexibilidade = 3
          else this.nivel_flexibilidade = 4
        }

      }
      if (value == "pulado") {
        this.db.database.ref('testes/' + id + '/flexibilidade')
          .set({
            pontuacao: 39,
            flexibilidade: 3
          })
      } else {
        this.db.database.ref('testes/' + id + '/flexibilidade')
          .set({
            pontuacao: value['pontuacao'],
            flexibilidade: this.nivel_flexibilidade
          })
      }


    })

    if (this.idade > 50) {
      this.db.database.ref('questionario/' + id + "/questionarios")
        .update({
          flexibilidade2: {
            checked: "true"
          },
          funcional1: {
            checked: "false"
          }
        })
    } else {
      this.db.database.ref('questionario/' + id + "/questionarios")
        .update({
          flexibilidade2: {
            checked: "true"
          },
          muscoesqueletica1: {
            checked: "false"
          }
        })
    }
  }
  RegistrarFunc1(id, value) {
    this.db.database.ref('questionario/' + id + '/questionarios')
      .update({
        funcional2: {
          checked: "true"
        },
        funcional3: {
          checked: 'false'
        }
      })
    let x;
    if(value['tempo']<=10)x=4;
    else if(value['tempo']<=20)x=3;
    else if(value['tempo']<=29)x=2;
    else x=1;
    this.db.database.ref('testes/' + id + '/funcional')
      .set({
        tempo: value['tempo'],
        teste: 'TIMED & GO',
        result: x
      })
  }
  RegistrarFunc4(id, value) {
    this.db.database.ref('questionario/' + id + '/questionarios')
      .update({
        funcional4: {
          checked: "true"
        },
        muscoesqueletica1: {
          checked: 'false'
        }
      })
      let x ;
      this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
      this.usuarioRef.snapshotChanges().subscribe(res => {
        const dados = res.payload.toJSON()
        console.log(dados)        
        if (dados['sexo'] == "Masculino") {
          if(value['tempo']<=11) x=1;
          else if(value['tempo']<=15) x =2;
          else if(value['tempo']<=18) x =3;
          else x = 4
        }else{
          if(value['tempo']<=9) x=1;
          else if(value['tempo']<=13) x =2;
          else if(value['tempo']<=17) x =3;
          else x = 4
        }

        this.db.database.ref('testes/' + id + '/funcional2')
      .set({
        repeticoes: value['tempo'],
        teste: 'Sentar e Levantar',
        result: x
      })
      })
    
  }

  Registrar_Musco(id, value) {

    this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      this.now = Date.now().toString();
      let dob = new Date(dados['dob'])
      let a = Math.abs(Date.now() - dob.getTime())
      this.idade = Math.floor((a / (1000 * 3600 * 24)) / 365);
      if (dados['sexo'] == "Masculino") {
        if (this.idade <= 29) {
          if (value['flexoes'] <= 21) this.nivel_musculo = 1
          else if (value['flexoes'] <= 28) this.nivel_musculo = 2
          else if (value['flexoes'] <= 35) this.nivel_musculo = 3
          else this.nivel_musculo = 4
        } else if (this.idade <= 39) {
          if (value['flexoes'] <= 16) this.nivel_musculo = 1
          else if (value['flexoes'] <= 21) this.nivel_musculo = 2
          else if (value['flexoes'] <= 29) this.nivel_musculo = 3
          else this.nivel_musculo = 4
        } else if (this.idade <= 49) {
          if (value['flexoes'] <= 12) this.nivel_musculo = 1
          else if (value['flexoes'] <= 16) this.nivel_musculo = 2
          else if (value['flexoes'] <= 24) this.nivel_musculo = 3
          else this.nivel_musculo = 4
        } else if (this.idade <= 59) {
          if (value['flexoes'] <= 9) this.nivel_musculo = 1
          else if (value['flexoes'] <= 12) this.nivel_musculo = 2
          else if (value['flexoes'] <= 20) this.nivel_musculo = 3
          else this.nivel_musculo = 4
        } else if (this.idade >= 60) {
          if (value['flexoes'] <= 7) this.nivel_musculo = 1
          else if (value['flexoes'] <= 10) this.nivel_musculo = 2
          else if (value['flexoes'] <= 17) this.nivel_musculo = 3
          else this.nivel_musculo = 4
        }
      } else {
        if (this.idade <= 29) {
          if (value['flexoes'] <= 14) this.nivel_musculo = 1
          else if (value['flexoes'] <= 20) this.nivel_musculo = 2
          else if (value['flexoes'] <= 29) this.nivel_musculo = 3
          else this.nivel_musculo = 4
        } else if (this.idade <= 39) {
          if (value['flexoes'] <= 12) this.nivel_musculo = 1
          else if (value['flexoes'] <= 19) this.nivel_musculo = 2
          else if (value['flexoes'] <= 26) this.nivel_musculo = 3
          else this.nivel_musculo = 4
        } else if (this.idade <= 49) {
          if (value['flexoes'] <= 10) this.nivel_musculo = 1
          else if (value['flexoes'] <= 14) this.nivel_musculo = 2
          else if (value['flexoes'] <= 23) this.nivel_musculo = 3
          else this.nivel_musculo = 4
        } else if (this.idade <= 59) {
          if (value['flexoes'] <= 6) this.nivel_musculo = 1
          else if (value['flexoes'] <= 10) this.nivel_musculo = 2
          else if (value['flexoes'] <= 20) this.nivel_musculo = 3
          else this.nivel_musculo = 4
        } else if (this.idade >= 60) {
          if (value['flexoes'] <= 4) this.nivel_musculo = 1
          else if (value['flexoes'] <= 11) this.nivel_musculo = 2
          else if (value['flexoes'] <= 16) this.nivel_musculo = 3
          else this.nivel_musculo = 4
        }

      }
      this.db.database.ref('testes/' + id + '/musculo')
        .set({
          flexoes: value['flexoes'],
          musculo_funcional: this.nivel_musculo
        })

    })
    if (this.idade > 50) {
      this.db.database.ref('questionario/' + id + "/questionarios")
        .update({
          muscoesqueletica2: {
            checked: "true"
          },
          subir_descer: {
            checked: "false"
          }
        })
    } else {
      this.db.database.ref('questionario/' + id + "/questionarios")
        .update({
          muscoesqueletica2: {
            checked: "true"
          },
          aerobica1: {
            checked: "false"
          }
        })
    }
  }

  Registrar_aero(id, value, teste) {
    this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      this.now = Date.now().toString();
      let dob = new Date(dados['dob'])
      let a = Math.abs(Date.now() - dob.getTime())
      this.idade = Math.floor((a / (1000 * 3600 * 24)) / 365);
      if (teste == "Rockport") {
        if (dados['sexo'] == 'Masculino') {
          if (this.idade <= 29) {
            // h 20-29
            //y=-20x+396 alta
            //y=-20.83x +470  acima da media
            //y=-20x+520 media
            //y=-20x+580 abaixo da média
            //baixa
            if (value['batimentos'] <= -20 * value['caminhada'] + 396) this.nivel_aero = 4
            else if (value['batimentos'] <= -20.83 * value['caminhada'] + 470) this.nivel_aero = 3
            else if (value['batimentos'] <= -20 * value['caminhada'] + 520) this.nivel_aero = 2
            else if (value['batimentos'] <= -20 * value['caminhada'] + 580) this.nivel_aero = 1
            else this.nivel_aero = 1
          } else if (this.idade <= 39) {// h 30-39
            //y=-20x+396 alta
            //=-22.22 x+486.66  acima da media
            //y=-20.408 x+522.04 media
            //y=-21.75x+607 abaixo da média
            //baixa

            if (value['batimentos'] <= -20 * value['caminhada'] + 396) this.nivel_aero = 4
            else if (value['batimentos'] <= -22.22 * value['caminhada'] + 486.66) this.nivel_aero = 3
            else if (value['batimentos'] <= -20.408 * value['caminhada'] + 522.04) this.nivel_aero = 2
            else if (value['batimentos'] <= -21.75 * value['caminhada'] + 607) this.nivel_aero = 1
            else this.nivel_aero = 1
          } else if (this.idade <= 49) {


            // h 40-49
            //y=-22.22x+ 422.22  alta
            //y=-20x+460  acima da media
            //y=-20x+520 media
            //y=-20x+570 abaixo da média
            //baixa
            if (value['batimentos'] <= -22.22 * value['caminhada'] + 422.22) this.nivel_aero = 4
            else if (value['batimentos'] <= -20 * value['caminhada'] + 460) this.nivel_aero = 3
            else if (value['batimentos'] <= -20 * value['caminhada'] + 520) this.nivel_aero =2
            else if (value['batimentos'] <= -20 * value['caminhada'] + 570) this.nivel_aero = 1
            else this.nivel_aero = 1
          } else {
            // h 50-59
            //y=--22.5x+415 alta
            //y=-20x+460  acima da media
            //y=-21.73x+547.82  media
            //y=-17.5x+515 abaixo da média
            //baixa
            if (value['batimentos'] <= -22.5 * value['caminhada'] + 415) this.nivel_aero = 4
            else if (value['batimentos'] <= -20 * value['caminhada'] + 460) this.nivel_aero =3
            else if (value['batimentos'] <= -21.73 * value['caminhada'] + 547.82) this.nivel_aero =2
            else if (value['batimentos'] <= -17.5 * value['caminhada'] + 515) this.nivel_aero =1
            else this.nivel_aero =1
          }
        } else { //feminino
          if (this.idade <= 29) {
            // f 20-29
            //y=-19.79 x+412.91  alta
            //y=-20x+460 acima da media
            //y=-20x+500 media
            //y=-17.5x+500 abaixo da média
            //baixa
            if (value['batimentos'] <= -19.79 * value['caminhada'] + 412.91) this.nivel_aero = 4
            else if (value['batimentos'] <= -20 * value['caminhada'] + 460) this.nivel_aero =3
            else if (value['batimentos'] <= -20 * value['caminhada'] + 500) this.nivel_aero =2
            else if (value['batimentos'] <= -17.5 * value['caminhada'] + 500) this.nivel_aero = 1
            else this.nivel_aero = 1
          } else if (this.idade <= 39) {
            // f 30-39
            //y=-22.5x+435 alta
            //=--20x+460  acima da media
            //y=--20x+500 media
            //y=-17.5 + 500 abaixo da média
            //baixa

            if (value['batimentos'] <= -22.5 * value['caminhada'] + 435) this.nivel_aero =4
            else if (value['batimentos'] <= -20 * value['caminhada'] + 460) this.nivel_aero = 3
            else if (value['batimentos'] <= -20 * value['caminhada'] + 500) this.nivel_aero = 2
            else if (value['batimentos'] <= -17.5 * value['caminhada'] + 500) this.nivel_aero = 1
            else this.nivel_aero = 1
          } else if (this.idade <= 49) {


            // f 40-49
            //y=-20x+400  alta
            //y=--13.88x+344.44  acima da media
            //y=-13.88 x+372.22  media
            //y=--18.78x+513.75  abaixo da média
            //baixa
            if (value['batimentos'] <= -20 * value['caminhada'] + 400) this.nivel_aero = 4
            else if (value['batimentos'] <= -13.88 * value['caminhada'] + 344.44) this.nivel_aero =3
            else if (value['batimentos'] <= -13.88 * value['caminhada'] + 372.44) this.nivel_aero = 2
            else if (value['batimentos'] <= -18.78 * value['caminhada'] + 513.75) this.nivel_aero = 1
            else this.nivel_aero = 1
          } else {
            // h 50-59
            //y=-20x+400 alta
            //y=-20x+440  acima da media
            //y=-20x+480  media
            //y=--20x+520 abaixo da média
            //baixa
            if (value['batimentos'] <= -20 * value['caminhada'] + 400) this.nivel_aero = 4
            else if (value['batimentos'] <= -20 * value['caminhada'] + 440) this.nivel_aero = 3
            else if (value['batimentos'] <= -20 * value['caminhada'] + 480) this.nivel_aero = 2
            else if (value['batimentos'] <= -20 * value['caminhada'] + 520) this.nivel_aero = 1
            else this.nivel_aero = 1
          }
        }

        this.db.database.ref('questionario/' + id + "/questionarios")
          .update({
            aerobica2: {
              checked: "true"
            }
          })
        this.db.database.ref('testes/' + id + '/aerobico')
          .update({
            tempo: value['caminhada'],
            batimentos: value['batimentos'],
            nivel: this.nivel_aero
          })
      
   }
   else{
     if(teste == "caminhada"){
       if(value['caminhada']<300) this.nivel_aero = 1;
       else if(value['caminhada']<400) this.nivel_aero = 2;
       else if(value['caminhada']<500) this.nivel_aero = 3;
       else this.nivel_aero = 4;
     }
     else{
      if (dados['sexo'] == 'Masculino') {
        if (this.idade <= 29) {
          if ( value['caminhada'] <2110) this.nivel_aero = 1
          else if (value['caminhada'] <2400 ) this.nivel_aero = 2
          else if (value['caminhada'] <2640) this.nivel_aero = 3
          else if (value['caminhada'] <2400) this.nivel_aero = 4
        } else if (this.idade <= 39) {// h 30-39
          if ( value['caminhada'] <2090) this.nivel_aero = 1
          else if (value['caminhada'] <2400 ) this.nivel_aero = 2
          else if (value['caminhada'] <2510) this.nivel_aero = 3
          else if (value['caminhada'] <2720) this.nivel_aero = 4
        } else if (this.idade <= 49) {
          if ( value['caminhada'] <1990) this.nivel_aero = 1
          else if (value['caminhada'] <2400 ) this.nivel_aero = 2
          else if (value['caminhada'] <2460) this.nivel_aero = 3
          else if (value['caminhada'] <2660) this.nivel_aero = 4
        } else if (this.idade <= 59) {
          if ( value['caminhada'] <1870) this.nivel_aero = 1
          else if (value['caminhada'] <2090 ) this.nivel_aero = 2
          else if (value['caminhada'] <2320) this.nivel_aero = 3
          else if (value['caminhada'] <2540) this.nivel_aero = 4
        }else {
          if ( value['caminhada'] <1640) this.nivel_aero = 1
          else if (value['caminhada'] <1930 ) this.nivel_aero = 2
          else if (value['caminhada'] <2120) this.nivel_aero = 3
          else if (value['caminhada'] <2490) this.nivel_aero = 4
        } 
      } else { //feminino
        if (this.idade <= 29) {
          if ( value['caminhada'] <1790) this.nivel_aero = 1
          else if (value['caminhada'] <1970 ) this.nivel_aero = 2
          else if (value['caminhada'] <2160) this.nivel_aero = 3
          else if (value['caminhada'] <2430) this.nivel_aero = 4
        } else if (this.idade <= 39) {// h 30-39
          if ( value['caminhada'] <1690) this.nivel_aero = 1
          else if (value['caminhada'] <1960 ) this.nivel_aero = 2
          else if (value['caminhada'] <2080) this.nivel_aero = 3
          else if (value['caminhada'] <2330) this.nivel_aero = 4
        } else if (this.idade <= 49) {
          if ( value['caminhada'] <1580) this.nivel_aero = 1
          else if (value['caminhada'] <1790 ) this.nivel_aero = 2
          else if (value['caminhada'] <2000) this.nivel_aero = 3
          else if (value['caminhada'] <2240) this.nivel_aero = 4
        } else if (this.idade <= 59) {
          if ( value['caminhada'] <1500) this.nivel_aero = 1
          else if (value['caminhada'] <1690 ) this.nivel_aero = 2
          else if (value['caminhada'] <1900) this.nivel_aero = 3
          else if (value['caminhada'] <2160) this.nivel_aero = 4
        }else {
          if ( value['caminhada'] <1390) this.nivel_aero = 1
          else if (value['caminhada'] <1590 ) this.nivel_aero = 2
          else if (value['caminhada'] <1750) this.nivel_aero = 3
          else if (value['caminhada'] <1900) this.nivel_aero = 4
        } 
      }
     }
   

    this.db.database.ref('questionario/' + id + "/questionarios")
      .update({
        aerobica2: {
          checked: "true"
        }
      })
    this.db.database.ref('testes/' + id + '/aerobico')
      .update({
        tempo: value['caminhada'],
        nivel: this.nivel_aero
      })
   }
  })
}

checarAntro(value) {
  if (this.db.database.ref('questionario/' + value + "/questionarios/antropometria1").toString() == 'true') {
    return true
  } else {
    return false
  }
}


loginUser(value) {
  return new Promise<any>((resolve, reject) => {
    this.afAuth.signInWithEmailAndPassword(value.email, value.senha)
      .then(
        res => resolve(res),
        err => reject(err))
  })
}

logoutUser() {
  return new Promise((resolve, reject) => {
    if (this.afAuth.currentUser) {
      this.afAuth.signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
    }
  })
}

userDetails() {
  return this.afAuth.user
}

RegistrarExercicio(value) {
  this.db.database.ref('exercicio/')
    .child(value['nome']).set({
      nome: value['nome'],
      descricao: value['descricao'],
      video: value['video']
    })
}

pegarProgresso(id) {
  this.usuarioRef = this.db.object('/progresso_usuario/' + id);
  return this.usuarioRef;
}
setProgressoInicial(id) {
  console.log(id)
  console.log("setando progresso inicial")
  this.usuarioRef = this.db.object('testes/' + id);
  this.usuarioRef.snapshotChanges().subscribe(res => {
    const dados = res.payload.toJSON()
    console.log(dados)
    this.nivel_aero = dados['aerobico']['nivel']
    this.nivel_condicionamento_fisico = dados['antropometria']['condicionamento_fisico']
    this.nivel_flexibilidade = dados['flexibilidade']['flexibilidade']
    this.nivel_musculo = dados['musculo']['musculo_funcional']
    let treinos = []; //aerobia,flex,muscular
    if (this.nivel_condicionamento_fisico == "azul") treinos = [2, 2, 2, 2]
    if (this.nivel_condicionamento_fisico == "verde") treinos = [3,3,3,3]
    if (this.nivel_condicionamento_fisico == "amarelo") treinos = [4, 4,4,4]
    if (this.nivel_condicionamento_fisico == "vermelho") treinos = [5, 5, 5,5]
    let funcional;
    let funcional2;

    if(dados['funcional'])funcional = dados['funcional']['result']
    if(dados['funcional2'])funcional2 = dados['funcional2']['result']
    let nivel_final
    if(dados['funcional'] && dados['funcional2']) nivel_final = Math.floor((funcional+funcional2+this.nivel_aero+this.nivel_flexibilidade+this.nivel_musculo)/5)
    else nivel_final = Math.floor((this.nivel_aero+this.nivel_flexibilidade+this.nivel_musculo)/3)
    console.log(nivel_final)
    this.db.database.ref('progresso_usuario/')
      .child(id).set({
        semana: 1,
        max_semana:2,
        nivel: nivel_final,
        max_along_final: treinos[3],
        max_along: treinos[0],
        max_resis: treinos[1],
        max_aero: treinos[2],
        dia_aero:'',
        dia_along:'',
        dia_resis:'',
        dia_along_final:'',
        atual_aero: 0,
        atual_resis: 0,
        atual_along: 0,
        atual_along_final:0,
        etapa: 'Inicial'
      })
  })
}
getTreino2(id, tipo) {



}
formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}
formatDate2(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    minutes = d.getMinutes();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day, minutes].join('-');
}
getTreino(tipo) {
  this.usuarioRef2 = this.db.object('/Etapas ' + tipo );
  console.log(this.usuarioRef2)
  return this.usuarioRef2
}
async presentAlert(tipo) {
  let msg = "<h1>Parabéns!!!! </h1><h2>O seu treino diário de " + tipo + " foi cumprido com sucesso.Continue se esforçando!</h2>"
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class2',
    message: msg,
    buttons: [
    ],
  });

  await alert.present();
}
getExercicio(){
  this.usuarioRef2 = this.db.object('exercicio/');
  return this.usuarioRef2;
}

SetTreino(id, tipo) {
  this.presentAlert(tipo)
  let c = 0
  console.log('setando treino')
  this.usuarioRef = this.db.object('/progresso_usuario/' + id);
  if (tipo == 'Aerobico') {
    c = 0
    this.usuarioRef.snapshotChanges().subscribe(res => {
      if (c) return
      const dados = res.payload.toJSON()
      let x = dados['atual_aero'] + 1
      let z = new Date();
      let h = this.formatDate(z)
      this.db.database.ref('progresso_usuario/' + id)
        .update({
          atual_aero: x,
          dia_aero: h
        })
      c++;
      console.log('kkaa')

    })
  }
  if (tipo == 'Resistido') {
    c = 0
    this.usuarioRef.snapshotChanges().subscribe(res => {
      if (c) return
      const dados = res.payload.toJSON()
      let x = dados['atual_resis'] + 1
      let z = new Date();
      let h = this.formatDate(z)
      this.db.database.ref('progresso_usuario/' + id)
        .update({
          atual_resis: x,
          dia_resis: h
        })
      c++
    })
  }
  if (tipo == 'Alongamento') {
    c = 0

    this.usuarioRef.snapshotChanges().subscribe(res => {
      if (c) return
      const dados = res.payload.toJSON()
      let x = dados['atual_along'] + 1
      let z = new Date();
      let h = this.formatDate(z)
      this.db.database.ref('progresso_usuario/' + id)
        .update({
          atual_along: x,
          dia_along: h
        })
      c++
    })
  }
  if (tipo == 'Alongamento final') {
    c = 0

    this.usuarioRef.snapshotChanges().subscribe(res => {
      if (c) return
      const dados = res.payload.toJSON()
      let x = dados['atual_along_final'] + 1
      let z = new Date();
      let h = this.formatDate(z)
      this.db.database.ref('progresso_usuario/' + id)
        .update({
          atual_along_final: x,
          dia_along_final: h
        })
      c++
    })
  }
  let d = 0;
  this.usuarioRef.snapshotChanges().subscribe(res => {
    const dados = res.payload.toJSON()
    if (dados['atual_aero'] == dados['max_aero'] && dados['atual_along'] == dados['max_along'] && dados['atual_along_final'] == dados['max_along_final'] && dados['atual_resis'] == dados['max_resis']) {
      if (d) return
      let sem = dados['semana'] + 1
      let etapa = dados['etapa']
      let max_sem = dados['max_semana']
      if (sem > dados['max_semana']) {
        sem = 1;
        if(etapa == 'Inicial') etapa = 'A'
        else if(etapa == 'A') etapa = 'B'
        else if(etapa == 'B') etapa = 'C'
        else if(etapa == 'C') etapa = 'D'
        else if(etapa == 'D') etapa = 'E'
        else if(etapa == 'E') etapa = 'F'
        else if(etapa == 'F') { //reseta tudo
          this.db.database.ref('questionario/'+id+'/questionarios')
            .update({
        aerobica1: {
           checked  : "false"
        },
         aerobica2  : {
           checked  : "false"
        },
         antropometria1  : {
           checked  : "false"
        },
         antropometria2  : {
           checked  : "false"
        },
         flexibilidade1  : {
           checked  : "false"
        },
         flexibilidade2  : {
           checked  : "false"
        },
         muscoesqueletica1  : {
           checked  : "false"
        },
         muscoesqueletica2  : {
           checked  : "false"
        },
         orientacoes_gerais  : {
           checked  : "false"
        },
         treino_iniciar  : {
           checked  : "false"
        }
      })      
      etapa = 'Inicial'
        }
        if(etapa == 'Inicial')max_sem=2
        if(etapa == 'A')max_sem=2
        else if(etapa == 'B') max_sem=3
        else if(etapa == 'C') max_sem=3
        else if(etapa == 'D') max_sem=4
        else if(etapa == 'E') max_sem=4
        else if(etapa == 'F') max_sem=4
      }
      
     
      this.db.database.ref('progresso_usuario/' + id)
        .update({
          semana: sem,
          etapa: etapa,
          max_semana: max_sem,
          atual_aero: 0,
          atual_resis: 0,
          atual_along: 0,
          atual_along_final:0,
        })
      let z = new Date();
      let h = this.formatDate(z)
      console.log(h, id)
      console.log(dados)
      this.db.database.ref('treinos_realizados/' + id + '/')
        .child(h).set({
          data_realizada: h,
          semana: dados['semana'],
          nivel: dados['nivel'],
          max_along_final: dados['max_along_final'],
          max_along: dados['max_along'],
          max_resis: dados['max_resis'],
          max_aero: dados['max_aero'],
          atual_aero: dados['max_aero'],
          atual_resis: dados['max_resis'],
          atual_along: dados['max_along'],
          atual_along_final: dados['max_along_final'],
          etapa: dados['etapa'],
          cor: "tertiary"
        })
      d++;
      console.log('kk')
    }

  })

}
getTreino_realizado(id) {
  this.usuarioRef2 = this.db.object('/treinos_realizados/' + id);
  console.log(this.usuarioRef2)
  return this.usuarioRef2
}
getTreino_realizado2(id, data) {
  this.usuarioRef2 = this.db.object('/treinos_realizados/' + id + '/' + data);
  console.log(this.usuarioRef2)
  return this.usuarioRef2
}
setTreino_realizado(id){
  console.log('treino-realizado')

  let d = 0;
  this.usuarioRef = this.db.object('progresso_usuario/'+id)
  this.usuarioRef.snapshotChanges().subscribe(res => {
    const dados = res.payload.toJSON()
    if (d) return
    let sem = dados['semana'] 
    let z = new Date();
    let h = this.formatDate(z)
    console.log(h, id)
    console.log(dados)
    let cor = "warning"
    this.db.database.ref('treinos_realizados/' + id + '/')
      .child(h).set({
        data_realizada: h,
        semana: sem ,
        nivel: dados['nivel'],
        max_along_final: dados['max_along_final'],
        max_along: dados['max_along'],
        max_resis: dados['max_resis'],
        max_aero: dados['max_aero'],
        atual_aero: dados['atual_aero'],
        atual_resis: dados['atual_resis'],
        atual_along: dados['atual_along'],
        atual_along_final: dados['atual_along_final'],
        etapa: dados['etapa'],
        cor: cor
      })
    console.log('done')
    d++;
    console.log('treino-realizado cadastrado')

  })
}
pularEtapa(id){
  this.db.database.ref('progresso_usuario/' + id)
  .update({
    etapa:'A'
  })
}
/*sendEmail(dados) {
  console.log(dados)
  console.log('email')
  emailjs.sendForm('gmail', 'template_y0ko4tc', dados, 'user_cdspQBQWigrPL6FL5YxJK')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      console.log('foi')
    }, (error) => {
      console.log(error.text);
      console.log('n foi')

    });
}*/

}
