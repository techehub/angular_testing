import { HomeComponent } from "./home.component";

/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

*/



describe ('addition testing', ()=>{

  let component:HomeComponent

  beforeEach( ()=>{

    component= new HomeComponent()

  })

  afterEach(()=>{
    component= null
  })

  afterAll(()=>{ })

  it ( 'should get sum of two number', ()=> {
    //let c = new HomeComponent();
    let res= component.add(10, 20)
    expect(res).toBe(30)
  });

  it ( 'should get 0 ', ()=> {
    //let c = new HomeComponent();
    let res= component.add(-1, 20)
    expect(res).toBe(0)

  });

})
