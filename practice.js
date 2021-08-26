// arraysum using forEach or Map******
// let sum = 0;
// // const add = arry => {
// //     for (const a of arry) {
// //         sum = sum + a;
// //     }
// //     return sum;
// // }
// const arry = [5, 34, 45, 67, 87];
// // const a = add(arry);
// // console.log(a);

// arry.forEach(x => {
//     sum = sum + x;
// })
// console.log(sum);

// search matching book*******
array = [
    'javascript yoo 1',
    'jscript',
    'Yo yo JavaScript 2'
]
const search = 'jaVascript';
const newArray = [];

// for (const book of array) {
//     if (book.toLowerCase().includes(search.toLowerCase())) {
//         newArray.push(book);
//     }
// }
// console.log(newArray);

/* array.forEach(book => {
    if (book.toLowerCase().includes(search.toLowerCase())) {
        newArray.push(book);
    }
});
console.log(newArray); */

// Array Object reminder

// const shipu = [
//     { name: 'shipu', color: 'fair', height: '5 fit 7' },
//     { name: 'shipu1', color: 'fair', height: '5 fit 7' }
// ]
// console.log(shipu[0].name);

//Object reminder

const Shipu = { name: 'Shipu', color: 'fair', height: '5 fit 7', work: { firstCompany: 'diu', secondCompany: 'job' }, address: 'Dhaka' };
// console.log(Shipu.name);
// console.log(Shipu.work.firstCompany);
const { name, color } = Shipu;
const { firstCompany, secondCompany } = Shipu.work;
console.log(name, color, firstCompany, secondCompany);