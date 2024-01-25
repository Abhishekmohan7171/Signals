import { Component,signal,computed,OnInit,untracked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'signalsapp';

  counter = signal(0)
  //computed
  computedCounter = computed(() => {
        return this.counter()*100 //computed -> works by taking in one or more source signals
        // return untracked(this.counter)*100 //untracked -> for not being dependent
  })

  list = signal(['Hello','World'])


ngOnInit(): void {

}


  increment(){

    this.counter.set(this.counter() + 1)  //set method
    // this.counter.update(counter => counter + 1) //update method
    console.log(this.counter())
  }


}
