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

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.isLoading = true;
    const endpoint = '/utilities/eu-device';
    this.deviceService
      .getDevice(endpoint)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((res: any) => {
        const data = res.data;
        this.device = data.device;
        this.ip = data.ip;
      });
  }
}
