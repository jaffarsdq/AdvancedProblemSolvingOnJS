function pattern(n) {
    //Upper part
    for(let i=1; i<=n; i++){
        let str = "";
        //spaces
        let spaces = n+1-i;
        for(let j=1; j<=spaces; j++){
            str += " ";
        }
        //Numbers
        let Numbers = i;
        let count = n+1-i;
        for(let j=1; j<=Numbers; j++){
            str += count + " ";
            count++;
        }
        console.log(str);
    }
    //Middle
    for(let i=1; i<=1; i++){
        let str = "";
         //Numbers
         let count = 0;
         for(let j=1; j<=n+1; j++){
             str += count + " ";
             count++;
         }
         console.log(str);
    }
    //Lower part
    for(let i=1; i<=n; i++){
        let str = "";
        //spaces
        let spaces = i;
        for(let j=1; j<=spaces; j++){
            str += " ";
        }
        //Numbers
        let Numbers = n+1-i;
        let count = i;
        for(let j=1; j<=Numbers; j++){
            str += count + " ";
            count++;
        }
        console.log(str);
    }
}

pattern(4);

/*  
    4
   3 4
  2 3 4
 1 2 3 4
0 1 2 3 4
 1 2 3 4
  2 3 4
   3 4
    4     
*/