
function Start_Dinner_2(){

  /////// SET UP SCENE ////////

  Show("background","dinner");
  Show("mom","mom_sitting");
  Show("table","dinner_table_3");

  PlaySound("clock","dinner_ticking",{loop:-1});
  /////////////////////////////

  Wait(2000);
  y("I’m home.");
  m("Hey, Yooseong.");
  Wait(500);
  Show("me","dinner_standing");
  m("...");
  m("Square your shoulders.");

  Choose({
    "I don’t want to.": home_1,
    "This is the best I can do.": home_1,
    "I want to cut out my breasts.": home_coming_1
  });

  function home_1(message){
    y(message);
    m("You will ruin your posture.");
    m("And what’s up with your hair?");
    Choose({
      "Why?": home_2,
      "What?": home_2,
      "What about it?": home_2
    });
  }

  function home_coming_1(message){
    y(message);
    y("I hate that they are protruding.");
    y("I want them cut out.");
    m("Why do you talk like that!");
    m("I dislike it in some occasions too.");
    y("At least you don’t wear binders to hide them.");
    m("Why do you have to hide them?");
    m("Everyone else has breasts as well.");
    y("Why should I compare myself to others when I hate what is on my body?");
    m("Stop talking back to me.");
    m("And what’s up with your hair?");
    Choose({
      "Why?": home_2,
      "What?": home_2,
      "What about it?": home_2
    });
  }

  function home_2(message){
    y(message);
    m("Did you cut your hair on the way home?");
    y("No, I didn’t.");
    m("It looked like it.");
    m("Why don’t you grow it out?");
    m("There are many short hairstyles for girls nowadays.");
    Choose({
      "I am not interested in pretty.": home_3,
      "I don’t plan on growing them out.": home_3,
      "I will do what I want to do with my hair.": home_3
    });
  }
}

function home_3(message){
  y(message);
  m("...");
  m("I wish you would do some makeups and dress up...");
  m("Alright.");
  m("How was school?");

  Choose({
    "It was alright.":home_4,
    "I am tired.": home_4,
    "I have something to tell you.":saying_1
  });
}

function home_4(message){
  y(message);
  m("Come rest for a bit.");
  m("and have some fruits.");
  y("Okay.");
  Show("me","me_sitting");

  Choose({
    "(playing with tissue)": tissue,
    "Mom, I have something to tell you.":saying_1,
    "When is dad coming home?": asking
  });
}
function tissue(message){
  y(message);
  m("Stop playing with it. Why are you doing that?");

  Choose({
    "I have something to say.": saying_1,
    "I am transgender.": saying_direct,
    "I want to dig out my womb.": strict_saying
  });
}

function asking(message){
  y(message);
  m("He will be home soon. Why do you ask?");

  Choose({
    "I have something to say.": saying_1,
    "I am transgender.": saying_direct,
    "I want to dig out my womb.": strict_saying
  });
}

function saying_1(message){
  y(message);
  Show("me","me_sitting");
  y("Mom...");
  y("What do you think about queers?");
  m("Queers?");
  m("Do you mean gay or something?");
  m("Those people...");
  m("They will live their lives.");
  y("How will you react if one of them are around you?");
  m("Well...");
  m("I've never thought about it before...");
  m("Don't think about anything other than your studies.");
  y("Mom...");
  Choose({
    "I am transgender.": saying_direct,
    "I am more comfortable being seen as a man.": function(message){
      y(message);
      y("and I want to start hormonal therapy and have transitional surgeries.");
      saying_2();
    },
    "Study is also important, but....": function(message){
      y(message);
      y("I want to tell you rather than talking you all of sudden later .");
      y("that I am transgender...");
      y("and I want to start hormonal therapy and have transitional surgeries.");
      m("What?");
      y("I want to be seen as a man, not a woman.");
      saying_2();
    }
  });
}

function saying_direct(message){
  y(message);
  y("I am more comfortable being seen as a man.");
  y("and I want to start hormonal therapy and have transitional surgeries.");
  m("What?");
  y("I want to be seen as a man, not a woman.");
  saying_2();
}


function saying_2(){
  m(". . .");
  Wait(800);
  m("I knew you were a little bit different from other girls, but...");
  m("I don’t even insist you to wear skirts any more because you don’t like it.");
  y("I am not talking about shirts.");
  m(". . .");
  saying_middle();
}

function saying_middle(){
  Wait(500);
  m("Do you think that getting hormone shots and surgeries");
  m("will make people see you as a man?");
  y("Now that’s transphobic.");
  m("Do you want to be special?");
  m("Do you want to draw attention from other people?");
  y("What???");
  m("*Sigh*.");
  y(". . .");
  m("Please live normally, Yooseong.");

  Choose({
    "I am doing this to be normal.": smooth,
    "What is normal?": strong,
    "Am I abnormal?": hard
  });
}

