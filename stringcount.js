export class AppComponent {
  title = "component-overview";
  str = "RavichandranM";
  numArr = [1, 2, 3, 1, 4, 1, 2, 5, 6, 3, 7];
  newArr = [];
  output;

  clickButton() {
    let obj = {};
    for (let i = 0; i < this.str.length; i++) {
      const char = this.str[i].toLowerCase();
      if (obj[char]) {
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
    }
    this.output = obj;
    console.log(obj);
  }
  getDublicate() {
    let obj = {};
    for (let i = 0; i < this.numArr.length; i++) {
      const char = this.numArr[i];
      if (obj[char] >= 1) {
        obj[char] += 1;
        if (this.newArr.indexOf(this.numArr[i]) == -1)
          this.newArr.push(this.numArr[i]);
      } else {
        obj[char] = 1;
      }
    }
  }
}
