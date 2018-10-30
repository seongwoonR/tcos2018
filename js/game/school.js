
function Start_school(){

	/////// SET UP SCENE ////////

	Show("background","school");
	Show("school_alone","school_alone");
	PlaySound("bg","school",{loop:-1, volume:0.3});

	/////////////////////////////
	
	y("(Man, I fucking hate being on a period...)");
	y("(I want to take out my womb...)");
	y("(My stomach hurts and I have to go to the bathroom periodically.)");
	y("(I feel as if my body is not my own...)");

	queue(ClearDialogue,0);
	Show("school_stand","school_stand");
	y("...");
	j("Hey, Yooseung!");
	y("...Huh?");
	j("Ehh, it’s kind of hard to ask you...");
	j("Just a little bit.");
	y("...");
	j("...");
	y("What is it...?");
	j("Well");
	j("Um...");
	j("Do you have...");
	j("A sanitary pad?");
	y(". . .");
	y("(I don’t want anyone to know that I am on my period...)");

	Choose({
		"I don’t carry around such things": class_1,
		"No. Try the nurse’s office.": class_1,
		"Why are you asking me for that?": class_1
	});
}
function class_1(message){

	n(message);
	j("Of course...");
	j("Oh, I am embarrassed. Why is it so hard to ask you?");
	j("This is an all-girls class...");
	j("excuse me for saying this, but you are a bit boyish.");
	y("What exactly does “boyish” mean?");
	j("You wear pants instead of a skirt");
	j("and your hair is short...");
	y("...");
	j("When are you going to grow your hair out?");
	y("I don’t plan on it.");
	j("Pfft, all the boyish ones grow their hairs and go through a makeover when they go to college.");
	y("Who says?");
	j("You are probably getting married before us as well.");
	y("*sigh*");
	j("I would love to see you in a wedding dress, Yooseung.");

	Choose({
		"Fuck off": class_bad,
		"Why would I wear a wedding dress?": class_no,
		"I don’t plan to get married.": class_without
	});
}

function class_bad(message){
	n(message);
	j("Jeez.");
	j("Well, do invite me when you are getting married!");
	y("What is she even saying?");
	Toilet()
}
function class_no(message){
	n(message);
	j("Because you will get married one day!");
	j("I just can’t imagine it at the moment..");
	y("Don’t imagine such things.");
	j("Anyways, invite me when you are getting married!");
	Toilet()
}
function class_without(message){
	n(message);
	j("People who say that are usually the first to go!");
	y("I really do not plan on it.");
	j("No one knows what happens in the future.");
	j("You’ve got to get married!");
	j("Invite me when you do!");
	Toilet()
}

function Toilet(){
	j("Ah! The bell’s going to ring soon!");
	Show("school_stand",null);
	y("*Sigh*");
	Wait(1000);
	y("I should hit the bathroom.");

	Choose({
		"To a women’s bathroom nearby the classroom": near_girl,
		"To a women’s bathroom at the end of the hallway": far_girl,
		"To men’s bathroom on a floor below": under_boy
	});
}

//Toilet SCENE
queue(ClearDialogue,0);

function near_girl(message){
	y("Man, the line is long AND there are a lot of familiar faces...");
	$.near_girl = true
	if($.under_boy){
		y("I should go to the women’s bathroom at the end of the hallway.");
		far_girl();
	}else{
		Choose({
			"To men’s bathroom on a floor below": under_boy,
			"To a women’s bathroom at the end of the hallway": far_girl
		});
	}
}
function far_girl(message){

	queue(ClearDialogue, 0);
	Wait(1000);
	y("Phew.");
	y("There are no familiar faces,");
	y("and only a few people are in here.");
	Wait(1000);
	if($.under_boy || $.near_girl){
		y("Man...");
		y("I am not hoping for a lot here.");
		y("I just want to feel comfortable going to a bathroom.");
		y("Do I really have to mind everyone everytime I need to use a restroom?");
		y("*Sigh*");
	}
	y("I should hurry back.");
	school_End();
}

function under_boy(message){
	$.under_boy = true;
	Wait(500);
	y("Changing my sanitary pad will make a sound, so going to a men’s bathroom might be a bit difficult.");
	if(!$.near_girl){
		Choose({
			"To a women’s bathroom nearby the classroom": near_girl,
			"To a women’s bathroom at the end of the hallway": far_girl
		});
	} else{
		y("I should go to the women’s bathroom at the end of the hallway.");
		far_girl();
	}
}

function school_End(){
	Clear();
	Start_Going_home();
}
