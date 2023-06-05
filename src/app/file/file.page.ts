import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  data: any = [];
  dataBooks: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/646f92ff9d312622a3654731';
  loading: any;

  constructor(public loadingController: LoadingController) {}
  ngOnInit() {}

  async load() {
    this.dataBooks = [];
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...',
    });

    await this.loading.present();

    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        this.data = this.data.record.books;

        let i = 0;
        while (this.data[i] !== undefined) {
          this.dataBooks.push(this.data[i]);
          i++;
        }
        this.loading.dismiss();
      });
  }

  toggleDetails(i: number) {
    if (this.showDetails[i]) {
      this.showDetails[i] = false;
    } else {
      this.showDetails[i] = true;
    }
  }

  getColor(expiresDate: any) {
    if (this.checkDate(expiresDate)) {
      return 'red';
    } else {
      return 'green';
    }
  }

  checkDate(expiresDate: any) {
    const now = Date.now();
    expiresDate = new Date(expiresDate);
    return now - expiresDate > 0;
  }
}
