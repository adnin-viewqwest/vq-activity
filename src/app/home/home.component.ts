import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  device: string | undefined;
  ip: string | undefined;
  isLoading = false;
  lang: string = '';
  result = ''

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
  }

  getHelloWorld(){
    console.log(this.lang)
    this.isLoading = true;
    const endpoint = '/hello-world';
    this.deviceService
      .getHelloWorld(endpoint)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((res: any) => {
        console.log(res)
        for (let key in res) {
          if (this.lang == key) {
            this.result = res[key]
            return
          } else {
            this.result = "No Hello World :("
          }
          console.log(key, res);
        }
      });
  }
}
