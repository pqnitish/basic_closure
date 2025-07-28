 function outerFunction(){
    let message = "hello";
    return function inner(){
        console.log(message);
        
    }
    
 }
 let result = outerFunction()
 result()
 