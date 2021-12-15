import { Component, OnInit } from '@angular/core'
import { GiftDataService } from 'src/services/gift-data.service'
import { GiftListItemCreate, GiftListItemModel } from '../models'

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.css'],
})
export class GiftGivingComponent {
  data$ = this.service.getData()

  constructor(private service: GiftDataService) {}

  addGiftItem(item: GiftListItemCreate) {
    this.service.addData(item)
  }
}