function smooth(message){
  y(message);
  y("I want to live without caring about my social security number or gender.");
  y("Living as a man would be living normally for me.");
  y("Whenever people call me a woman,");
  y("I feel uncomfortable as if I am wearing clothes with poor fit.");
  m("How is putting scalpel to a perfectly fine body normal?");
  saying_3();
}

function strong(message){
  y(message);
  m("Living like everyone else.");
  m("What you want is far from that.");
  y("What do you mean?");
  m("You are putting scalpel to a perfectly well-functioning body..");
  saying_3();
}
function hard(message){
  y(message);
  m("Putting a scalpel to a perfectly normal body is absolutely abnormal.");
  y("Jeez, I didn’t even want a life like this!");
  y("Do you think being a transgender is a choice?");
  y("That you can be it if you want to and you can not be it if you don’t want to?");
  saying_3();
}

function saying_3(){
  y("Then why did you say that I would be prettier if I got my eyelids done?");
  m("That’s different.");
  m("Performing a transitional surgery would not only cost a ton,");
  m("You will be something that is neither male nor female.");

  Choose({
    "What": saying_4,
    "Whaaaaaaat": saying_4,
    "Whaaaaaaaaaaaaaat": saying_4
  });
}

function saying_4(message){
  y(message);
  m("Do you have to get it done?");
  m("Just let some people see you as a man");
  m("and treat it as a joke.");
  y("...");
  Choose({
    "Would you treat me as a man before getting surgery?": function(message){
      y("Would you accept me and treat me as a man even if I don’t get the surgery?");
      y("I can’t survive in this society if I do not spend my money on surgery");
      y("Am I wrong to want to appear as the gender I want be seen as in this kind of world?");
      saying_5();
    },
    "Do you think that’s easy?": function(message){
      y(message);
      y("When I go to the public toilet");
      y("people get frightened!");
      saying_5();
    },
    "That’s just you being selfish.": function(message){
      y(message);
      y("Isn’t that because you can keep your hope that,");
      y("I will “come back” someday if I don’t get the surgery?");
      saying_5();
    }
  });
}
function saying_5(){
  m(". . .");
  Show("arm","mom_cry");
  m("*sobs*");
  m("*weeps*");
  Choose({
    "Okay.. please don’t cry, mom.": function(message){
      y(message);
      m("*sniffs*");
      Wait(500);
      m("I wish that you wouldn’t get that surgery.");
      Show("arm",null);
      m("You will ruin your health.");
      y("*sigh*");
      saying_7();
    },
    "I feel stressed all the time.": function(message){
      y(message);
      y("Even the smallest things in life,");
      y("they stress me out.");
      saying_6();
    },
    "[Cry]": function(message){
      y("*cries even louder*");
      m("*Continues to cry*");
      y("*cry cry cry*");
      m(" *sniffs* ");
      y(" *sniffs* ");
      saying_6();
    }
  });
}
function saying_6(){
  m("Why...");
  Show("arm",null);
  m("Why don’t you think in my shoes?");
  y(". . .");
  m(". . .");
  m("The surgery might ruin your health.");
  m("Why are you making your life difficult?");
  y("This...");
  y("Living like this is far more hopeless and more difficult to me.");
  saying_7();
}
function saying_7(){
  m("Anyway... since you are a high school student, you have to focus on your studies...");
  m("Don’t think about that right now");
  m("Let’s focus on your studies, yes.");
  m("Think about it some more and make a right decision");
  m("It cannot be undone once it is done.");
  m("Let’s give it some time.");
  m("Yes?");
  y("Aarrggghh");
  m("And don’t tell your father.");
  y(". . .");
  Ringing();
}
function strict_saying(message){
  y(message);
  y("I hate having periods");
  y("I hate my breasts");
  y("I hate my whole body!");
  m("What is your problem?");
  y("I hate being called a woman and I hate going to women’s bathroom.");
  m("It’s just a phase.");
  m("I have seen some girls with short hair and boyish style in high school.");

  Choose({
    "It is not just a phase.": function(message){
      y(message);
      y("I like my style now.");
      y("and I want to start hormonal therapy and do surgeries when I go to college.");
      m("Yooseong...");
      y("I am sick and tired of being seen as a woman.");
      saying_2();
    },
    "I am a man.": saying_1,
    "Then they must be just like me!": function(message){
      y(message);
      m("Those girls grew their hair out and put on makeups once they got into college.");
      y("Mom! Seriously!");
      y("I won’t be doing that!");
      y("Because I like myself like this!");
      y("Once I get into college, I will start a hormonal therapy and have surgeries!");
      m("What?");
      y("I wish people would stop calling me a woman!");
      saying_2();
    }
  });
}

function Ringing(){
  Start_Dinner_3();
}
