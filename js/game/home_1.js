
function Start_home_1(){
	/////// SET UP SCENE ////////
	
	Show("background","dinner");
	Show("mom","tw_mom");
	Show("table","dinner_table_3");
	PlaySound("clock","dinner_ticking",{loop:-1});

	////////////////////////////

	m("...");
	Show("tw_me","tw_dinner_1");
	Wait(500);
	y("...");
	m("Anything special today?");

	Choose({
		"No, nothing": talk_1,
		"Yes, everything is terrible.": function(message){
			y(message);
			m("What happened?");
			Choose({
				"...Nothing...": talk_1,
				"Take a look at this.": talk_3,
				"I’m a transgender.": function(message){
					y(message);
					comming_out_tw();
				}
			});
		},
		"Mom, I have something to tell you": kind_speak
	});
}

function talk_1(message){
	y(message);
	m(".....");
	m("Anyway, how long will you be looking like that?");
	y("What do I look like?");
	m("....");
	m("Whatever you do, it’s up to you, but...");
	m("Do you know how other people see you?");
	m("Last time, a neighbor asked me who the lady was. She probably saw you.");
	m("I was really...");
	Choose({
		"What’s wrong with that?": function(message){
			y(message);
			m("How dare you! Talking like that to your mom?");
			y("What about it?");
			y("You are the one who is being rude--");
			m("What?");
			y("...");
			talk_2();
		},
		"I’m a transgener.": function(message){
			y(message);
			comming_out_tw();
		},
		"I will be careful...": function(message){
			y(message);
			m("Oh, please. I'm begging you.");
			m("I am scared to go out.");
			y("...Okay.");
			m("I totally can’t understand why you are being like this.");
			talk_2();
		}
	});
}

function talk_3(){
	Show("tw_me","tw_dinner_2");
	Wait(800);
	y("Take a look at this.");
	m("...What’s that?");
	y("It’s a medical form.");
	y("I’m on a hormone therapy.");
	Show("tw_me","tw_dinner_3");
	Show("paper","paper");
	Wait(800);
	y("I am sorry that I started it without telling you, but I already lost most of my sexual function.");
	m("...What?!");
	y("......");
	m("......");
	m("...........");
	Show("paper",null);
	m("Go to your room.");
	m("Just save it.");
	y("Save it?");
	m("GO.");
	Choose({
		"NO.": function(message){
			y(message);
			m("What?");
			y("I won’t go until you listen.");
			y("I’m going to have a surgery soon.");
			m("Do you think it’ll make difference?");
			m("Do you want to live a life being treated as a monster?");
			y("That’s better than living like this!");
			y("Just leave me alone!");
			leaveme();
		},
		"No, I am a transgender.": function(message){
			y(message);
			y("I have to make this clear.");
			y("I’m under hormone therapy, and I will have sex reassignment surgery.");
			m("What?");
			m("S... surgery?");
			m("Are you insane? Stop this now or--");
			y("What if I don’t want to?");
			leaveme();
		},
		"Your refusal won’t bring back my sexual functions.": function(message){
			y(message);
			m("What?");
			y("No.");
			y("Even if I quit now, I can’t go back to who I was before.");
			m("You...");
			y("Unfortunately for you, I can’t have children.");
			y("I started this knowing everything.");
			leaveme();
		}
	});
}

function talk_2(){
	m("What on the earth do you want to?");
	m("Do you want to be a woman?");
	Choose({
		"I AM a woman.": function(message){
			y(message);
			m("You are a boy.");
			m("You are my <i>son</i>!");
			m("Think about how old you are!");
			m("ou should be past that confusing phase in adolescence.");
			y("I am not a man.");
			y("Nor a son.");
			y("Age doesn’t matter!");
			y("I am a transgender.");
			comming_out_tw();
		},
		"Please STOP!!!": function(message){
			y(message);
			m("...");
			m("Wha... Why are you yelling?");
			y("Yes, I am a woman! I am a transgender!");
			comming_out_tw();
		},
		"I am a transgender.": function(message){
			y(message);
			comming_out_tw();
		}
	});
}

function comming_out_tw(){
	$.response = 1;
	m("What? Transgender?");
	m("Are you out of mind?");
	y("......");
	talk_3();
}

function leaveme(){
	m("If you don’t quit, I will make you quit.");
	y("What?");
	y("You don’t have a right to control me.");
	y("I am not your property!");
	Wait(1000);
	m("You are my son. I cannot let you ruin your body!");
	Choose({
		"what": leaveme_1,
		"Whaaaaat": leaveme_1,
		"Whaaaaaaaaaaat": leaveme_1
	});
}
function leaveme_1(message){
	y(message);
	m("Why do you want to change your gender?");
	m("Can’t you just live as you are?");
	m("You are my <i>son</i>, Be realistic!");
	y("I am not changing my gender!");
	y("Mom, I have never been your <i>son</i>!");
	y("When you call me a <i>son</i>");
	y("It feels like my heart is being sabotaged. Can you even imagine?");
	y("I hated everything about it!");
	y("Every time I heard words like that, I couldn’t help but hate myself!");
	Wait(800);
	m("Yooseong.");
	m("Don’t you think about me?");
	m("What kind of parent would understand...");
	m("if they hear something like this all of the sudden?");
	Choose({
		"Then what about me? My feelings?": function(message){
			$.youdontknowme = true;
			y(message);
			y("...");
			y("Yes, it must be a shock for you.");
			y("Sorry for being your child.");
			m("*Sigh*");
			Wait(800);
			y("Then have you thought about me, mom?");
			y("Have you ever thought about my feelings?");
			y("Why did you give birth to me?");
			y("If I knew I were to live like this, I wouldn’t have wanted to be born.");
			m("Yooseong.");
			y("Do you know how many times I thought about choosing to die instead of living like this?");
			y("Do you have any idea how I feel everyday, enduring life?");
			m("...");
			leaveme_2();
		},
		"Okay. Let’s talk next time.": function(message){
			y(message);
			$.result = 2;
			m("...Yes. We should take some time to think about this.");
			y("...I agree. I am sorry for bursting out like this.");
			y("(No matter how hard I try to convince my mom, it is of no use. I’d better leave this house soon.)");
			Wait(800);
			comming_end();
		},
		"Then I will disappear for you.": function(message){
			y(message);
			leaveme_2();
		}
	});
}

