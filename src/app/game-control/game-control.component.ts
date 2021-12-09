import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit  {
  
  @Output('intervalFired') intervalFired = new EventEmitter<number>();
  lastNumber = 0;
  interval: any;
 
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
  this.interval = setInterval(()=> {
    this.intervalFired.emit( this.lastNumber + 1)
    this.lastNumber ++ 
  }, 1000)
  }
  onPauseGame(){
    clearInterval(this.interval)
  }
}
