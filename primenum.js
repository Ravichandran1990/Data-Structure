for(let i = 1; i <= 20; i++) {
    let primeNumCount = 0;
    //console.log(i)
    for(let j = 2; j <= i;j++){
      if(i % j == 0) {
          primeNumCount += 1;
          
      } 
    }
    if(i > 2 && primeNumCount <= 1) {
        console.log(i)
      }
    
    
}