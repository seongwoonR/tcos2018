function Start_friend_1(){

  /////// SET UP SCENE ////////

  Show("background","bedroom_3");
  Show("friend","tw_friend");
  PlaySound("bg","bedroom_1",{loop:-1});

  ////////////////////////////

  y("...");
  Wait(500);
  y(".....");
  PlaySound("sfx","cellphone");
  Wait(1500);
  y("Hmm? I got a text.....");
  f("Yooseong.");
  y("Ah, It’s you");
  y("Sorry! I left early today.");
  f("It’s okay.");
  f("Anyways, are you okay?");
  Choose({
    "Yeah, why wouldn’t I be?": itsokay,
    "I’m okay.": itsokay,
    "...It’s was the worst experience.": itsworse
  });
}

function itsokay(message){
  y(message);
  f("You know...");
  f("During the shift, the customers...");
  y("Well.. It often happens.");
  f("But just because it happens frequently, it doesn’t mean that it becomes okay.");
  y("I’m okay, I told you.");
  keeptalking();
}

function itsworse(message){
  y(message);
  f("...Well... of course...");
  f("I guess I shouldn’t have asked you.");
  f("Sorry.");
  y("...");
  y("I think I'm going to ask for $10 more to whoever asks my gender.");
  f("You always have such horrible experiences.");
  f("How are you feeling now? Shall I text you later?");
  y("No, no. It’s not that...");
  y("I am just a little sensitive.");
  f("What’s happened?");
  Wait(800);
  y("...");
  y("It’s not a big deal. I read some bad things people said on the Internet...");
  f("Again..?");
  f("well, I may be a bit nosy...");
  f("I want you to avoid that sort of thing.");
  f("It’s also not good for you.");
  y("...I will try that.");
  keeptalking();
}

function keeptalking(){
  f("phew...");
  f("Well, okay.");
  f("Did you get home safely?");
  y("yeah... I did... but...");
  f("But?");
  f("What’s wrong?");
  Wait(800);
  y("Um... I had an argument with my mom.");
  y("as usual.");
  y("About my hair or clothes...");
  f("...");
  f("Hey... Yooseong.");
  y("Yes?");
  Wait(800);
  f("Why don’t you tell your mom everything?");
  Choose({
    "Okay... I’ll think about it.": think_about,
    "That’s easy to say...": itseasytotalk,
    "How can you say that?": itshard
  });
}

function think_about(message){
  y(message);
  f("It will be fine.");
  y("I... am not sure.");
  y("I’ve always tried to talk, but the moment comes");
  y("I cannot say anything.");
  y("Honestly, I don’t know how she will take it...");
  y("It's all too...");
  Wait(1000);
  y("Scary.");
  f("...");
  f("I cannot understand how you feel...");
  f("But you cannot avoid this forever.");
  y("...You are right.");
  f("If so...");
  f("Why don’t you talk to her as soon as possible?");
  keeptalking_2();
}

function itseasytotalk(message){
  y(message);
  y("and....");
  y("To be honest, I’ve always wanted to tell her but...");
  f("But?")
  y("I just can’t.");
  f("...");
  f("Even so...")
  f("You can’t hide forever.");
  f("If you have to say it anyway, why don’t you talk to her now?");
  keeptalking_2();
}

function itshard(message){
  y("How can you say that? What do you know anyways?");
  f("...");
  y("Does coming out seem that easy?");
  y("Since you are not queer, you don’t know how many queers...");
  y("end up on the streets because their parents don’t want them after they come out?");
  f("...");
  y("Some parents even force them to get conversion therapy.");
  f("....");
  f("Sorry, I didn’t think it through...");
  f("As you said, I was not thinking straight...");
  f("I’m so sorry.");
  y("....");
  Wait(800);
  y("It’s okay... I’m sorry for getting angry at you all of the sudden.");
  keeptalking_2();
}

function keeptalking_2(){
  Wait(800);
  y("...");
  y("Do you remember when i came out?");
  f("Sure.");
  y("Coming out to a person means that you have some sort of trust for that person...");
  y("On the other hand...");
  y("It also means that");
  y("you are ready to give up on them.");
  Wait(1000);
  f("......");
  y("Coming out doesn’t always end up like how it did with you.");
  y("I’ve experienced bullying because I came out,");
  y("and there are countless people who were really close to me that changed their mind and left me after I came out.");
  f("Yooseong...");
  Wait(1000);
  y("Can you imagine how nervous I was when I came out to you?");
  y("It ended up quite nicely...");
  y("But quite frankly..");
  y("I don’t want to come out again.");
  y("I’m so <b>scared</b>.");
  f("...");
  y("...");
  keeptalking_3();
}

function keeptalking_3(){
  f("Honestly.");
  f("I had never imagined there would be a queer around me.");
  f("I’m probably not the only one.");
  f("People who aren’t queer don’t even think for a second about the possibility that there’s a queer person around them.");
  f("Do you know how funny I feel when I think about myself before I knew you?");
  f("It would be a lie if I say that I wasn’t surprised when you came out.");
  y("...");
  f("yet...");
  Wait(800);
  f("I was so glad when you came out to me.");
  f("I felt trusted and it gave me an opportunity to think more queers.");
  f("Of course, being a parent and being a friend are two different things!");
  f("And I’m not trying to deny what you’ve suffered.");
  f("It might seem presumptuous,");
  f("but there are some people who think like I did before...");
  Wait(1000);
  f("so I hope that you won’t be too scared.");
  y("...");

  Choose({
    "Thank you.": function(message){
      y(message);
      y("Hearing you say that,");
      y("it felt reliving somehow.");
      f("That’s what friends are for.");
      keeptalking_4();
    },
    "[Cry]": function(message){
      Show("friend","tw_friend_cry");
      y("....");
      y(".......");
      y("...........");
      f("...");
      Wait(800);
      f("Are you sleeping?");
      y("...");
      y("Hell no.");
      Show("friend","tw_friend");
      keeptalking_4();
    },
    "Seriously? Don’t pretend to be cool.": function(message){
      y(message);
      $.notcool = true;
      y("You are truly out of line now.");
      f("...");
      y("You suck at soothing.");
      f("...Shut up.");
      keeptalking_4();
    }
  });
}

function keeptalking_4(){
  Wait(800);
  f("Come to think of it...");
  f("Since you live with your mom, maybe she might know already.");
  y("Whaaaat?");
  Wait(800);
  f("Maybe she’s getting wind of it and saying more things like that.");
  y("You told me earlier that they usually don’t know!");
  f("It’s just a possibility.");
  f("Just like you said, you’re often seen as a woman outside...");
  y("......");
  Wait(800);
  f("Well, either way, I think you’d be better off telling her yourself.");
  f("and don’t be too nervous.");
  f("If you really get kicked out, I’ll let you sleep at my place!");
  y("....I would rather sleep outside.");
  f("What?");
  y("Nothing.");
  f("Anyways, since she is your mom and not a stranger, you have to face this eventually.");
  y("As you said, I’ll give it a shot.");
  y("Thanks.");
  f("You’re welcome. Talk to you later!");
  end_friend();
}

function end_friend(){
  queue(ClearScene, 0);
  Wait(800);
  Start_home_1();
}
