class MyArray {
  isMaArray(elem) {
    return elem instanceof MyArray;
  }
}
const str1 = "hello world";
const arr = new MyArray();

console.log(MyArray.prototype.isMaArray(str1));
console.log(MyArray.prototype.isMaArray(arr));


