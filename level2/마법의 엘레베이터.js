function solution(storey) {
    var answer = 0;
    
    let tmp = storey
    while(tmp != 0){
        let last = tmp % 10
        if(last < 6){
            answer += last
            tmp = Math.floor(tmp / 10)
        }
        else{
            answer += 10 - last
            tmp = Math.floor(tmp / 10) + 1
        }

    }
    
    return answer;
}