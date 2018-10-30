
function play_tw(){

	/////// SET UP SCENE ////////
	queue(ClearScene, 0);
	Show("background","shop");
	Show("d-d","tw_shop_1");

	////////////////////////////

	Wait(1000);
	Show("customer","customer_bring_1");
	Wait(500);
	c("Excuse me.");
	c("Can I get these?");
	y("Oh, sure thing.");

	Show("customer","customer_bring_2");
	Show("d-d","tw_shop_2");

	Wait(200);
	PlaySound("sfx","beep");
	Wait(200);
	PlaySound("sfx","beep");
	Wait(500);
	PlaySound("sfx","beep");
	c("...");
	Wait(300);
	PlaySound("sfx","beep");
	Wait(1000);
	y("It’s $39.80.");
	Wait(1000);
	c("...");
	y("...?");
	y("Um...");
	y("Yes?");
	Wait(800);
	y("...Sir?");
	c("Oh...! Sorry.");
	c("But um...");
	c("I can’t help but to ask...");
	C("Hey, Isn't it quite rude to ask?");
	c("Um...");
	c("Are you male or female?");
	y(". . .");

	Choose({
		"It comes down to $39.80.": predict,
		"What do you think?": predict,
		"That is very rude.": rude_customer
	});
}

function predict(message){
	y(message);
	c("You are a man, right?");
	C("Isn’t she a woman?");
	c("No, I think he’s a man. Look at his hands.");
	C("But the voice sounds feminine...");
	y("Excuse me...");
	shop_2();
}

function rude_customer(message){
	y(message);
	c("Pardon?");
	y("Why is it important for you whether I’m a man or a woman?");
	c("No... um... I was just asking.");
	c("Wow, someone’s sour.");
	C("Hey, dude. Let’s just pay and go.");
	shop_2();
}

function shop_2(){
	//d was dad but I will use only one time here
	d("Oh... He is man!");
	Wait(800);
	c("See? That’s what I said.");
	c("He is a man");
	Show("d-d","tw_shop_1");
	Show("customer","customer_bring_1");
	Wait(500);
	C("Is that so…?");
	C("I thought he was a woman because his hair was long and his voice was high.");
	C("Now that I look at him, maybe he is a he...");
	c("We should’ve bet on this.");
	y("...");
	y("...Have a nice day.");
	Show("customer",null);
	Wait(500);
	y("*Sigh*");

	Wait(1000);

	f("...");
	Show("friend","friend_shop");
	Wait(800);
	f("Man, they were so rude.");
	f("Yooseong, are you okay?");
	y("...");
	y("Yeah… I’m okay.");
	y("Sorry, I’m not feeling well... could you tell the manager that I had to leave early?");
	f("Yep... Get some rest.");

	Clear();
	telephone();
}
