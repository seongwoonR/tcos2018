
function Start_my_room(){
  //clear
  queue(ClearDialogue,0);
  /////// SET UP SCENE ////////

  Show("background","bedroom_3");
  Show("friend","friend_2");
  PlaySound("bg","bedroom_1",{loop:-1});

  Wait(1000);
  f("Yooseong! Have you tried talking to your parents?");
  f("What did they say?");
  
  Choose({
    "I’m fucked.": notgood,
    "It didn’t go so wel.": soso,
    "They said they will kick me out if I get surgery.": notgood_2
  });

  function notgood_2(message){
    y(message);
    if($.silent){
      f("Please tell me that’s a lie.");
      y(". . .");
      Wait(1000);
      y("They said something like that.");
      bedroom_con();
    }else{
      f("You must be lying?");
      y("...");
      f("Please. Tell me that you are lying.");
      y("......");
      Wait(500);
      f("Oh, my...");
      bedroom_con();
    }
  }
  function notgood(message){
    y(message);
    f("Oh...");
    f("...");
    y("...");
    f("Are you okay?");

    Choose({
      "I’ve got to pull myself together.": function(message){
        y(message);
        f("Yeah, let’s stay strong!");
        f("You are not alone.");
        y("...");
        f("...");
        bedroom_con();
      },
      "Is it my fault being born this way?": function(message){
        y(message);
        f("No, this is not your fault.");
        f("You’ve done nothing wrong.");
        f("...");
        bedroom_con();
      },
      "How could I be okay?": function(message){
        y(message);
        f("...");
        f("I’m sorry...");
        f("I overstepped my boundary");
        f("when I pushed you to come out...");
        y("...");
        bedroom_con();
      }
    });
  }

  function soso(message){
    y(message);
    f("I’ve seen better.");
    y("I bet you did.");
    if($.telling_hard){
      y("Have you ever imagined");
      y("having an actual transphobe in your own  family?");
    }
    f("...");
    y("...");
    f("Are you alright?");

    Choose({
      "I’ve got to pull myself together.": function(message){
        y(message);
        f("Yeah, let’s stay strong!");
        f("You are not alone.");
        y("...");
        f("...");
        bedroom_con();
      },
      "Is it my fault being born this way?": function(message){
        y(message);
        f("No, this is not your fault.");
        f("You’ve done nothing wrong.");
        f("...");
        bedroom_con();
      },
      "How could I be okay?": function(message){
        y(message);
        f("...");
        f("I’m sorry...");
        f("I overstepped my boundary");
        f("when I pushed you to come out...");
        y("...");
        y("It's okay. I had to come out someday.");
        f("...");
        bedroom_con();
      }
    });
  }
}

function bedroom_con(){
  if($.harmony){
    y("Phew...");
    y("Do they really think my family gets along?");
    y("It’s peaceful only if I keep quiet about who I am.");
    y("How can that ever be genuine?");
    y("What about me? Am I not a part of my family?");
    f("...");
    f("They only concern what they see...");
    Wait(1000);
  }
  y("If...");
  y("Others get to know about who I really am,");
  y("will I become a shameful child?");
  y("Though I am a child that everyone is proud of right now.");
  y("If they know that I am a transgender, will I become a child my parents want to hide?");
  f(". . .");
  f("Don’t think about that.");
  f("There are many people who support us.");
  f("We are not wrong.");

  Choose({
    "Shut up! What do you know?": function(message){
      y(message);
      y("How do you know what it feels like to have parents who are transphobes");
      f("Yooseong.");
      y("Ha,");
      y("The people who support us?");
      y("I’ve heard hateful words from people who should have been on my side");
      y("I am constantly told how I am <i>abnormal</i> in their eyes...");
      f("...");
      if($.telling_hard){
        y("My dad told me to get out of the house.");
        y("He also told that he would disown me.");
        f("...");
        f("I’m sorry...");
      }
      y("I’m just going to go to bed.");
      Show("phone","phone_b");
      f("Sleep tight.");
      totheend();
    },
    "What would happen if I get the surgery...": function(message){
      y(message);
      y("Whenever I make friends");
      y("I have to think about whether they are transphobic");
      y("I have to choose which bathroom I should use.");
      y("and I have to consciously think about and guess whether they see me as a man or a woman");
      y("What if the surgery doesn’t go as planned?");
      y("What if I feel uncomfortable even after the surgery?");
      f("Yooseong....");
      y("It will cost a...");
      y("Every people have their own secret");
      y("If I get surgery, am I be able to hide my personality...?");
      y("Will that be... happy?");
      f("...");
      y("I’m just going to go to bed.");
      Show("phone","phone_b");
      f("...Sleep tight.");
      totheend();
    },
    "I just... want to die.": function(message){
      y(message);
      y("I don’t know why I am living...");
      f("Yooseong....");
      y("Who can tell me that the future will be happier than before?");
      f("...");
      y("I’m just going to go to bed.");
      Show("phone","phone_b");
      f("Sleep tight.");
      totheend();
    }
  })
}

function totheend(){
  Wait(1000);
  Clear();
  Start_Outro();
}
