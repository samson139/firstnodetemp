const {readFile, writeFile} = require('fs');

readFile('./subfolder/first.txt', 'utf8', (err,result) => {
  if(err){
    console.log(err);
  
    return 
  }
  const first = result;
  readFile('./subfolder/second.txt','utf8', (err,result) =>{
    if(err){
      console.log("err");
      return
    }
   const second = result;

   writeFile('./subfolder/result-async.txt', `Here is the result : ${first}, ${second}`, (err,result) => {
    if(err){
      console.log(err);
      return
    }
    console.log("write success");
    
    readFile('./subfolder/result-async.txt','utf8', (err,result)=> {
      
      if(err) {
        console.log("err");
        return
      }
      console.log(result);
    })
   })
  })
})
