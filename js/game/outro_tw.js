
function Start_Outro_tw(){

	/////// SET UP SCENE ////////

	Show("background","bedroom_1");
	Show("d-d","outro_tw");

	/////////////////////////////
	
	//pretend R is DiDi
	R("And I became twenty-five years old! (Ta-da!)");
	p("Oh my!");
	R("I’ve saved up enough for the surgery as well!");
	p("Wow!");
	R("Maybe the surgery is over by the time this game is released!");
	Choose({
		"Wow, this escalated quickly!?": function(message){
			p(message);
			Outro_1();
		},
		"Congratulations!": function(message){
			p(message);
			R("Thanks a lot!!");
			Outro_1();
		},
		"Wowx2": function(message){
			p(message);
			Outro_1();
		}
	});
}

function Outro_1(){
	if($.result==2){
		p("Didn’t you say that you don’t want a surgery?");
		R("You never know what will happen in your life.");
	}

	if($.response==1){
		p("....Are you okay...?");
		p("She is your family, though...");
		R("It wasn’t an unexpected result.");
	}else if($.response==2){
		p("I am glad that things turned out well.");
		p("I was worried...");
		p("because I thought every choice was going to lead to a bad ending.");
		R("I wanted to tell you that things do work out in some cases.");
		R("She didn’t understand it fully...");
		R("but still, I am thankful.");
	}

	R("You know,");
	R("It might sound ridiculous but...");
	R("If I could go back and relive all those moment,");
	p("You will not change your decision?");
	R("I will not change--");
	R("Yeah, exactly.");
	Wait(800);

	switch($.result){
		case 1:
		R("Talking back to my mom,");
		R("and leaving the house for talking to her like that..."); break;
		case 2:
		R("Talking back to my mom,");
		R("and keeping my mouth shut.");
		p("Shutting your mouth means that you have shut your mind..."); break;
		case 3:
		R("Telling my mom that I have something to say.");
		R("And that moment...");
		R("when she had the response I wished for.");
		p("It was so moving."); break;
	}

	if($.Search>1){
		R("As you searched many things on the Internet,");
		R("There are a lot of people online who misunderstand and insult transgenders.");
		p("It must feel like you being denied of your existence...");
		R("Exactly. In fact, I get so stressed out every time I see such things...");
		R("I even thought of suicide and tried to do it when it was too hard to endure.");
	}

	Wait(800);
	R("It doesn’t seem like anything,");
	R("I wouldn’t be here...");
	R("without people like my friend who cares for me and support me.");

	if($.notcool){
		p("I thought you two were fighting a lot...");
	}

	R("From now on,");
	R("It’ll be more difficult to live my life...");
	Wait(800);
	R("But I will survive...");
	Wait(800);
	R("survive at all cost");
	R("I want to say that we’re not wrong.");
	R("We are not wrong.");

	if($.response==1){
		R("We are just people who want to be less miserable.");
	}else if($.response==2){
		R("We are just people who want a better life.");
	}

	qnasection();
}
//I erased the qna choices cuz it is far focused on the situation in Korea.
function qnasection(){
	Wait(1000);
	R("My story ends here.");
	R("Is there any questions?");
	p("Do you ever regret it?");

	R("I wonder what you’re asking exactly...");
	p("Didn’t you make that words..?");
	R("What?");
	R("identifying myself as transgender, starting hormonal therapy, and getting surgeries?");
	R("Coming out to my mom?");
	R("Briefly speaking, I don’t regret neither of them.");
	R("As I said before,");
	p("You will not change your decision?");
	R("I will not change--");
	R("Yeah, that.");
	R("I am still faced with difficulties,");
	R("but at least I can say confidently that it’s better than before.");
	R("Of course, It’s not that I am not terribly happy right now...");
	R("It was just too hard before all this...");

	R("Anyways, thanks for running along with me all the way here!");
	R("I wish you all the best.");
	Wait(1000);
	Show("nurse","nurse");
	f("D-D, let my replace your IV.");
	Wait(1500);
	finale_tw();
}

function finale_tw(){
	queue(ClearDialogue,0);
	Show("d-d",null);
	Show("nurse",null);

	Choose({
		"replay?": replay_2
	});
}

function replay_2(message){
	p("replay?");
	Wait(800);
	R("Real life has no replays.");
	R("Don’t you know that already?");
	Wait(800);
	queue(function(){
		document.getElementById("game").setAttribute("screen", "blank");
	}, 1000);
	queue(function(){
		document.getElementById("game").setAttribute("screen", "credits");
	}, 0);
}
