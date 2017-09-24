/**
 * Created by andrew on 9/24/17.
 */
import { Injectable } from '@angular/core';
import { hirangaPairs } from '../../assets/hiranga';
import { QAPair } from '../util/qapair';

@Injectable()
export class QAService {

  getNRandomHirangaPairs(n: number): QAPair[] {
    const temp: {ind: number, score: number}[] = [];
    for (let iter = 0; iter < hirangaPairs.length; iter++) {
      temp.push({ind: iter, score: Math.random()});
    }

    temp.sort((a, b) =>  {
      if (a.score > b.score) {
        return 1;
      } else if (a.score < b.score) {
        return -1;
      }
      return 0;
    });

    return temp.slice(0, n)
            .map((item) => hirangaPairs[item.ind]);
  }
}
