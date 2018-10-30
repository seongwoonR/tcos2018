function Start(){

	$ = {};

	/////// SET UP SCENE ////////

	Show("background","main");
	Show("table","lab_table");
	Show("me","me");

	PlaySound("bg","laboratory",{loop:-1, volume:0.3});

	//////////////////////////////

	R("<b>Trans Coming Out Simulator 2018</b>");
	R("This game is a mixed bag of truths and lies.");
	R("Hello, welcome to this game.");

	Choose({
		"Game Play!": Play,
		"Who are you? (Credit)": function(){
			Credits("Who are you?");
		},
		"Why did you make this? (About this game)": function(){
			About("why did you make this?");
		}
	});
}


function pencil(message){
	p(message);
	Show("me","me_write");
	PlaySound("sfx","pencil");
	Wait(2000);
	Show("me","me");
}


function Play(message){
	p(message);
	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		R("You are way too impatient!");
		R("Coming Out simulator 2014 was created by someone else");
		R("and this game has different content yet you are skipping it?");
		p("Haha...");
		R("Why are you making that face?");
		R("You said you are skipping, but to introduce myself, I’m Raul-");
		p("Skip! Skip!");
		R("This story was inspired by Nicky Case’s Coming Out Simulator 2014-");
		p("Skiiiiip!");
		R("Augh...");
		R("Fine.");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		R("Okay!");
		// Asked either
	}else if($.asked_about || $.asked_credits){
		R("Okay, well...");
	}
	Wait(500);
	R("If you don’t mind,");
	R("may I ask your gender?");

	Choose({
		"Male": function boy(){
			$.gender = 1;

			p("Male.");
			Play_2();
		},
		"Female": function girl(){
			$.gender = 2;

			p("Female.");
			tw_play();
		},
		"Neither": function(message){
			$.gender = 3;
			p(message);
			R("Ah, are you nonbinary?");
			R("Sorry.");
			R("but I could only manage to make binary options due to the lack of competence.");
			non_binary();
		}
	});
}

function non_binary(){
	Wait(1000);
	R("Let me ask you again.");
	R("Whose story do you want to hear?");
	Choose({
		"Your story (Male)": function(){
			p("I would like to listen to your story.");
			Play_2();
		},
		"Your friend’s story (Female)":  function(){
			p("I would like to listen to your friend's story.");
			tw_play();
		}
	});
}

function Play_2(){

	p("Anything else?");
	R("No, this is enough.");
	R("Welcome to my world, buddy.");
	Play_3();
}

function tw_play(){
	p("Anything else?");
	R("No, this is enough.");

	if(!$.asked_about){
		R("Please be curious as to why this game was made.");
		p("Hmm.");
		if(!$.asked_credits){
			R("And who I am.");
			p("Hmmmmmmm!");
		}
	}else	if(!$.asked_credits){
		R("Why aren’t you curious as to who I am?");
		p("Hmm.");
	}
	R("Oh, before we start,");
	R("I have to tell you that I did not make this game to make the players miserable.");
	p("Huh?");
	R("But I think that some people might find it difficult to play this game.");
	R("If you feel uneasy playing this game, I recommend that you stop playing for a moment and put it down.");
	Wait(1000);
	p("Why are you making me scared all of a sudden?");
	R("Now let’s go back to <i>that day</i>.");
	p("that day?");
	R("This game will be filled mostly with the words");
	R("my friend actually heard during work after graduating from high school.");
	R("Also the choices might be the truth or might be lies.");
	R("Even though one might be a lie to my friend,");
	R("one might be the truth to somebody.");
	p("It’s quite serious and complicated...");
	R("That’s what life is all about.");
	Choose({
		"Truths and lies are mixed in this game?": function(message){
			p("Do you mean that there are truths and lies mixed in this game?");
			R("As I said in the beginning, yes.");
			R("It’s already been years since this has happened.");
			R("So naturally, she cannot recall all of the conversations word by word.");
			p("You are just copying the original game, aren’t you?");
			R("Shhh!");
			tw_play_2();
		},
		"This will have a depressing ending.": function(message){
			p("I have a feeling that this will have a depressing ending...");
			R("It’s not exactly like that.");
			p("Or is it ending in a pool of blood?");
			R("That’s a crime.");
			p("I’m just saying...");
			tw_play_2();
		},
		"So what is the meaning of all this?": function(message){
			p(message);
			p("Didn’t you say that all is in the past?");
			R("Well, but all of these have deep meanings for me.");
			if($.asked_credits){
				R("As I said before,");
				R("I want more people to know these stories.");
			}
			R("You will know what I am saying");
			R("by the time you finish this game.");
			p("Oh...?");
			tw_play_2();
		}
	});
}

