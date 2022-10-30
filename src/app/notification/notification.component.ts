import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  //template olarak belirttiğimizde dosya yolu olarak "noticitaion.html" yi kullanmıyoruz
  // eğer html kodumun birden fazla satır ise `` kullanmamız gerekir

  template: 
  `<div class="alert alert-success" [hidden] ="displayNotification" >
         <p>This website uses cookiesto provide better user experience.</p> 
         <div class ="close"><button class="btn" (click) = "closeNotification()"> X </button></div>

    </div>`,
  //burada da yazdığımız html koduna stil yapıyoruz. Bu tip işlerde sadece url kısmını siliyoruz
  styles: ['.notification-div{margin: 10px 0px; padding: 10px 20px; background-color:#FAD7A0;text-align:center;}', 
            'p{font-size:14px;}', 
            '.close{float: right; margin-top:-35px;}']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Ekran bildiriminin değeri true ise yukardaki sloganı görüntülemek istemiyoruz
  //Ancak ekran bildirimi false ise o zaman görüntülemek istiyoruz
  displayNotification: boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }

}
