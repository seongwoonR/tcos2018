//친구랑 같이 집에 가는중~
//플레이어가 트랜스젠더라는 단어를 직접적으로 듣는 부분
//플레이어에게 커밍아웃하라고 이야기
//친구는 '답'에 대해 언급할것임


function Start_Going_home(){

	/////// SET UP SCENE ////////

	Show("background","bedroom_2");
	Show("building","building");
	Show("friend","friend");
	PlaySound("bg","city",{loop:-1, volume:0.3});

	////////////////////////////

	a("<b>~On the way home~</b>");
	Wait(1000);
	f("Hey, Yooseung.");
	f("Remember how I came out on Friday?");
	f("My mom thought about of over the weekend");
	f("and decided that she will accompany me to the psychiatrist’s office!");
	y("Oh, really?");
	Wait(1000);
	y("What else did she say?");
	f("'I’m not going to live your life for you, so do what you want'");
	f("was what she said.");
	f("Isn’t it great!");

	Choose({
		"I am so fucking jealous.": function(message){
			y(message);
			y("Does she want to adopt a son by any chance?");
			f("What?!");
			f("She’s my mother!");
			going_1();
		},
		"That must be fucking amazing.": function(message){
			y(message);
			y("Does she want to adopt a son by any chance?");
			f("What?!");
			f("She’s my mother!");
			going_1();
		},
		"What a relief.": function(message){
			y(message);
			y("You were awfully worried.");
			f("I know, man.");
			going_1();
		}
	});
}
function going_1(){
	f("I will start a hormonal therapy as soon as I get a diagnosis.");
	f("I want to get an operation and legally change my gender.");
	f("I also want to grow my hair out when I get my gender corrected.");
	f("Because right now, everyone would say ‘you ARE still a girl’ if I grow my hair out.");
	y("Ew, forget that.");
	f("Without hormonal therapy and medical transition,");
	f("people consider me as a female when I am just being myself.");
	f("That’s a huge stressor.");
	y("I had some hard time because of my classmates as well.");
	y("They think I will grow my hair out and put makeups on.");
	f("They say shit because they don’t know the story.");
	f("So what did you say to that?");

	Choose({
		"I just ignored it.": ignore,
		"I cussed them out real good.": ignore_2,
		"I came out in the heat of the moment.": ignore_3
	});
}
function ignore(message){
	y(message);
	y("What can I say?");
	y("I was trying to let it go.");
	f("Yeah...");
	f("Saying more will only bring more pain.");
	f("They won’t really listen either.");

	going_2();
}

function ignore_2(message){
	y(message);
	f("Wow...");
	y("Silently...");
	f("Pft");
	y("Don’t laugh.");
	going_2();
}

function ignore_3(message){
	y(message);
	f("Psshh.");
	f("Riiight.");
	f("Everything other than school work is highly entertaining to them.");
	f("If they know that you are queer, everyone will be watching you like a monkey.");
	y("Urgh...I flinch just thinking about it.");
	going_2();
}

function going_2(){
	y("If they are judging the book by its cover...");
	y("Thinking of me as a female must be harder");
	y("than to see me as a male...");
	f("They think they need to treat people differently based on gender.");
	f("So it must be confusing for them to know how to treat a transgender.");
	f("Even when they could consider everyone as just another <b>'human being'</b>.");
	y("Exactly.");
	Wait(1000);
	f("If you don’t start preparing now, you will have to go to college as a woman...");
	f("You might even end up applying to a woman’s college-");
	y("Noooooooooo!!")
	y("Then I have to write that down when I apply for a job!");
	y("Having to graduate from all-girls middle school is more than enough!");
	f("A man who graduated from women’s college-");
	y("Don’t even say it.");
	Wait(1000);
	f("Umm..");
	f("Why don’t you tell your parents?");
	f("Who knows? They might understand.");

	Choose({
		"Impossible.": function(message){
			y(message);
			y("It might be faster to find an understanding friend.");
			f("You never know until you try it!");
			Waiting_End();
		},
		"I hope so.": function(message){
			y(message);
			y("If that was the case, I would be looking for a right doctor as well.");
			f("Have some faith.");
			Waiting_End();
		},
		"Umm...": function(message){
			y(message);
			f("Seeing that you are thinking about it... you kind of want to, eh?");
			f("Hey, cheer up.");
			Waiting_End();
		}
	});
}

function Waiting_End(){
	Wait(1000);
	y("Um...");
	y("I think my coming out will be a failure...");
	f("Coming outs cannot be failed!");
	f("Letting someone know of your existence.");
	f("And whoever you came out to gaining knowledge of it.");
	f("That means it succeeded. How they absorb it is their work, not yours.");

	Choose({
		"Is that so...?": accept,
		"They are my family after all...": concern,
		"It’s easier said than done.":anger
	});
}

function accept(message){
	y(message);
	f("Do you think there’s a right answer to self-introduction?");
	y("I don’t think so...");
	f("Then why are you so worried?");
	f("I’ve got to go now. Text me later!");
	going_home_End();
}

function concern(message){
	y(message);
	y("they must be worried...");
	f("You are also a child of your parents.");
	f("It’s a way for their child--you--to be happier. Why would they be against it?");
	y("Hmm...");
	f("I’ve got to go now. Text me later!");
	going_home_End();
}

function anger(message){
	Show("arm","city_arm");
	y(message);
	y("You can say that because your mother have accepted who you are.");
	f("Whoa, relax.");
	Show("arm",null);
	f("You haven’t tried it yet, have you?");
	f("I was afraid of it before I tried it.");
	f("Have some faith.");
	y("...I’ll try.");
	f("Text me later!");
	f("Grab some good news!");
	going_home_End();
}

function going_home_End(){
	Show("friend",null);
	Show("raul","gohome_alone");
	queue(ClearDialogue,0);
	Wait(1000);
	y("Should I tell my mom?");
	Wait(500);
	y("I bet she would be against it...");
	Wait(500);
	y("How do I tell my dad?");
	Wait(1000);
	Clear();
	Start_Dinner_2();
}
