function solution(participant, completion) {

    // 동명이인 고려 X
    // return participant.filter(x => !completion.includes(x))
    
    // let arr = participant
    // for(let i =0; i<completion.length; i++){
    //     let completionIndex = arr.indexOf(completion[i])
    //     arr.splice(completionIndex, 1)
    // }
    
    // 시간초과
    // completion.map(x => {
    //     let completionIndex = participant.indexOf(x)
    //     participant.splice(completionIndex, 1)
    // })
    // console.log(participant)    
    // return participant[0]

    
    // 처음 다른거 나오면 달라짐 (뒤에 나오는거 순서 틀려져서)
    // return participant.filter((x,i)=>x!=completion[i])

//     map arr 전체 순회
//     let answer = ''
//     participant.map((x,i)=>{
//         console.log(x)
//         console.log(completion[i])
//         console.log(x!=completion[i])
//         if(x!=completion[i]){
//             answer= x
//         }
            
//     })
    
    
        
    participant.sort()
    completion.sort()
    for(let i = 0 ; i < participant.length; i++){
        if(participant[i] != completion[i])
            return participant[i]
    }

}