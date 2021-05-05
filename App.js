class App{
    constructor(){}
    getState(){
        var gameStateRef  = database.ref('gameState');
         gameStateRef.on("value",function(data){
            gameState = data.val();
         })
     }
     update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    async start(){
    if(gameState === 0){
      user = new User();
      signup = new Signup()
      signup.display();
    }
}

gameplay(){
    signup.hide();
       if(gameState === 2) {
       text("You've Reached your Destination",100,100);
    }
  

//keyPressed();
drawSprites();
}
}