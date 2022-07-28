                        
 const totalBasketballScore = (freeThrows,midRange,threePointers)=>{
                  if(typeof freeThrows==='number'&& typeof midRange==='number' && typeof threePointers==='number'){
                      console.log((freeThrows*1)+(midRange*2)+(threePointers*3));
              
                  }
                  else{
                      console.log("enter proper value");
                  }
              
              }
              totalBasketballScore(2,3,4)                       
                        