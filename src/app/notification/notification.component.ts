import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  //template olarak belirttiğimizde dosya yolu olarak "noticitaion.html" yi kullanmıyoruz
  // eğer html kodumun birden fazla satır ise `` kullanmamız gerekir

  //[hidden] ="displayNotification" normalde alttaki success den sonra bu var ve sloganı kapatmaya yarıyor
  template: 
  `<div class="alert alert-success" [ngClass] ="{fadeOut: displayNotification}">
         <p>This website uses cookiesto provide better user experience.</p> 
         <div class ="close"><button class="btn" (click) = "closeNotification()"> X </button></div>

    </div>`,
  //burada da yazdığımız html koduna stil yapıyoruz. Bu tip işlerde sadece url kısmını siliyoruz
  styles: ['.notification-div{margin: 10px 0px; padding: 10px 20px; background-color:#FAD7A0;text-align:center;}', 
            'p{font-size:14px;}', '.close{float: right; margin-top:-35px;}',
            ".fadeOut {visibility: hidden; opacity:0; transition: visibility 0s 2s, opacity 2s linear;}"]
            //transitiondan sonrası 0sn dan 2sn ye geçişi temsil ediyor. Yani kapat butonuna tıkladığımızda hemen değil de yavaşça kapanıyor.
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
