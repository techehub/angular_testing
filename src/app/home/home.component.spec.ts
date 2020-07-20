import { HomeComponent } from "./home.component";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';


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

  it ( 'should get sum of two number', ()=> {
    let res= component.add(10, 20)
    expect(res).toBe(30)
  });

  it ( 'should get 0 ', ()=> {
    let res= component.add(-1, 20)
    expect(res).toBe(0)

  });

  it ('loggedin should be true', ()=>{
    let service = new AuthService()
    let home = new HomeComponent(service)
    spyOn(service, "isLoggedInUser").and.returnValue(true)
    let res= home.isUserLoggedIn()
    expect(res).toBeTrue()
  })

  it ('loggedin should be false', ()=>{
    let service = new AuthService()
    let home = new HomeComponent(service)
    spyOn(service, "isLoggedInUser").and.returnValue(false)
    let res= home.isUserLoggedIn()
    expect(res).toBeFalse()
  })

});



/*

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

*/
