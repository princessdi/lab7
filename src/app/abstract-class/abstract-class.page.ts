import { Component, OnInit } from '@angular/core';
import { Quadrangle } from '../class/Quadrangle';
import { Square } from '../class/Square ';
import { Rectangle } from '../class/Rectangle';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {
  quadrangles: Quadrangle[] = [];
  minS: number = 0;
  constructor() {}

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  ras(nn: any) {
    this.quadrangles = new Array();
    let n = parseInt(nn);

    for (let i = 0; i < n; i++) {
      this.quadrangles.push(new Square('Square', this.getRandomInt(100)));
      this.quadrangles.push(
        new Rectangle(
          'Rectangle',
          this.getRandomInt(100),
          this.getRandomInt(100)
        )
      );
    }
    this.quadrangles[0].S();
    this.minS = this.quadrangles[0].square;

    this.quadrangles.forEach((figure) => {
      figure.S();
      if (figure.square < this.minS) this.minS = figure.square;
      console.log(figure.show());
    });
  }

  getColor(el: number, min: number) {
    return el === min ? 'green' : '';
  }

  ngOnInit() {}
}
