
function Start_Dinner_3(){
	Wait(1000);
	d("[Door opening]");
	y("Hi, dad.");
	d("Hello-");
	Wait(1000);
	Show("dad","dad_come");
	Show("table","dinner_table_3");

	d("How was your school today, princess?");

	Choose({
		"Same old, same old.": sameold,
		"Mom has something to tell you.": mom_coming,
		"Seriously! Stop calling me F- princess.": strong_answer
	});
}

function sameold(message){
	y(message);

	d("How’s studying?");
	y("It’s going well.");
	d("Going well?");
	d("Don't you just bringing your bag to school?");
	y("...Of course not.");
	y("You don't know me well, do you?");
	d("Then, there’s no need to be concerned?");

	Choose({
		"Yeeeeaaaaaah": function(message){
			y(message);
			y("Since when did you concern about me?");
			m("Yooseong.");
			sameold_2();
		},
		"Other than that, I want to talk something.": function(message){
			y(message);
			asking_about_trans();
		},
		"I think you should take care of mom first.": mom_coming
	});
}

function strong_answer(message){
	y(message);
	d("Yooseong!");
	m("How dare you talk to your father like that!");
	y("I fucking hate hearing that word, princess,!");
	y("and being called that!");
	y("I told you not to call me that.");
	d("wha-");
	d("It’s just because you are lovely.");
	y("Don’t try to let it slide like that again.");
	d("Seong, did anything bad happen today?");

	Choose({
		"...Nope.": function(message){
			y(message);
			y("I don't want you to call me like that word.");
			d("Okay, I see.");

			sameold_2();
		},
		"It’s because of the conversation I had with mom just now.": mom_coming,
		"I guess I’m a little stressed out.": function(message){
			y("It’s just...I guess I’m a little stressed out");
			d("Careful what you say. Stress is not an excuse.");
			y("...Yes, dad.");

			sameold_2();
		}
	});
}

function sameold_2(){

	$.harmony = true;
	Wait(500);
	d("Okay. Tell me if anything bad happens.");
	d("and don’t take them out on your mother.");
	d("It’s hard to find a family as harmonious as ours.");
	y(". . .");

	Choose({
		"Yeah, our family is SO close.": function(message){
			$.sarcasm = true;
			y(message);
			y("No one screams.");
			d("What’s wrong with you today?");
			y("Others don’t know about the family affairs.");
			y("And you don’t know well about me, dad.");
			y("You always ask without really wanting to know.");
			y("You keep asking the same question because you don’t remember the answer.");
			m("Why do you talk like that?");
			Wait(800);
			y("Did you know that I don’t like to be called as ‘daughter’?");
			d("What?");
			y("I don't want to be treated as woman.");
			y("I am sick of being treated as woman!");
			d("I’ve never thought you as a boy.");
			y("See, you have no interest in who I am.");
			coming_2();
		},
		"(silence)": function(){
			$.silent = true;
			y(". . .");
			y("Is so...?");
			sameold_3();
		},
		"It’s a big relief that our family seems happy...": function(message){
			y(message);
			$.silent = true;
			y("You must be proud.");
			d("Isn’t it the father’s job to make a family happy.");
			d("Haha-");
			m("...");
			y("...");
			sameold_3();
		}
	});
}

function asking_about_trans(){
	$.ask_about_trans = true;
	y("Dad");
	y("What do you think about transgenders?");
	d("It’s a silly question.");
	d("We saw a transgender show in Thailand.");
	d("Don’t you remember?");
	y("Yes, What do you think of them?");
	d("They live their lives in their own way, working hard.");

	Choose({
		"Well...I see...": function(message){
			y(message);
			d("They live their own lives, working hard.");
			d("and you should live your own life, studying hard.");
			d("I am also working hard, doing my job.");
			y("Yeah.");
			sameold_3();
		},
		"I am somehow like them.": function(message){
			y(message);
			y("I am a transgender...");
			d("What?");
			y("And I prefer being referred to as a man.");
			d("What are you talking about?");
			d("I’ve never thought you as a boy.");
			coming_2();
		},
		"How would you react if there’s someone like them?": function(message){
			y(message);
			y("I mean...around you.");
			d("Do you have a queer friend?");
			d("Well, they will live their own life.");
			d("I’ve never thought about that before.");
			y("What if I am a transgender?");
			d("That’s a worthless thought.");
			d("You should focus on your studies.");
			think_of_it();
		}
	});
}

function think_of_it(){
	y("...");
	d("...");
	m("...");
	Choose({
		"Is it worthless to figure out who I am?":function(message){
			y(message);
			y("I am the queer one, not my friend.");
			y("Actually I also have queer friends!");
			y("That’s not a worthless thought. I am a transgender.");
			d("What on earth are you talking about?");
			y("I prefer being treated as a man.");
			y("Like the people we saw in Thailand prefer being called a woman,");
			y("I prefer being called a man");
			d("I’ve... never thought of you as a boy.");
			y("That’s just you.");
			coming_2();
		},
		"Yeah... I see.": function(message){
			y(message);
			y("I will focus on studying math and science.");
			m("Don’t give too much pressure to her.");
			d("She’s being absurd.");
			y(". . .");
			sameold_3();
		},
		"It’s quite... important....": function(message){
			y(message);
			$.evasion = true;
			y("to me...");
			y("Why don’t you think about that now?");
			d("I don’t want to think about that right now.");
			d("Let’s talk about it later.");
			Wait(800);
			sameold_3();
		}
	});
}

function sameold_3(){
	d("Well,");
	d("It’s late. Let’s go to sleep.");
	if($.ask_about_trans){
		d("Don't think about that ridiculous thing.");
	}
	tomyroom();
}

