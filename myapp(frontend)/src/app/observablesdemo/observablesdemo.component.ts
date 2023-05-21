import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observablesdemo',
  templateUrl: './observablesdemo.component.html',
  styleUrls: ['./observablesdemo.component.css']
})
export class ObservablesdemoComponent implements OnInit, OnDestroy {

  constructor() { }

  
  private intervalSubscription: Subscription;
  private customeObservableSubscriptoin: Subscription;

  ngOnInit(): void {
    // this.intervalSubscription = interval(1000).subscribe((count)=>{
    //   console.log(count);
    // });
    // above is similar to function x(count){
    //   console.log(count);
    // }  
    //but as anonymus we use =>
    // (count) => {
    //   console.log(count);
    // }


    //CREATED observable
    const customeObservable = Observable.create((observer)=>{
      let count =0;
      let x =0;
      setInterval(()=>{
        observer.next(count);
        count ++;
        // observer.next(x);
        // x ++;
        if(count == 21){
          observer.complete();
        }
        
        // if( count > 10 ){
        //   observer.error(new Error('A count > 5'));      //CUSTOM ERROR BY OBSERVER
        // }
      },1000)
    });

    
    //HANDLING observable
    this.customeObservableSubscriptoin = customeObservable.pipe()
    .pipe(
      filter((data: number)=>{                       //filter to FILTER DATA
        return data % 2 == 0;
      }),
      map((data: number)=>{             //Map    to TRANSFORM DATA
        
        return data;
      }),
    )
    .subscribe(
      //subscribing to data thrown by observable
      (data)=>{
        console.log(data);
      },
      //handling thrown error
      (error)=>{
          //console.log(error)
          alert(error.message);
      },
      //handling completed observable
      () =>{
        console.log('complete');
      }
    );

  }
  
  

  ngOnDestroy(): void {
      // this.intervalSubscription.unsubscribe();
      this.customeObservableSubscriptoin.unsubscribe();
    }


}
