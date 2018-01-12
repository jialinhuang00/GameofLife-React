### Notes

* Bootstrap 最新版本@alpha 不一定適用於`react bootstrap`，例如`<DropdownButton>`失效

* [eventKey key difference?](https://github.com/react-bootstrap/react-bootstrap/issues/432)

* 使用eventKey時，`eventKey={num}`，而不是`eventKey="num"`


### 生命遊戲 Game of Life邏輯

以九宮格中間為標的
* 標的八個鄰居少於2戶，下一次就掛了
* 標的八個鄰居為2戶或3戶，下一周期會存活
* 標的的八個鄰居有3戶以上，會因為太擠競爭死掉


##### 一部分程式碼，
```js
    // game of life's logic
    // 1  2  3
    // 4  *  6
    // 7  8  9
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        // logic sequence: 2, 1, 3
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        // logic sequence: 4, 6
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        // logic sequence: 8, 7, 9
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && j < this.cols - 1)
          if (g[i + 1][j + 1]) count++;
        //   change g2
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        // we dont take the condition that count === 2 to our judgement,
        // cause that result in infinite changing and no stable pattern.
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
}
```

### Refs

* [生命游戏（Game of Life）有哪些图形？](https://www.zhihu.com/question/30782166)
* [other's demo](http://mingplusplus.com/game-of-life/)
* [Turtorial](https://www.youtube.com/watch?v=PM0_Er3SvFQ)

