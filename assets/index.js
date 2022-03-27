class MyArray {
  constructor() {
    this.length = 0;
  }
  static isMaArray(elem) {
    return elem instanceof MyArray;
  }
  push(...elem) {
    for (let i = 0; i < elem.length; i++) {
      this[this.length++] = elem[i];
    }
    return this.length;
  }
  pop() { 
    if }
}

const str1 = "hello world";
const arr = new MyArray();

console.log(MyArray.isMaArray(str1));
console.log(MyArray.isMaArray(arr));
