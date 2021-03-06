import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientPage } from './client.page';

describe('ClientPage', () => {
  let component: ClientPage;
  let fixture: ComponentFixture<ClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
