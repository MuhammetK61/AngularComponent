import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  //template olarak belirttiğimizde dosya yolu olarak "noticitaion.html" yi kullanmıyoruz
  // eğer html kodumun birden fazla satır ise `` kullanmamız gerekir

  template: '<div class="notification-div"><p>This website uses cookiesto provide better user experience.</p></div>',
  //burada da yazdığımız html koduna stil yapıyoruz. Bu tip işlerde sadece url kısmını siliyoruz
  styles: ['.notification-div{margin: 10px 0px; padding: 10px 20px; background-color:#FAD7A0;text-align:center;}', 
            'p{font-size:14px;}']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
