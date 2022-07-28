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