/*масштабирование исходного массива*/

'use strict';

/*2d-массив-шаблон*/
const baseArr = [
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 1, 1, 1]
];

let tempArr;
const scaledArr = (arr, scale) => {
  let tempArr = []; // создал новый пустой массив

  arr.forEach((el) => { // для каждого элемент массива baseArr[], это "строка".
    let tempArrRow = []; //создал новый массив-строку.

    el.forEach((el2) => { //берем элемент массива baseArr[]- (это "строка"), и проходим по каждому внутреннему элементу.
      for (let i = 0; i < scale; i++) {
        tempArrRow.push(el2); // записываем в newArrRow[] - текущий элемент нужное кол-во раз.
      }
    });
    for (let i = 0; i < scale; i++) {
      tempArr.push(tempArrRow); // записываем в newArr[] - массив-строку нужное кол-во раз.
    }
  });
  return tempArr;
};

const newArr = scaledArr(baseArr, 5); // вызов функции с нужными аргументами
console.log(newArr);


/************** */
/*вывод newArr на страницу*/
/************** */
const matrix = document.querySelector('#matrix');

for (let i = 0; i < newArr.length; i++) {
  const ul = document.createElement('ul'); // создать элемент ul
  ul.classList.add('matrix__list');
  matrix.append(ul);// добавить элемент на страницу

  for (let n = 0; n < newArr[i].length; n++) {
    const li = document.createElement('li'); // создать элемент li
    li.classList.add('matrix__item');
    if (newArr[i][n] == 1) {
      li.classList.add('matrix__item--active');
    }
    ul.append(li); // добавить элемент на страницу
  }
}
