
function Start_friend_2(){

	/////// SET UP SCENE ////////

	Show("background","bedroom_3");
	Show("friend","tw_friend");
	PlaySound("bg","bedroom_1",{loop:-1});

	////////////////////////////
	
	Wait(1000);
	PlaySound("sfx","cellphone");
	Wait(1500);
	f("Yooseong! How’d coming out go?");

	if($.response==1){
		y("Just like you said. She didn’t know about it at all as I expected...");
		f("...I am sorry to hear that.");
	}else if($.response==2){
		y("Hmm... As you said.");
		y("She already knew.");
		f("I see...");
	}

	f("What did she say?");
	f("Did everything go well?");

	if($.result==1){
		y("...I...");
		y("think I have to leave the house.");
		f("What? Oh, my... Are you okay?");
		y("...Nope, I don’t think I’m okay.");
		friend_2_mid();
	}else if($.result==2){
		y("We had a big fight. I don’t think it will ever end...");
		y("No matter how hard I try, she won’t understand.");
		f("What? Oh, my... Are you okay?");
		y("...I’ll just leave the house.");
		y("There’s no other choice.");
		friend_2_mid();
	}else if($.result==3){
		y("It seems like... she already searched it.");
		f("What? Oh, my. Are you okay?");
		y("Well, yeah... but I think a lot of things will change from now.");
		y("I don’t know if I this was a good choice.");
		y("Will things be okay?");
		f("...");
		y("...");
		f("Anyway...What you were worried about didn’t happen, so that’s good.");
		f("It will be fine, for sure.");
		y("Thanks.");
		y("Um... Sorry, I am a little relieved. I am gonna go to sleep now.");
		end_friend_2();
	}
}
function friend_2_mid(){
	f("I feel like I’ve pushed you to do this...");
	Choose({
		"Don’t mind it.": function(message){
			$.Dontbe = true;
			y(message);
			y("It’s no use crying over spilt milk...");
			y("and it was going to happen someday.");
			f("I just thought about it too vaguely...");
			keep_talk();
		},
		"......": function(message){
			y(message);
			y("*sigh*");
			f("Sorry...Even if I had a silver tongue, I wouldn’t have anything to say...");
			keep_talk();
		},
		"It’s not your fault.": function(message){
			y(message);
			y("Maybe It’s my fault to be born this way...");
			f("Don’t think like that...");
			f("I... want you to be happy.");
			keep_talk();
		}
	});
}
function keep_talk(){
	y("I don’t know if I made a good decision.");
	y("Will things be okay?");
	f("...");
	y(".......");
	f("I’m so sorry...");
	y("It’s okay.");
	if($.Dontbe){
		y("You don’t need to feel sorry.");
		y("Do you know how many times you said sorry to me today?");
		f("I am sorry about that too...");
	}
	y("I think I’m a little relieved...");
	y("I am going to go to sleep.");
	f("Good night.")
	end_friend_2();
}

function end_friend_2(){
	Clear();
	Start_Outro_tw();
}
