const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = require('fs').readFileSync(filePath).toString().split('\n');
let count = Number(input[0]);
let answerStr = '';



let n = parseInt(input[0])
let k = parseInt(input[1])


arr = []
for(let i = 1; i< 4; i++){
    for(let j = 1; j< 4; j++){
        if(arr.length < k + 1){
            console.log(arr)
            arr.push(i * j)
        }
        else{

            
            
        }
        
        
    }
}
console.log(arr.slice(-1)[0])

// 세준이는 크기가 N×N인 배열 A를 만들었다. 
// 배열에 들어있는 수 A[i][j] = i×j 이다. 
// 이 수를 일차원 배열 B에 넣으면 B의 크기는 N×N이 된다. B를 오름차순 정렬했을 때, B[k]를 구해보자.
// 배열 A와 B의 인덱스는 1부터 시작한다.



