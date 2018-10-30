
function telephone(){

	/////// SET UP SCENE ////////

	Show("background", "phone");

	////////////////////////////

	y("*Sigh*");
	y("This happens often, but I never get used to how unpleasant it is.");
	y("What makes them care so much about other people’s gender?");
	y("But I have to put up with it for money...");
	y("I should get some rest and look at my phone.");
	$.Search = 1;
	Choose({
		"Search : transgender": Search_transgender,
		"Search : transwoman": Search_tw,
		"Search : mtf": Search_mtf
	});
}

//I put lots of waiting time cause it has many words...

function Search_transgender(){
	queue(ClearDialogue, 0);
	$.Search_trans = true;

	y("transgender");
	t("『Harmful results for teenagers were excluded. Users over 19 years of age can see all results through adult authentication.』");
	y("WHAT!!!!!!");
	y("That’s ridiculous!!!");
    Wait(1000);
	t("『Transgenders? Aren’t they gays?』");
	y("They are totally different....");
	t("『Hey, transgender is a little bit weird.....』");
	y("Transgenders don’t like you neither.");
    Wait(1000);
	t("『Transgenders reinforce gender roles.』");
	y("Transgenders are the minorities and somehow they're so powerful and influential?");
	Wait(1000);
	t("『Why do transgenders express femininity so excessively? It makes me uncomfortable..』");
	y("Well, that's how transgender has to look!");
    y("They need to appear normal in the eyes of others to get surgery and sex reassignment...");
	Wait(1000);
	y("The psychiatrist wouldn't permit it if a person doesn’t fit the transgender stereotype....");
	y("It is required of you whether you want it or not.");
	t("『...41% of transgenders attempt suicide--...』");
	y("......");
	Wait(800);
	t("『Transgender is a mental illness--』");
	y("..........");
	Wait(800);
	if($.Search_tw && $.Search_mtf){
		y("I shouldn’t have searched them...");
		quit_twit();
	}else{
		t("Would you close your Internet browser?");
		Choose({
			"Yes" : quit_twit,
			"No" : function(){
				$.Search++;
				if($.Search_mtf){
					Choose({
						"Search : transgender": Search_tw
					});
				}else if($.Search_tw){
					Choose({
						"Search : mtf": Search_mtf
					});
				}else{
					Choose({
						"Search : transwoman": Search_tw,
						"Search : mtf": Search_mtf
					});
				}
			}
		});
	}
}

function Search_tw(){
	//Some sentences are erased due to the difference in culture
	$.Search_tw = true
	queue(ClearDialogue, 0);

	y("transwoman");
	t("『Should we accept transwomen as women?』");
	y("...Who are you to accept who I am? Who do you think you are to have the right to do so?");
    Wait(1000);
	t("『Transwomen wear strange clothes and do strange things.』");
	y("...Have they even ever seen a transgender in real life?");
	y("Or...");
	y("Do they think all transwomen are like those on the Internet? They are noticeable because they seem provocative.");
	Wait(1000);
	t("『Transwomen are not real women. --』");
	y("...");
	Wait(1000);
	if($.Search_trans && $.Search_mtf){
		y("I shouldn’t have searched them...");
		quit_twit();
	}else{
		t("Would you close your Internet browser??");
		Choose({
			"Yes" : quit_twit,
			"No" : function(){
				$.Search++;
				if($.Search_mtf){
					Choose({
						"Search : transgender": Search_transgender
					});
				}else if($.Search_trans){
					Choose({
						"Search : mtf": Search_mtf
					});
				}else{
					Choose({
						"Search : transgender": Search_transgender,
						"Search : mtf": Search_mtf
					});
				}
			}
		});
	}
}

function Search_mtf(){
	//Some sentences are erased due to the difference in culture

	$.Search_mtf = true
	queue(ClearDialogue, 0);
	y("mtf");
	t("『Male To Female. It is an abbreviation for transwomen.』");
	t("『mtf is a man.』");
	y("What..?");
	t("『mtf doesn’t experience typical woman’s life...』");
	y("No one even knows if a person is mtf if they are generally perceived as women.");
	y("Don’t you think they experience what woman’s life is like?");
    y("People treat transwomen the way they treat any other women until they know that they are mtf.");
	Wait(1000);
	t("『mtf transgender? Do you think they are discriminated against because they’re are transgendered? They live a comfortable life!』");
	y("There are many people who look me like a bug after they find out that I’m transgender.");
	y("And they say transgender has power, but how many transgenders exist in society?");
    Wait(1000);
	y("If I didn’t hide my sexual identity, I wouldn’t have gotten this part-time job I have.");

	if($.Search_tw && $.Search_trans){
		y("I shouldn’t have searched them...");
		quit_twit();
	}else{
		t("Would you close your Internet browser?");
		Choose({
			"Yes" : quit_twit,
			"No" : function(){
				$.Search++;
				if($.Search_trans){
					Choose({
						"Search : transwoman": Search_tw
					});
				}else if($.Search_tw){
					Choose({
						"Search : transgender": Search_transgender
					});
				}else{
					Choose({
						"Search : transgender": Search_transgender,
						"Search : transwoman": Search_tw
					});
				}
			}
		});
	}
}

function quit_twit(){
	Clear();
	Start_friend_1();
}
