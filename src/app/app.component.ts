import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-hooks';
  private number:number=1;

  get counter()
    {
      return this.number;
    }

    set counter(value:number)
    {
      this.number=value;
    }


    increment()
    {
      this.counter++;
    }

    decrement()
    {
      this.counter--;
    }
  

}
