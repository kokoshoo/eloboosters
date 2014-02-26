var currentView ="perdiv";

function getView(){
	return currentView;
}

function changeView(view){
	//Hide all views
	//$('#service_view > div').css('display', 'none');

	//Hide the current view
	$('#'+currentView+"_view").css('display','none');
	$('#'+currentView).css('background','rgb(75, 75, 90)');
	currentView = view;
	
	//Display the newly selected view
	$('#'+currentView+"_view").css('display','block');
	$('#'+currentView).css('background','#222222');
	calcPrice();

}

function changeDivision(){
	if(currentView=="perdiv"){
		var current = $('#current_selected_division').
			find('option:selected').attr('class');
		var desired = $('#desired_selected_division').
			find('option:selected').attr('class');
		$('#current_picture').attr("src",'assets/img/'+
			current+".jpg");
		$('#desired_picture').attr("src",'assets/img/'+
			desired+".jpg");
	}
	else{
		//find currently selected division
		var selected = $('#'+currentView+'_selected_division').
			find('option:selected').attr('class');
		//change image based on division
		$('#'+currentView+'_picture').attr("src",'assets/img/'+
			selected+".jpg");
	}
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

function calcPerDivPrice(){
	var price_matrix = 
	[
	//Ranks
	//  5    4   3   2   1
	0,	30, 30, 30, 30, 35,//Bronze
		35, 35, 35, 35, 45,//Silver
		50, 55, 60, 65, 75,//Gold
		75, 80, 85, 90, 110,//Plat
		175,200,230,250,1500,//Diamond
		0 					//Challenger
	];

	var discounts_matrix = {
		'0-20'  : 0,
		'20-40' : .1,
		'40-60' : .18,
		'60-80' : .27,
		'80-99' : .35,
		'100'   : .4
	};


	//Will use this to find index of division
	//division_weight*5
	var division_weight = {
		'bronze'    : 0,
		'silver'    : 1,
		'gold'      : 2,
		'platinum'  : 3,
		'diamond'   : 4,
		'challenger': 5 
	};

	var division = $('#current_selected_division').
		find('option:selected').attr('class');
	//Get the current and desired division
	var curr_division = $('#current_selected_division').
	find('option:selected').attr('class');
		
	var desired_division = $('#desired_selected_division').
	find('option:selected').attr('class');

	//Then get current and desired rank
	var current_rank = $('#current_selected_rank').
	find('option:selected').attr('class');

	var desired_rank = $('#desired_selected_rank').
	find('option:selected').attr('class');

	//Make sure desired is higher than current
	current_index = +(division_weight[curr_division]*5) + +current_rank;
	desired_index = +(division_weight[desired_division]*5) + +desired_rank;

	if(current_index>=desired_index){
		document.getElementById(currentView+"_price").innerHTML =
		"Please choose a higher desired rank.";
	}
	else{
		//Add up the price starting from the current index
		//to the desired index
		var price = 0;
		var discounts = $('#current_selected_lp').
			find('option:selected').attr('class');
		var deduction = +price_matrix[current_index] * +discounts_matrix[discounts];
		for(current_index; current_index < desired_index; current_index++){			
			price+= +price_matrix[current_index];
		}
		//Get discounts
		price -= +deduction;
		setPrice(Math.round(price));
	}

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
	var minimum = 7;

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


