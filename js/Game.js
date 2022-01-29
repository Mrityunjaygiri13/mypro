class Game {
    constructor(){
  
    }
  
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
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
     
   //   b1= createSprite(400, 360, 10, 600);
   //   b2= createSprite(1000, 360, 10, 600);
   //   b3= createSprite(700, 62, 600, 10);
   //   b4= createSprite(700, 662, 600, 10);
     
    }
  
    play(){
        form.hide();
    
        Player.getPlayerInfo();

        
        if(allPlayers !== undefined){
            board=createSprite(700,355)
            board.addImage(boardImg);
            board.scale=.3
         
         // background(rgb(198,135,103));
         // image(boardImg, 0,-displayHeight*4,displayWidth, displayHeight*5);
        }    
    
  }
}
  