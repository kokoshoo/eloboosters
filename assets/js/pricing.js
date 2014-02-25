var currentView ="unranked";

function getView(){
	return currentView;
}

function changeView(view){
	currentView = view;
	$('#service_view > div').css('display', 'none');
	$('#'+currentView+"_view").css('display','block');
	calcPrice();
}

function changeDivision(){
	//find currently selected division
	var selected = $('#'+currentView+'_selected_division').find('option:selected').attr('class');
	//change image based on division
	$('#'+currentView+'_picture').attr("src",'assets/img/'+selected+".jpg");
	calcPrice();
}

function changeNumOfGames(){
	var num = document.getElementById(
		currentView+"_games_purchased_slider").value;
	document.getElementById(currentView+"_games_purchased").innerHTML = num;
	calcPrice();
}



function calcPrice(){
	//calc price based on current view
	if(currentView=="unranked"){
		calcUnrankedPrice();
	}
	if(currentView=="perdiv"){
		calcPerDivPrice();
	}
	if(currentView=="perwin"){
		calcPerWinPrice();
	}
}

function getRank(){
	return $('#'+currentView+'_selected_rank').find('option:selected').attr('class');
}

function getDivision(){
	return $('#'+currentView+'_selected_division').find('option:selected').attr('class');
}

function getNumOfGames(){
	return document.getElementById(
		currentView+"_games_purchased_slider").value;
}

function calcPerWinPrice(){
	//get division and rank then multiply appropriate
	//unit cost by number of wins

	/*Prices per win*************************
	Bronze All: $5
	Silver 5-2: $7
	Silver 1: $8
	Gold 5-2: $8
	Gold 1: $10
	Platinum 5-2: $10
	Platinum 1: $20
	Diamond 5: $20
	Diamond 4: $25
	Diamond 3: $35
	Diamond 2: $40
	Diamond 1: $50
	*/

	//Get Rank
	var rank = getRank();
	//Get Division
	var division = getDivision();
	//Get Num of games
	var numOfGames = getNumOfGames();


	var price=0;
	var minimum = 15;

	if(division=="bronze"){
		price = numOfGames*5;
			console.log("moo");
	}
	else if(division=="silver"){
		if(rank>1){
			price = numOfGames*7;
		}
		else{
			price = numOfGames*8;
		}
	}
	else if(division=="gold"){
		if(rank>1){
			price = numOfGames*8;
		}
		else{
			price = numOfGames*10;
		}
	}
	else if(division=="platinum"){
		if(rank>1){
			price = numOfGames*10;
		}
		else{
			price = numOfGames*20;
		}
	}
	else if(division=="diamond"){
		if(rank==5){
			price = numOfGames*20;
		}
		else if(rank == 4){
			price = numOfGames*25;
		}
		else if(rank == 3){
			price = numOfGames*35;
		}
		else if(rank == 2){
			price = numOfGames*40;
		}
		else{
			price = numOfGames*50;
		}
	}
	else{
		price = "calc error";
	}

	if(price<minimum){
		setPrice(minimum+" Minimum");
	}
	else{
		setPrice(price);
	}

}

function calcUnrankedPrice(){
	//unranked-gold $6 a game
	//platinum $8 a game
	//the rest $10 a game
	
	/*First get the division and num of games
	then multiply accordingly by default vals*/
	var division = getDivision();
	var num = getNumOfGames();
	var price = 0;
	switch(division){
		case "bronze":
		case "unranked":
		case "silver":
		case "gold":
			price = 6*num;
			break;
		case "platinum":
			price = 8*num;
			break;
		case "diamond":
		case "challenger":
			price = 10*num;
			break;
		default:
			price = "Cannot calculate";
	}

	setPrice(price);

}

function setPrice(price){
	document.getElementById(currentView+"_price").innerHTML =
	"Price: $"+price;
}

$( document ).ready(function() {
	changeView(currentView);
    calcPrice();
});


