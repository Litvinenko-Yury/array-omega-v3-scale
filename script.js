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

const scaledArr = (arr, scale) => {
  const tempArr = []; // создал новый пустой массив

  arr.forEach((arrInternal) => { // для каждого элемента массива baseArr[], это внутренний массив-("строка").
    const tempArrRow = []; //создал новый массив-строку.

    arrInternal.forEach((elemIntArr) => { //для элемента массива baseArr[], это внутренний массив-("строка"), и проходим по каждому внутреннему элементу этого массива.
      for (let i = 0; i < scale; i++) {
        tempArrRow.push(elemIntArr); // записываем в tempArrRow[] - текущий элемент нужное кол-во раз.
      }
    });
    for (let i = 0; i < scale; i++) {
      tempArr.push(tempArrRow); // записываем в tempArr[] - массив-("строку") нужное кол-во раз.
    }
  });
  return tempArr;
};

const newArr = scaledArr(baseArr, 2); // вызов функции с нужными аргументами
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
