import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntensidadePage } from './intensidade.page';

describe('IntensidadePage', () => {
  let component: IntensidadePage;
  let fixture: ComponentFixture<IntensidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntensidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntensidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
