//const assert = require('chai').assert;
import { assert, expect } from 'chai';
import { salary } from '../multArray.mjs';

//iterating with nested for loop
for (var i = 0, l1 = salary.length; i < l1; i++) {
    for (var j = 0, l2 = salary[i].length; j < l2; j++) {
        console.log( salary[i][j] ); 
    }
}

//adding elements
salary[3].push("India", "Mumbai");
console.log(salary[3])

//removing elements
//remove last element from 4th subarray
salary[3].pop();
console.log(salary[3])
//remove last subarray
salary.pop();
console.log(salary);

//.find()
// .map()
//.filter()
const users = [
    {
        userId: "1",
        name: "User One",
        country: "A",
        tags: ["Frontend"]
    },
    {
        userId: "2",
        name: "User Two",
        country: "B",
        tags: ["Frontend", "Backend", "DevOps"]
    },
    {
        userId: "3",
        name: "User Three",
        country: "C",
        tags: ["Backend", "DevOps"]
    },
    {
        userId: "4",
        name: "User Four",
        country: "C",
        tags: ["DevOps"]
    },
    {
        userId: "5",
        name: "User Five",
        country: "B",
        tags: ["DevOps"]
    }
];
// 1: Write a function to filter users by tags: Ex. Get All Backend Users
function filterByTag(users,tag){
    return users.filter(u=>u.tags.indexOf(tag) > -1 );
}
console.log(filterByTag(users,'DevOps'));
//.flatMap()
//.sort() 
//.reduce()
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }
  
  let groupedPeople = groupBy(people, 'age');
  // groupedPeople is:
  // {
  //   20: [
  //     { name: 'Max', age: 20 },
  //     { name: 'Jane', age: 20 }
  //   ],
  //   21: [{ name: 'Alice', age: 21 }]
  // }