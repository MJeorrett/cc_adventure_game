var Hero = function( name, favouriteFood ){
     this.name = name;
     this.health = 100;
     this.favouriteFood = favouriteFood;
};

Hero.prototype = {
     talk: function(){
          return "Hi, my name is " + this.name;
     },
     eat: function( food ) {
         var replenishmentFactor = 1;
         if (food.name === this.favouriteFood && food.replenishmentValue > 0){
          replenishmentFactor = 1.5;
         }
         this.health += food.replenishmentValue * replenishmentFactor;   
    },
    checkIfPrincess: function(candidate){
          if (candidate.hat === "crown"){
               return true;
          }
          return false;
    },
    save: function(candidate){
          var isPrincess = this.checkIfPrincess(candidate);
          if (isPrincess){
               candidate.inPeril = false;
               candidate.reward(this);
          }

    }
}

module.exports = Hero;
