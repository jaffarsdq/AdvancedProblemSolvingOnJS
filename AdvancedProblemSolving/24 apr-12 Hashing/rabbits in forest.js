/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(ans) {
    let result = 0;
    let map = {};
    for(let i = 0; i < ans.length; i++) {
        if(!map[ans[i]]){
            result += ans[i] + 1;
            map[ans[i]] = ans[i];
        } else {
            map[ans[i]]--;
            if(map[ans[i]] == 9) delete map[ans[i]];
        }
    }
    return result;
};