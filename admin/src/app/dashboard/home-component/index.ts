import { Component, OnInit } from '@angular/core';
import { AdService } from '../banner-component/ad.service';
import { AdItem } from '../banner-component/ad-item';

@Component({
  selector: 'home-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class HomeComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
