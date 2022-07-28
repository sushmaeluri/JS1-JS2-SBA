 // problem1                        
 const totalBasketballScore = (freeThrows,midRange,threePointers)=>{
                  if(typeof freeThrows==='number'&& typeof midRange==='number' && typeof threePointers==='number'){
                      console.log((freeThrows*1)+(midRange*2)+(threePointers*3));
              
                  }
                  else{
                      console.log("enter value in numbers");
                  }
              
              }
              totalBasketballScore(2,3,4)  
              
              
   //problem 2
   const itemPrice = (item)=> {
    if(typeof item === 'string'){
        switch (item){
            case 'computer':
                console.log("$500");
                break;
            case 'mouse':
                console.log("$10");
                break;
            case 'tablet':
                console.log("$250");
                break;
            case 'case':
                console.log("$25");
                break; 
            case 'router':
                console.log("$100");
                break;
            default:
                console.log("Please enter the item in the list: computer,mouse,tablet,case,router")               

        }
    }
    else{
        console.log("Please enter the string not numbers")               
    }
    
}
itemPrice("case");
   

//problem3 

const restaurants=['Applebees', 'Panera Bread',   'Popeyes', 'Chopt', 'Chick-fil-A','Cheesecake Factory','Five Guys'
                  ];
let randomRestaurantList=[];

const  randomRestaurant =(numOfRestaurants)=>{
   
    for (i=0;i<numOfRestaurants;i++){
        rand=Math.floor(Math.random()*restaurants.length);
        randomRestaurantList.push(restaurants[rand]);
         }
    return randomRestaurantList;
}
console.log(randomRestaurant(3));

//problem 4

const isLeapYear = (year)=>{
    if(year%4 === 0){
        if(year%100 ===0){
            if(year%400 ===0){
                return true;
            }else{
               return false;
            }

        }else{
            return true;
        }
    }else{
       return false;
        
    }

}
console.log(isLeapYear(2000));