function leaveme_2(){
	$.result = 1;
	y("If you can’t understand it, then never mind.");
	Show("tw_me","tw_dinner_4");
	m("What?");
	y("Never mind it.");
	y("I don’t need anything anymore.");
	y("I will leave this house. That’s what you want, isn’t it?");
	m("What are you talking about?");
	m("You don’t have anywhere to go...");
	if($.youdontknowme){
		y("You really know nothing about me, mom.");
	}else{
		y("Even if there’s nowhere to go, it’ll be better than living in this house.");
	}
	y("Good night.");
	Wait(800);
	comming_end();
}

function comming_end(){
	Clear();
	Start_friend_2();
}

function kind_speak(message){
	$.response = 2;
	y(message);
	m("Is it important?");
	y("Yeah, very.");
	m("Okay. Come here. Let’s talk about it.");
	y("...");
	Show("tw_me","tw_dinner_2");
	y("Please look at this.");
	m("What’s that?");
	y("...This is my blood test report, including information about my hormone levels.");
	Show("tw_me","tw_dinner_3");
	Show("paper","paper");
	Wait(800);
	y("I am transgender. I am on getting hormone replacement therapy.");
	y("I am sorry that I started it all by myself, but I already lost most of my sexual functions.");
	m("......");
	y("......");
	m("......");
	Show("paper",null);
	m("Since when did you think so?");
	Choose({
		"Since a long time ago.": function(message){
			y(message);
			y("Far earlier than you think.");
			m("Why didn’t you tell me then?");
			y("...");
			y("I couldn’t.");
			y("I was scared...");
			y("I don’t think hiding it was a good decision. I’m sorry.");
			m("......");
			kind_speak_2();
		},
		"Recently.": function(message){
			y(message);
			m("Then...");
			m("How about having more time to think over it?");
			y("No. I already made up my mind.");
			y("That’s why I’m telling you.");
			m("......");
			kind_speak_2();
		},
		"...It’s a secret.": function(message){
			y(message);
			m("Do you have to make that choice?");
			y("It was not a choice, so I couldn’t help it.");
			m("What do you mean you didn’t choose?");
			y("If I didn’t do this...");
			y("I felt like I was going to die...");
			y("Sorry to keep a secret from you.");
			kind_speak_2();
		}
	});
}

function kind_speak_2(){
	y("Please understand me... I had to do this.");
	m("Will you get the surgery?");
	Choose({
		"...Yeah, of course.": function(message){
			$.surgery = "yes";
			y(message);
			m("...Why don’t you refrain from getting a surgery?");
			y("What do you mean by that?");
			kind_speak_3();
		},
		"No, I won’t get a surgery.": function(message){
			$.surgery = "no";
			y(message);
			m("Okay...Thank goodness.");
			kind_speak_3();
		},
		"I will think about it some more.": function(message){
			y(message);
			$.surgery = "think";
			m("Yes, that’s good...");
			m("I don’t want you to get surgery.");
			kind_speak_3();
		}
	});
}

function kind_speak_3(){
	Wait(800);
	$.result = 3;
	m("Actually...");
	m("I also searched about it.");
	m("So, that is...");
	m("the surgery is dangerous...");
	m("awfully painful...");
	m("and the pain will last forever.");
	y("The sex reassignment surgery?");
	y("Wait... Did you searched it?");
	y("Did you already know everything???");
	m("I’ve seen it in your room.");
	y("...Have you looked through my room?");
	m("I didn’t mean to.");
	m("I went in for something else... and I saw it by accident.");
	y(" . . . ");
	m("I won’t stop you since you’ve made your own decision...");
	m("Are you sure of it?");
	Wait(1000);
	m("I even asked other transgenders");
	m("they said you might regret it.");
	m("As you know... You can’t go back.");
	y("Mom. . .");
	y("I am not that person.");
	y("You should’ve asked me.");
	y("I wouldn’t have started this if I was going to regret it.");

	switch($.surgery){
		case "yes": y("I’d rather die in surgery than live like this."); break;
		case "no": y("I don’t mean to get surgery, but I can’t live like this."); break;
	}

	m("...");
	y("...");
	m("I don’t want to lose you, and if you say it’s the happiest way for you...");
	m("Do whatever you want.");
	m("A lot of things will going to change.");
	m("Have you decided on a new name?");
	Wait(1000);
	comming_end();
}