function mom_coming(message){
	y(message);
	d("Your mom?");
	d("What is it, hun?");
	m("Nothing.");
	d("Did something happen before I came?");
	m("No.");
	y(". . .");

	Choose({
		"I am a transgender.": function(message){
			y("I am a tr--");
			m("She's feeling tired today.");
			y("...");
			d("Yeah, Sometimes, it is.");
			y(". . .");
			y("Dad, It's a bit of a random question,");
			asking_about_trans();
		},
		"We just talked about it.": function(message){
			$.tell = true;
			y(message);
			d("Talked about what?");
			m("Do we have to talk about that?");
			y("I... am transgender.");
			coming_1();
		},
		"(Silence)": silence
	});
}

function silence(){
	$.harmony = true;
	Wait(500);
	y(". . .");
	Wait(500);
	m(". . .");
	Wait(500);
	d(". . .");
	y(". . .");
	d("What, Really?");
	d("I thought there was something interesting.");
	d("It’s hard to find a family as harmonious as ours.");
	d("My friend was jealous about it.");
	y(". . .");
	d("well,")
	d("It’s late. Let’s go to bed.");
	Choose({
		"(I want to stop talking.)": function(message){

			$.silent = true;

			y("(I don’t want to talk to them...)");
			y("(I’m totally exhausted...)");
			Wait(1000);
			tomyroom();
		},
		"Wait.": function(message){
			y("Wait, dad.");
			d("Hmm?");
			y("I have a question.");
			asking_about_trans();
		}
	});
}

function coming_1(message){
	if(!$.tell){
		y(message);
	}
	d("What?");
	y("I feel more comfortable being seen as a man then female.");
	y("I am sick of being treated as woman.");
	d("I’ve never thought of you as a boy");
	coming_2();
}

function coming_2(){
	d("Why do you think yourself as a man?");
	d("Can you prove to me that you are a man?");

	$.telling_hard = true;

	Choose({
		"How can I possibly prove it!": function(message){
			y(message);
			y("Do you think gender can be proved clearly as Pythagoras theor-");
			d("There must be a reason that you think that way!");
			d("Also,");
			d("Just because you don’t want to be a woman doesn’t mean you’re not a woman!");
			y("What differentiates a man and a woman?");
			y("What if someone loses his genital?");
			y("What if someone doesn’t produce sex hormones?");
			y("Do people with XXY chromosomes have no gender?");
			y("Nothing is exactly black and white!");
			Wait(1000);
			explaining_it();
		},
		"Can you prove that you are a man?": function(message){
			y(message);
			y("Stop talking right now if you are going to say that you were a man since birth.");
			y("Don’t even start talking about chromosomes!");
			y("No one has ever mistook your gender!");
			y("And you would never know what a privilege that is!");
			d("Yooseong!!!");
			explaining_it();
		},
		"I am more comfortable being seen as a man!": function(message){
			y(message);
			y("I am more comfortable with other people thinking of me as a man...");
			y("I prefer being treated as a man.");
			y("You would also say no if someone asks you 'are you a woman?'");
			y("Ever since I was born");
			y("I never considered myself as a woman.");
			explaining_it();
		}
	});
}

function explaining_it(){
	y("I hate that my breasts are protruding-");
	d("Anyway, body is just a flesh.");
	d("Mind is what’s important!");
	if($.ask_about_trans){
		y("You said awhile ago that transgenders in thailand live their own way!");
		d("That is the story about <i>that</i> people.");
		d("It's different if the story is about people around me!");
	}
	Show("mom","mom_grab");
	m("Honey, please...");
	d("Isn’t it?");
	Show("mom","mom_sitting");
	Wait(500);
	d("Do you think you could assign your gender");
	y("It was a doctor");
	y("Who assigned my gender!");
	y("It would be better if i could assign it!");
	d("Don’t talk back to me!");
	if($.sarcasm){
		d("You are being sarcastic!");
	}
	d("Just live the way you were told to, regardless of whether you like it!");
	Choose({
		"I don't wanted to be born in the first place!": hard_answer,
		"So I want to change by getting medical treatments.": function(message){
			$.tell_1 = true;
			y(message);
			explain_answer();
		},
		"It's my own body!": function(){
			y("Why can’t I do what I want to do with my own body?");
			explain_answer();
		}
	});
}

function hard_answer(message){
	y("It’s not like I wanted to be born in the first place!");
	Wait(300);
	$.smash = true;
	//throwing dad got angry
	Show("dad","dad_anger");
	PlaySound("sfx","dinner_table");
	Show("me","me_surprise");
	d(". . .");
	d("Say that again.");
	d("How do you know whether you wanted to be born or whether I wanted you!");
	d("I had no idea that the child will be like you!");
	d("I’m against this whole trans madness!");
	y(". . .");
	d(". . .");
	y("Father...");
	y("Do you like me because I am your child? Or because I am your daughter?");
	d("That’s...");
	d("I need more time to think about that.");
	d("Just know that if you get the surgery, I will disown you.");
	tomyroom();
}

function explain_answer(){
	d("So..");
	d("You want to get the surgery?");
	y("When I grow up.");
	d("How dare you...");
	d("If you do that thing... I will kick you out!");
	y("Out of what?");
	d("Kick you out of the family circle forever!");
	y("Father...");
	y("Do you like me because I am your child? Or because I am your daughter?");
	d("That’s...");
	d("I need more time to think about that.");
	d("Just know that if you get the surgery, I will disown you.");
	tomyroom();

}


function tomyroom(){
	Wait(1500);
	Clear();
	Start_my_room();
}
