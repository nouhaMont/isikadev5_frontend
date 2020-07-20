import { Component, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  humeur : string = "bonneHumeur"; //par défaut
  listeHumeurs : string[] = [ "bonneHumeur", "mauvaiseHumeur"] ;
  
  @Output()
  public changementHumeur : EventEmitter<{value:string}> = new EventEmitter<{value:string}>(); 

  onChangeHumeur(){
    console.log("dans FooterComponent , onChangeHumeur()")
    this.changementHumeur.emit({value:this.humeur});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
