
function solution(nums) {
    var answer = 0;
        // answer <= choice
    // choice, 중복값 비교, max(배열 중복값 제거 길이, choice)
    
    let choice = nums.length / 2
    let noneDuplicatedLength = nums.filter((x,i)=> nums.indexOf(x) === i).length
    
    console.log(choice)
    console.log(noneDuplicatedLength)
    
    
    return choice <= noneDuplicatedLength ? choice : noneDuplicatedLength
}


// 배열 중복 제거 방법

// const array = ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D'];
// console.log(array);	// ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D']

// let result1 = [...new Set(array)];
// console.log(result1);	// ['C', 'A', 'B', 'D', 'E']

// let result2 = array.filter((v, i) => array.indexOf(v) === i);
// console.log(result2);	// ['C', 'A', 'B', 'D', 'E']

// let result3 = array.reduce((ac, v) => ac.includes(v) ? ac : [...ac, v], []);
// console.log(result3);	// ['C', 'A', 'B', 'D', 'E']

// let result4 = [];
// for(v of array) {
//   if (!result4.includes(v)) result4.push(v);
// }
// console.log(result4);	// ['C', 'A', 'B', 'D', 'E']

// let result5 = Object.keys(Object.fromEntries(array.map(v => [v, 0])));
// console.log(result5);	// ['C', 'A', 'B', 'D', 'E']