//after we choose a random position for a new tile, render board so it gets saved on to the array. Then use i and j to make the whole move with each arrow key. 
var board = [[0,2,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

var boardSize = 4;


var xRandom = randomNumber(0,3);
var yRandom = randomNumber(0,3);

function renderBoard()
{
   
	for(var i = 0; i < boardSize; i++) 
	{
           
		for(var j = 0; j < boardSize; j++)
		{
                   
			var boardID = "r"+i+"c"+j;
                   
			if(board[i][j]!=0) 
			{
                           
				document.getElementById(boardID).innerHTML = board[i][j];

			} 
			else {
                            
				document.getElementById(boardID).innerHTML = "";
                   
			}
           
		}
  
	}

}


//grid at start of game

function runGame()
{
	
	renderBoard();
	
}

function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function renderRand()
{
		
	xRandom = randomNumber(0,3);
	yRandom = randomNumber(0,3);      
		if (board[xRandom][yRandom]==0){
			board[xRandom][yRandom] = 2;

		} 
}




function arrowPress(event)
{
	
	//left
	if (event.keyCode == 37)
	{
	
	for(var i = 0; i < boardSize; i++) 
	{	
            
			//moving left
			if (board[i][0] == 0){
				board[i][0] = board[i][1];
				board[i][1] = 0
				}
			//combining left
			if (board[i][0]==board[i][1]){
				board[i][0] = board[i][0]*2;
				board[i][1] = 0
				}	
			//moving
			if (board[i][1] == 0){
				board[i][1] = board[i][2];
				board[i][2] = 0
				}
			//combining
			if (board[i][1]==board[i][2]){
				board[i][1] = board[i][1]*2;
				board[i][2] = 0
				}
			//moving
			if (board[i][2] == 0){
				board[i][2] = board[i][3];
				board[i][3] = 0
				}
			//combining
			if (board[i][2]==board[i][3]){
				board[i][2] = board[i][2]*2;
				board[i][3]=0
				}			
		 renderBoard();				             
	}renderRand(); renderBoard();}	
	//right
	if (event.keyCode == 39)
	{
	
	for(var i = 0; i < boardSize; i++) 
	{	
            //moving right
			if (board[i][3] == 0){
				board[i][3] = board[i][2];
				board[i][2] = 0
				}
			//combining right
			if (board[i][3]==board[i][2]){
				board[i][3] = board[i][3]*2;
				board[i][2] = 0
				}
			//moving
			if (board[i][2] == 0){
				board[i][2] = board[i][1];
				board[i][1] = 0
				}
			//combining
			if (board[i][2]==board[i][1]){
				board[i][2] = board[i][2]*2;
				board[i][1] = 0
				}
			//moving
			if (board[i][1] == 0){
				board[i][1] = board[i][0];
				board[i][0] = 0
				}
			//combining
			if (board[i][1]==board[i][0]){
				board[i][1] = board[i][1]*2;
				board[i][0]=0
				}		
		 renderBoard();				             
	}renderRand();renderBoard();}	
	//up
	if (event.keyCode == 38)
	{
	
	for(var j = 0; j < boardSize; j++) 
	{	
            //moving up
			if (board[0][j] == 0){
				board[0][j] = board[1][j];
				board[1][j] = 0
				}
			//combining up
			if (board[0][j]==board[1][j]){
				board[0][j] = board[0][j]*2;
				board[1][j] = 0
				}	
			//moving
			if (board[1][j] == 0){
				board[1][j] = board[2][j];
				board[2][j] = 0
				}
			//combining
			if (board[1][j]==board[2][j]){
				board[1][j] = board[1][j]*2;
				board[2][j] = 0
				}	
			//moving
			if (board[2][j] == 0){
				board[2][j] = board[3][j];
				board[3][j] = 0
				}
			//combining
			if (board[2][j]==board[3][j]){
				board[2][j] = board[2][j]*2;
				board[3][j]=0
				}	
				
		renderBoard();
						             
	}renderRand();renderBoard();}	
	//down
	if (event.keyCode == 40)
	{
	
	for(var j = 0; j < boardSize; j++) 
	{	
            //moving down
			if (board[3][j] == 0){
				board[3][j] = board[2][j];
				board[2][j] = 0
				}
			//combining down
			if (board[3][j]==board[2][j]){
				board[3][j] = (board[3][j])*2;
				board[2][j] = 0
				}	
			//moving
			if (board[2][j] == 0){
				board[2][j] = board[1][j];
				board[1][j] = 0
				}
			//combining
			if (board[2][j]==board[1][j]){
				board[2][j] = (board[2][j])*2;
				board[1][j] = 0
				}
			//moving
			if (board[1][j] == 0){
				board[1][j] = board[0][j];
				board[0][j] = 0
				}
			//combining
			if (board[1][j]==board[0][j]){
				board[1][j] = (board[1][j])*2;
				board[0][j]=0
				}
		renderBoard();				             
	} renderRand(); renderBoard();}			
		
}
		
		

