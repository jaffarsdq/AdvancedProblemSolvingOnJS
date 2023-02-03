// Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// Output: [[1,2,10],[4,5,7,8]]

var findWinners = function(matches) {
    let players = Array(100001).fill(-1);
    for(let i=0; i<matches.length; i++){
        let winners = matches[i][0];
        let losers = matches[i][1];
        if(players[winners] == -1){
            players[winners] = 0;
        }
        if(players[losers] == -1){
            players[losers] = 1;
        }
        else if(players[losers] >= 0){
            players[losers]++;
        }
    }
    let ans = [[],[]];
    for(let i=0; i<players.length; i++){
        if(players[i] == 0){
            ans[0].push(i);
        }
        if(players[i] == 1){
            ans[1].push(i);
        }
    }
    return ans;
};

let matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
console.log(findWinners(matches));