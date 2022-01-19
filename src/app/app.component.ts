import { Component } from '@angular/core';
import { AuthService } from './service/auth.service'
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: any;
  coinPrice: any;
  coinName: any;
  chart: any[] = [];

  constructor(private _service: AuthService){
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this._service.cryptoData().then((data) => {
    //   this.result = data
    //   console.log(this.result)
    // })

    this._service.cryptoData().subscribe((res) => {
      this.result = res
      //console.log(this.result)
      this.coinPrice = this.result.data.coins.map((coin: any) => coin.price) 
      this.coinName = this.result.data.coins.map((coin: any) => coin.name) 

      console.log(this.coinPrice, this.coinName)

      //show chart

     this.chart.push(new Chart('canvas', {
      type: 'line',
      data: {
       labels: this.coinName,
       datasets: [{
           label: 'Coin Price',
           data: this.coinPrice,
           borderWidth: 3,
           fill: false,
           backgroundColor: 'rgba(255, 99, 132, 0.2)',
           borderColor: 'rgba(255, 99, 132, 1)',
       }]
      }
    }))
    });
  }
}