function tw_play_2(){

	Wait(1000);
	queue(ClearDialogue,0);
	Wait(1000);

	R("This game doesn’t have correct answers.");
	R("Let me just remind you that choices come with responsibilities.");
	p("So the decisions are important.");
	R("And please remember that this is only a person’s own experience,");
	R("which does not represent everyone’s story.");
	R("Are you ready?");
	Wait(1000);


	Clear();
	play_tw();
}

function Play_3(){

	if(!$.asked_about){
		R("Please be curious as to why this game was made.");
		p("Hmm.");
		if(!$.asked_credits){
			R("And who I am.");
			p("Hmmmmmmm!");
		}
	}else	if(!$.asked_credits){
		R("Why aren’t you curious as to who I am?");
		p("Hmm.");
	}

	R("Oh, before we start,");
	R("I have to tell you that I did not make this game to make the players miserable.");
	p("Huh?");
	R("But I think that some people might find it difficult to play this game.");
	R("If you feel uneasy playing this game, I recommend that you stop playing for a moment and put it down.");
	Wait(1000);
	p("Why are you making me scared all of a sudden?");
	R("Now let’s go back to <i>that day</i>.");
	p("that day?");
	R("This game will be filled mostly with the words I actually heard during high school.");
	R("Also the words that I should have said, and the words I shouldn’t have have said.");
	R("But what can I do now?");
	R("It’s all in the past.");

	Choose({
		"Truths and lies are mixed in this game?": function(message){
			p("Do you mean that there are truths and lies mixed in this game?");
			R("As I said in the beginning, yes.");
			R("It’s already been years since this has happened.");
			R("So naturally, I cannot recall all of the conversations word by word.");
			p("You are just copying the original game, aren’t you?");
			R("Shhh!");
			main_last();
		},
		"This will have a depressing ending.": function(message){
			p("I have a feeling that this will have a depressing ending...");
			R("It’s not exactly like that.");
			p("Or is it ending in a pool of blood?");
			R("That’s a crime.");
			p("I’m just saying...");
			main_last();
		},
		"So what is the meaning of all this?": function(message){
			p(message);
			p("Didn’t you say that all is in the past?");
			R("Well, but all of these have deep meanings for me.");
			if($.asked_credits){
				R("As I said before,");
				R("I want more people to know these stories.");
			}
			R("You will know what I am saying");
			R("by the time you finish this game.");
			p("Oh...?");
			main_last();
		}
	});
}


function main_last(){

	Wait(1000);
	queue(ClearDialogue,0);

	Show("me", "me_write");
	PlaySound("sfx", "pencil");
	Wait(2000);
	Show("me", "me");

	R("This game doesn’t have correct answers.");
	R("Let me just remind you that choices come with responsibilities.");
	p("So the decisions are important.");
	R("And please remember that this is only a person’s own experience,");
	R("which does not represent everyone’s story.");
	R("Are you ready?");
	Wait(1000);

	Clear();
	Start_school();

}

function Credits(message){

	$.asked_credits = true;

	if($.asked_about){
		p(message);
	}else{
		pencil(message);
	}

	R("Well, I will introduce myself first.");
	R("Hello, I am Raul.");
	R("As you can see I am a chemist, so my programming is not the best. Please understand.");
	Wait(1000);
	p("How did you make a game?");
	R("Passion!");
	p("Yeah, sure...");
	Wait(1000);
	R("This game was based off of Nicky Case’s Coming Out Simulator 2014.");
	Wait(1000);
	R("If you have anything to say after playing this game-");
	R("or not, I recommend that you play Nicky’s game.");
	R("That one is more fun.");
	p("The originals are always better than the sequels.");


	if($.asked_about){
		Choose({
			"Let’s start the game!": Play
		});
	}else{
		Choose({
			"Anyhow, let’s start the game.": Play,
			"Why did you make this game? (Game credit)": function(){
				About("Why did you make this game?");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	if($.asked_credits){
		p(message);
		R("I hope more people would know about these stories.");
		R("The story of my life, the story of my friend...");
		p("Your friend’s story?");
		R("Yes, it is mostly my own experience, but I had to include my friends’ as well.");
		R("I can only tell you one story without my friend’s experiences.");
		p("Do I get to choose a character?");
		R("Haha, I can’t make such a complicated game.");

		Choose({
			"Alright, let’s get started.": Play
		});

	}else{
		pencil(message);
		R("I hope more people would know about these stories.");
		R("The story of my life, the story of my friend...");
		p("Your friend’s story?");
		R("Yes, it is mostly my own experience, but I had to include my friends’ as well.");
		R("I can only tell you one story without my friend’s experiences.");
		p("Do I get to choose a character?");
		R("Haha, I can’t make such a complicated game.");
		Choose({
			"Alright, let’s get started": Play,
			"Who are you? (Credit)": function(){
				Credits("Who are you?");
			}
		});
	}
}
