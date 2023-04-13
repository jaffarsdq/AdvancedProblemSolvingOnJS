/**
 * https://leetcode.com/problems/gas-station/description/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let count = 0;
    let n = gas.length;
    let tank_cap = 0;
    let flag = false;
    let startOfTour =  -1;
    let i = 0;
    while(count < 2*n) {
        if(i == startOfTour) return i;
        tank_cap += gas[i];
        if(tank_cap >= cost[i]) {
            flag = true;
            if(startOfTour == -1) {
                startOfTour = i;
            }
            tank_cap -= cost[i];
            i = (i+1)%n;
            count++;
        } else {
            flag = false; 
            tank_cap = 0;
            i = (i+1)%n; 
            startOfTour =-1;
            count++;
        }
    }
    return -1;
};

/**
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
 */

/**
 * Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
 */