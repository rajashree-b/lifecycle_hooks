import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{

  @Input() myCounter:number=0;
  @Input() secondValue!:number;

  public changeLog:string[]=[];

  ngOnChanges(changes:SimpleChanges):void
{
  console.log(changes);
  
  
}  
}
