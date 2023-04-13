function pattern(n) {
    //Up
    for(let i=1; i<=n; i++){
        let str = "";
        //Spaces
        let Spaces = n-i+1;
        for(let j=1; j<=Spaces ; j++){
            str+= " ";
        }
        //stars
        str+= "*";
        //spaces
        let spaces = (i-1)*2; 
        for(let j=1; j < spaces ; j++){
            str+= " ";
        }
        //stars
        if(i == 1){
            str += "";
        }else{
            str += "*";
        }
        console.log(str);
    }
    //Down
    for(let i=1; i<=n-1; i++){
        let str = "";
        //Spaces
        let Spaces = i+1;
        for(let j=1; j<=Spaces ; j++){
            str+= " ";
        }
        //stars
        str+= "*";
        //spaces
        let spaces = 2*(n-i-1); 
        for(let j=1; j < spaces ; j++){
            str+= " ";
        }
        //stars
        if(i == n-1){
            str += "";
        }else{
            str += "*";
        }
        console.log(str);
    }
    
}
pattern(5);


/* 
     *    
    * *   
   *   *  
  *     * 
 *       *
  *     * 
   *   *  
    * *   
     *
 */   