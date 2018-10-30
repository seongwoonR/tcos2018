
function Start_Outro(){
	queue(ClearScene, 0);

	Show("background", "main");
	Show("table", "lab_table");
	Show("me", "me");
	PlaySound("bg", "laboratory", {loop : -1, volume : 0.5});

	R("Don’t worry, player.");
	R("I am still alive.");
	R("making a game like this.");

	Choose(
		{
			"What the...": function(message){
				$.wow = true
				p(message);
				p("Did you hear all of these words in real life?");
				R("Yep.");
				R("But it is too early to be surprised.");
				R("There are a lot more people who have experienced, and are still dealing with even worse cases.");
				p("That’s almost scary...");
				outro_m();
			},
			"What about your parents?": function(message){
				$.parents = true
				p(message);
				R("I am still persuading them.");
				p("As you said with your friend, don’t you have to change your legal sex?");
				R("Yes, I have to request that to the court...");
				R("we need an agreement from our parents.");
				p("Even when you are legally adult?");
				R("Even when I am an adult.");
				outro_m();
			},
			"It can’t be true, right?": function(message){
				$.lie = true
				p(message);
				p("It’s sounds like a soap opera.");
				R(". . .");
				R("Well...");
				R("I hope this is just a bad dream.");
				p("What was the truth?");
				R("All the things are true, and all the things are false.");
				p("...?");
				p("Excuse me?");
				p("This isn’t a philosophical game?");
				R("I’ve heard all of the hurtful things in this game, but not all in a same day.");
				R("But then, I was clueless and was not immune to transphobic words");
				R("Every word had me dumbfounded.");
				R("But now I can refute them like this!");
				p("What a big improvement.");
				R("Of course!");
				outro_m();
			}
		});
	}

	function outro_m(){
		Wait(500);
		if($.telling_hard){
			R("I came out to them, but my family did not come together...");
			R("I just want everyone to be happy...");
			R("And this is my dream. How ridiculous is it?");
		}else if($.silent){
			R("I was always afraid of my father.");
			R("That’s why...");
			R("I couldn’t talk to him.");
			R("However, they never know anything if I don’t tell them.");
			R("They just think whatever they want.");
		}
		if($.near_girl && $.under_boy){
			R("I have to wonder around to find a restroom...");
			p("Still...?");
			R("I go to men’s restroom, but I prefer a less crowded one.");
		}
		Wait(1300);
		R("There’s a word called misgendering.");
		if(!$.parents){
			Choose({
				"Wait, I still have things to ask!": asking_left,
				"Misgendering?": outro_2
			});
		}else{
			outro_2();
		}
	}

	function asking_left(message){
		$.asking = true
		p(message);
		R("Huh?");
		if($.lie){
			p("What about your parents?");
			R("I am still persuading them.");
			p("As you said with your friend, don’t you have to change your legal sex?");
			R("Yes, I have to request that to the court...");
			R("we need an agreement from our parents.");
			p("Even when you are legally adult?");
			R("Even when I am an adult.");
			outro_2();
		}

		if($.wow){
			Choose({
				"What about your parents?": function(message){
					$.parents = true
					p(message);
					R("I am still persuading them.");
					p("As you said with your friend, don’t you have to change your legal sex?");
					R("Yes, I have to request that to the court...");
					R("we need an agreement from our parents.");
					p("Even when you are legally adult?");
					R("Even when I am an adult.");
					p(". . .");
					Wait(1000);
					R("Well, let’s back on the track...");
					R("There’s a word called misgendering.");
					outro_2();
				},
				"It can’t be true, right?": function(message){
					$.lie = true
					p(message);
					p("It’s sounds like a soap opera.");
					R(". . .");
					R("Well...");
					R("I hope this is just a bad dream.");
					p("What was the truth?");
					R("All the things are true, and all the things are false.");
					p("...?");
					p("Excuse me?");
					p("This isn’t a philosophical game?");
					R("I’ve heard all of the hurtful things in this game, but not all in a same day.");
					R("But then, I was clueless and was not immune to transphobic words");
					R("Every word had me dumbfounded.");
					R("But now I can refute them like this!");
					p("What a big improvement.");
					R("Of course!");
					R("And the friend in the game was not real.");
					R("I didn’t have friend like him when I was in high school.");
					p("... You got me.");
					R("If there was it must have been comforting.");
					Wait(1000);
					R("Well, let’s back on the track...");
					R("There’s a word called misgendering.");
					outro_2();
				}
			});
		}
	}

	function outro_2(){
		p("misgendering?");
		R("What do you think it means?");
		Choose({
			"Recognizing my gender different from the assigned one?": function(message){
				p("Recognizing my gender as different from the assigned one?");
				R("Well, guess again");
				R("It means to refer to a person using the pronouns that express the wrong gender.");
				R("The one you were suffering from in the game.");
				p("Oh, my...those made me feel like shit.");
				R("Those are an integrating part of transgenders’ lives.");
				outro_3();
			},
			"that express the wrong gender?": function(message){
				p("To refer to a person using terms that express the wrong gender?");
				R("Exactly!");
				p("Aha.");
				R("That is the life of transgenders who didn’t come out of closet.");
				p("That must be pretty damn hard.");
				outro_3();
			},
			"mis...gender? miss gender-ing?": function(message){
				p(message);
				R(". . .");
				p(". . .");
				R("[looks at you like you are pathetic]");
				p("Ah, I was only joking!");
				R("misgendering");
				R("means to refer to a person using terms that express the wrong gender.");
				R("The thing that you have suffered through in the game.");
				p("Oh, my...those made me feel like shit.");
				R("Those are an integrating part of transgenders’ lives.");
				outro_3();
			}
		});
	}

	function outro_3(){

		Wait(1000);
		queue(ClearDialogue,0);
		R("Hey Player,");
		R("If there is a correct answer to this story, what do you think it is?");
		Choose({
			"Saying what  I want to say?": function(message){
				p(message);
				p("They'll never know if I don’t say anything.");
				p("Just spill out everything.");
				if($.silent){
					R("Didn't you say nothing to dad?");
					p("Shh.....");
					if($.evasion){
						p("I've tried to but he escaped!");
					}
				}
				R("Oneday, we will be able to tell our stories with dignity");
				R("and it won’t come back to bite us in the head, right?");
				R("I hope people will be ashamed of being transphobic.");
				outro_4();
			},
			"The things you said in real life?": function(message){
				p(message);
				R("As you said...");
				R("If there is only one answer");
				R("It will be the ones I actually said.");
				p("Like you said, it’s based on your experience.");
				R("You’re right.");
				outro_4();
			},
			"The ones I chose to say!": function(messsage){
				p("Whatever I chose is the answer!");
				R("Certainly.");
				R("This is just a game.");
				R("We leave the choice to the player.");
				R("We have to pave our own ways of life.");
				outro_4();
			}
		})
	}

	function outro_4(){
		Wait(1000);
		Show("me", "me_write");
		PlaySound("sfx", "pencil");
		Wait(2000);
		Show("me", "me");

		R("Even if I could go back");
		p("You wouldn't change a thing?");
		R("I wouldn’t change a th--");
		R("Yep, that's it.");

		if(!$.silent){
			Show("me", "me_good");
			Wait(1000);
			R("I was scared.");
			R("It left me many scares,");
			R("and nothing... has changed,");
			R("but I wouldn’t have been able to say it if I didn’t say it that day.");
			if($.smash){
				R("But anyway,");
				R("It's quite painful being against my personality.");
				p("It sure is...");
			}
		} else if($.silent){
			Show("me", "me_bad");
			Wait(1000);
			R("Anyway, I can’t leave home and there’s nothing I could do");
			R("It would be better to come out when I am prepared.");
			R("When I am independent--especially financially with my own place");
		}

		p("Isn’t there truth, half-truth and lies?");
		R("You must be talking about the ending of coming out simulator 2014, right?");
		R("Sadly, no.");
		R("It doesn’t matter.");
		R("Because there are lots of people who support me.");
		p("Did you have them in high school?");
		R("Shh");
		Wait(1000);
		R("I’m so glad to see transgender issues are raised at pride parades");
		R("When someone says queer, people often think of homosexuals.");
		R("I hope less-known genders and sexualities would get more attention.");
		Wait(800);
		if(!$.silent){
			Show("me","me_bye");
		}
		R("Thanks for joining in on the journey, player.");
		Wait(800);
		R("See you next time, if there’s a chance.");
		Wait(500);
		R("Until then,");
		R("take care.");
		finale();
	}

	function finale(){
		queue(ClearDialogue, 0);
		Show("me", null);
		Choose({
			"replay?": replay
		});
	}

	function replay(message){
		p("Replay?");
		Wait(800);
		R("There are no replays in real life.");
		R("And you already know that.");
		Wait(800);
		queue(function(){
			document.getElementById("game").setAttribute("screen", "blank");
		}, 1000);

		queue(function(){
			document.getElementById("game").setAttribute("screen", "credits");
		}, 0);
	}
