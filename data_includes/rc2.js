var shuffleSequence = seq("intro", "info", "startprac", "practice", "endprac", sepWith("sep", anyOf("filler", startsWith("StimZero"), startsWith("StimThat"))), "contact", "sr", "code");

var ds = "RegionedSentence"
var qs = "Question"

var manualSendResults = true;

var defaults = [
    "Separator", {
        transfer: 1500,
        normalMessage: "Please wait for the next sentence",
        errorMessage: "Wrong. Please wait for the next sentence" },
    "RegionedSentence", {
        mode: "self-paced reading" },
    "Question", {
        as: ["Yes","No"],
        randomOrder: false,
        hasCorrect: true }
];

var items = [
    ["sr", "__SendResults__", { }],
    ["sep", "Separator", {}],
    ["intro", "Message", {consentRequired: true, html: {include: "intro.html"}}],
    ["info", "Form", {html: {include: "info.html"}}],
    ["startprac", "Message", {consentRequired: false, html: {include: "start_practice.html"}}],
    ["practice", ds, {s: "She knows how to twist this around."}],
    ["practice", ds, {s: "But they are so expensive."},
        qs, {q: "Are  they cheap?" , hasCorrect: "No", randomOrder: false}],
    ["practice", ds, {s: "I am just going to have to put it in the car sometimes and listen to it."}],
    ["practice", ds, {s: "And I have watched Gross Anatomy."},
        qs, {q: "Is it possible to watch Gross Anatomy?" , hasCorrect: "Yes", randomOrder: false}],
    ["endprac", "Message", {consentRequired: false, html: {include: "end_practice.html"}}],
    [["filler", 6], ds, {s: "But all of a sudden it just was not working."}],
    [["StimZero.OriginalZero", 7], ds, {s: "The day@NPHEAD1 it@RCSUBJ1 happens@RCVERB1 is ninety-eight percent of the planning usually."}],
    [["StimThat.OriginalZero", 7], ds, {s: "The day@NPHEAD1 that@COMPL it@RCSUBJ1 happens@RCVERB1 is ninety-eight percent of the planning usually."}],
    [["filler", 8], ds, {s: "It was really amazing."}],
    [["filler", 9], ds, {s: "Now we can put all our yard clippings out."},
        qs, {q: "Do the yard clippings go out?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalThat",[10,7]], ds, {s: "And when it is cold I am wearing sweatpants unless I am going to something special@NPHEAD1 that@COMPL my@RCSUBJ1 daughter@RCSUBJ2 is@RCVERB1 doing@RCVERB2 or something like that."}],
    [["StimZero.OriginalThat",[10,7]], ds, {s: "And when it is cold I am wearing sweatpants unless I am going to something special@NPHEAD1 my@RCSUBJ1 daughter@RCSUBJ2 is@RCVERB1 doing@RCVERB2 or something like that."}],
    [["filler", 11], ds, {s: "With all of you living so close together."}],
    [["filler", 12], ds, {s: "You clip recipes."},
        qs, {q: "Can recipes be clipped?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalZero",[13,7]], ds, {s: "And there is only so much football@NPHEAD1 that@COMPL you@RCSUBJ1 can@RCVERB1 watch.@RCVERB2"}],
    [["StimZero.OriginalZero",[13,7]], ds, {s: "And there is only so much football@NPHEAD1 you@RCSUBJ1 can@RCVERB1 watch.@RCVERB2"}],
    [["filler", 14], ds, {s: "Well I know how you feel."}],
    [["filler", 15], ds, {s: "And that was pretty scandalous."}],
    [["StimZero.OriginalThat",[16,7]], ds, {s: "Well, most of what they are talking about in Washington is the crime problems@NPHEAD1 they@RCSUBJ1 are@RCVERB1 having@RCVERB2 there."},
        qs, {q: "Are they ignoring the drug problem that they have in Washington D.C?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalThat",[16,7]], ds, {s: "Well, most of what they are talking about in Washington is the crime problems@NPHEAD1 that@COMPL they@RCSUBJ1 are@RCVERB1 having@RCVERB2 there."},
        qs, {q: "Are they ignoring the drug problem that they have in Washington D.C?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 17], ds, {s: "And you know how you put the headphones on and listen to it."},
        qs, {q: "Do you put on headphones to hear the music?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler", 18], ds, {s: "So it was like I had to go all the way back to the main drain and start all over."},
        qs, {q: "Was it necessary to start over again?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimZero.OriginalZero",[19,7]], ds, {s: "Hers was the first one@NPHEAD1 I@RCSUBJ1 got.@RCVERB1"}],
    [["StimThat.OriginalZero",[19,7]], ds, {s: "Hers was the first one@NPHEAD1 that@COMPL I@RCSUBJ1 got.@RCVERB1"}],
    [["filler", 20], ds, {s: "Two ways was seventy miles."},
        qs, {q: "Was it a seventy mile travel for two ways?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler", 21], ds, {s: "That is always good."}],
    [["StimThat.OriginalThat",[22,7]], ds, {s: "I went out to Payless Cashways here a couple of days ago and got me one of those little can crushers@NPHEAD1 that@COMPL I@RCSUBJ1 could@RCVERB1 put@RCVERB2 on the wall."}],
    [["StimZero.OriginalThat",[22,7]], ds, {s: "I went out to Payless Cashways here a couple of days ago and got me one of those little can crushers@NPHEAD1 I@RCSUBJ1 could@RCVERB1 put@RCVERB2 on the wall."}],
    [["filler", 23], ds, {s: "But I do not always get direct sun except in certain spots."},
        qs, {q: "Is there direct sun everywhere?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalZero",[24,7]], ds, {s: "I can remember the first year@NPHEAD1 that@COMPL I@RCSUBJ1 moved@RCVERB1 here."}],
    [["StimZero.OriginalZero",[24,7]], ds, {s: "I can remember the first year@NPHEAD1 I@RCSUBJ1 moved@RCVERB1 here."}],
    [["filler", 25], ds, {s: "And when you are writing up budgets, you wonder, okay, how much money do we need?"},
        qs, {q: "When writing budgets, is the amount of money needed already known? " , hasCorrect: "No", randomOrder: false}],
    [["filler", 26], ds, {s: "Ours is on the small end."}],
    [["filler", 27], ds, {s: " I hope I do not see a lot more single moms."},
        qs, {q: "Is the abundance of single moms a good sign?" , hasCorrect: "No", randomOrder: false}],
    [["StimZero.OriginalThat",[28,7]], ds, {s: "I have a few favorites@NPHEAD1 I@RCSUBJ1 use@RCVERB1 more than others."}],
    [["StimThat.OriginalThat",[28,7]], ds, {s: "I have a few favorites@NPHEAD1 that@COMPL I@RCSUBJ1 use@RCVERB1 more than others."}],
    [["filler", 29], ds, {s: "And it is so easy."}],
    [["filler", 30], ds, {s: "We, as I said, living in an area of Washington,_D.C., we definitely see this."},
        qs, {q: "Are there no residential areas in Washington, D.C.?" , hasCorrect: "No", randomOrder: false}],
    [["StimZero.OriginalZero",[31,7]], ds, {s: "And it is everything@NPHEAD1 it@RCSUBJ1 is@RCVERB1 supposed@RCVERB2 to be."},
        qs, {q: "Is it living up to expectations?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalZero",[31,7]], ds, {s: "And it is everything@NPHEAD1 that@COMPL it@RCSUBJ1 is@RCVERB1 supposed@RCVERB2 to be."},
        qs, {q: "Is it living up to expectations?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler", 32], ds, {s: "I was working in Cameroon, Africa."},
        qs, {q: "Is Cameroon in Africa?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler", 33], ds, {s: "But we went that way."}],
    [["filler", 34], ds, {s: "And then he just started doing it."}],
    [["StimThat.OriginalThat",[35,7]], ds, {s: "But it is not as many people@NPHEAD1 there that@COMPL I@RCSUBJ1 really enjoy@RCVERB1 seeing."}],
    [["StimZero.OriginalThat",[35,7]], ds, {s: "But it is not as many people@NPHEAD1 there I@RCSUBJ1 really enjoy@RCVERB1 seeing."}],
    [["filler", 36], ds, {s: "They would have collapsed."}],
    [["filler", 37], ds, {s: "When I was getting robbed down in Florida, I was really considering electrifying doors."},
        qs, {q: "Are electrified doors options for preventing robberies?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalZero",[38,7]], ds, {s: "I mean I honestly do not really think I could have done much better than I did in the school@NPHEAD1 system@NPHEAD2 that@COMPL I@RCSUBJ1 was@RCVERB1 in.@RCVERB2"}],
    [["StimZero.OriginalZero",[38,7]], ds, {s: "I mean I honestly do not really think I could have done much better than I did in the school@NPHEAD1 system@NPHEAD2 I@RCSUBJ1 was@RCVERB1 in.@RCVERB2"}],
    [["filler", 39], ds, {s: "Well, I do not know how much you can learn."}],
    [["filler", 40], ds, {s: "So we still feel very new."}],
    [["StimZero.OriginalThat",[41,7]], ds, {s: "But the the ice storms really are stressful on all the plants@NPHEAD1 we@RCSUBJ1 have@RCVERB1 around."},
        qs, {q: "Are the ice storms nice to the plants that are around?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalThat",[41,7]], ds, {s: "But the the ice storms really are stressful on all the plants@NPHEAD1 that@COMPL we@RCSUBJ1 have@RCVERB1 around."},
        qs, {q: "Are the ice storms nice to the plants that are around?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 42], ds, {s: "Oh, in the oil business."}],
    [["filler", 43], ds, {s: "And there is just no time."},
        qs, {q: "Is there a lot of time?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalThat",[44,7]], ds, {s: "I have had two or three drug tests@NPHEAD1 that@COMPL I@RCSUBJ1 had@RCVERB1 to@RCVERB2 get@RCVERB3 before I could start working different jobs."},
        qs, {q: "Do some jobs require drug tests beforehand?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimZero.OriginalThat",[44,7]], ds, {s: "I have had two or three drug tests@NPHEAD1 I@RCSUBJ1 had@RCVERB1 to@RCVERB2 get@RCVERB3 before I could start working different jobs."},
        qs, {q: "Do some jobs require drug tests beforehand?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler", 45], ds, {s: "Maybe it is not drywall."}],
    [["StimZero.OriginalZero",[46,7]], ds, {s: "In the case@NPHEAD1 you@RCSUBJ1 were@RCVERB1 involved@RCVERB2 in@RCVERB3, you said it was just sort of a bank matter of some kind."}],
    [["StimThat.OriginalZero",[46,7]], ds, {s: "In the case@NPHEAD1 that@COMPL you@RCSUBJ1 were@RCVERB1 involved@RCVERB2 in@RCVERB3, you said it was just sort of a bank matter of some kind."}],
    [["filler", 47], ds, {s: "Anyone can go and vote."},
        qs, {q: "Can everybody vote?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler", 48], ds, {s: " I could easily envision that."}],
    [["StimThat.OriginalZero",[49,7]], ds, {s: "It was cute, but not the biggest laugh@NPHEAD1 that@COMPL I@RCSUBJ1 have@RCVERB1 seen.@RCVERB2"}],
    [["StimZero.OriginalZero",[49,7]], ds, {s: "It was cute, but not the biggest laugh@NPHEAD1 I@RCSUBJ1 have@RCVERB1 seen.@RCVERB2"}],
    [["filler", 50], ds, {s: "And then they said okay."}],
    [["StimZero.OriginalThat",[51,7]], ds, {s: "The U.S.is not the threat@NPHEAD1 we@RCSUBJ1 have@RCVERB1 made@RCVERB2 them out to be, even if they are saying that beneath the doors."},
        qs, {q: "Is the US the threat that they have been made out to be?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalThat",[51,7]], ds, {s: "The U.S.is not the threat@NPHEAD1 that@COMPL we@RCSUBJ1 have@RCVERB1 made@RCVERB2 them out to be, even if they are saying that beneath the doors."},
        qs, {q: "Is the US the threat that they have been made out to be?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 52], ds, {s: "He has gotten out."}],
    [["filler", 53], ds, {s: "Maybe this pre-group of people could decide where they could go from there."},
        qs, {q: "Should the pre-group of people fly somewhere?" , hasCorrect: "No", randomOrder: false}],
    [["StimZero.OriginalZero",[54,7]], ds, {s: "I think a lot of it is the families, the way@NPHEAD1 you@RCSUBJ1 were@RCVERB1 mentioning.@RCVERB2"}],
    [["StimThat.OriginalZero",[54,7]], ds, {s: "I think a lot of it is the families, the way@NPHEAD1 that@COMPL you@RCSUBJ1 were@RCVERB1 mentioning.@RCVERB2"}],
    [["filler", 55], ds, {s: "We have very windy winters and very cold."},
        qs, {q: "Are the winters warm?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 56], ds, {s: "But you actually hand quilted it yourself."},
        qs, {q: "Is it possible to quilt by hand?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalZero",[57,7]], ds, {s: "Actually, yesterday I ended up talking to somebody else from the same lab@NPHEAD1 that@COMPL I@RCSUBJ1 am@RCVERB1 in.@RCVERB2"}],
    [["StimZero.OriginalZero",[57,7]], ds, {s: "Actually, yesterday I ended up talking to somebody else from the same lab@NPHEAD1 I@RCSUBJ1 am@RCVERB1 in.@RCVERB2"}],
    [["filler", 58], ds, {s: "Well, my wife is from Galveston."}],
    [["filler", 59], ds, {s: "Well, it was nice talking to you."}],
    [["StimThat.OriginalThat",[60,7]], ds, {s: "There is lots of things@NPHEAD1 that@COMPL we@RCSUBJ1 do@RCVERB1 not@RCVERB2 get@RCVERB3 told@RCVERB4 for good reason."}],
    [["StimZero.OriginalThat",[60,7]], ds, {s: "There is lots of things@NPHEAD1 we@RCSUBJ1 do@RCVERB1 not@RCVERB2 get@RCVERB3 told@RCVERB4 for good reason."}],
    [["filler", 61], ds, {s: "We have a set amount."},
        qs, {q: "Is there a variable amount?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 62], ds, {s: "I do the easy stuff now."}],
    [["StimZero.OriginalZero",[63,7]], ds, {s: "She is up in the house and talked to my mother the whole time@NPHEAD1 we@RCSUBJ1 were@RCVERB1 out@RCVERB2 hunting and stuff."}],
    [["StimThat.OriginalZero",[63,7]], ds, {s: "She is up in the house and talked to my mother the whole time@NPHEAD1 that@COMPL we@RCSUBJ1 were@RCVERB1 out@RCVERB2 hunting and stuff."}],
    [["filler", 64], ds, {s: "A judge, I think, would be the most appropriate person to be able to sentence somebody since they do it over and over again every day."},
        qs, {q: "Is a judge a bad person to sentence someone?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 65], ds, {s: "So it is boring."}],
    [["StimThat.OriginalThat",[66,7]], ds, {s: "And as far as them entertaining the rights@NPHEAD1 that@COMPL they@RCSUBJ1 should@RCVERB1 have.@RCVERB2"}],
    [["StimZero.OriginalThat",[66,7]], ds, {s: "And as far as them entertaining the rights@NPHEAD1 they@RCSUBJ1 should@RCVERB1 have.@RCVERB2"}],
    [["filler", 67], ds, {s: "I work in the computer lab at school."},
        qs, {q: "Are there computer labs in some schools?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler", 68], ds, {s: "I don't know if I have been spoiled."}],
    [["StimZero.OriginalThat",[69,7]], ds, {s: "I think some of these people@NPHEAD1 they@RCSUBJ1 claim@RCVERB1 as middle eastern experts do not have a clue sometimes."},
        qs, {q: "Are all the people that are claimed as Middle East experts very knowledgable?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalThat",[69,7]], ds, {s: "I think some of these people@NPHEAD1 that@COMPL they@RCSUBJ1 claim@RCVERB1 as middle eastern experts do not have a clue sometimes."},
        qs, {q: "Are all the people that are claimed as Middle East experts very knowledgable?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 70], ds, {s: "And my wife did this part."},
        qs, {q: "Did the husband do everything?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 71], ds, {s: "There is a thing called Pfeiffer Rim."},
        qs, {q: "Is there something called Pfeiffer Rim?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalZero",[72,7]], ds, {s: "Because if we do not want that to happen, all@NPHEAD1 that@COMPL we@RCSUBJ1 have@RCVERB1 to@RCVERB2 do@RCVERB3 is just call the phone company and say look, I want my name unlisted."},
        qs, {q: "Is is true that to get more privacy all that you have to do is call up the phone company and become unlisted?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimZero.OriginalZero",[72,7]], ds, {s: "Because if we do not want that to happen, all@NPHEAD1 we@RCSUBJ1 have@RCVERB1 to@RCVERB2 do@RCVERB3 is just call the phone company and say look, I want my name unlisted."},
        qs, {q: "Is is true that to get more privacy all that you have to do is call up the phone company and become unlisted?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler", 73], ds, {s: "And it was really only acceptable if you were engaged and planning to get married in the relatively near future."}],
    [["filler", 74], ds, {s: "Well, they started out really bad."},
        qs, {q: "Did they start out really bad?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler", 75], ds, {s: "Well, they are dangerous."}],
    [["StimZero.OriginalThat",[76,7]], ds, {s: "They convicted him of a robbery@NPHEAD1 he@RCSUBJ1 could@RCVERB1 not@RCVERB2 physically@RCVERB3 have@RCVERB4 been@RCVERB5 able@RCVERB6 to@RCVERB7 commit.@RCVERB8"}],
    [["StimThat.OriginalThat",[76,7]], ds, {s: "They convicted him of a robbery@NPHEAD1 that@COMPL he@RCSUBJ1 could@RCVERB1 not@RCVERB2 physically@RCVERB3 have@RCVERB4 been@RCVERB5 able@RCVERB6 to@RCVERB7 commit.@RCVERB8"}],
    [["filler", 77], ds, {s: "But I am trying to work up to three miles."}],
    [["filler", 78], ds, {s: "I was working in an office right after I got out of high school."},
        qs, {q: "Can people find work with only a high school degree?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalThat",[79,7]], ds, {s: "All of her animals@NPHEAD1 that@COMPL she@RCSUBJ1 ever had@RCVERB1 were adopted."},
        qs, {q: "Did she adopt all the animals she owned?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimZero.OriginalThat",[79,7]], ds, {s: "All of her animals@NPHEAD1 she@RCSUBJ1 ever had@RCVERB1 were adopted."},
        qs, {q: "Did she adopt all the animals she owned?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler", 80], ds, {s: "We are late twenties."}],
    [["filler", 81], ds, {s: "We kind of give her the third degree."}],
    [["StimZero.OriginalZero",[82,7]], ds, {s: "She told me some of the things@NPHEAD1 you@RCSUBJ1 can@RCVERB1 do.@RCVERB2"}],
    [["StimThat.OriginalZero",[82,7]], ds, {s: "She told me some of the things@NPHEAD1 that@COMPL you@RCSUBJ1 can@RCVERB1 do.@RCVERB2"}],
    [["filler", 83], ds, {s: "Recycled paper is actually very expensive."},
        qs, {q: "Is recycled paper cheap?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 84], ds, {s: "Oh, would it not though? "}],
    [["StimThat.OriginalZero",[85,7]], ds, {s: "Al Jarreau, he is somebody@NPHEAD1 that@COMPL I@RCSUBJ1 like.@RCVERB1"},
        qs, {q: "Is Al Jarreau a man that is disliked by this person?" , hasCorrect: "No", randomOrder: false}],
    [["StimZero.OriginalZero",[85,7]], ds, {s: "Al Jarreau, he is somebody@NPHEAD1 I@RCSUBJ1 like.@RCVERB1"},
        qs, {q: "Is Al Jarreau a man that is disliked by this person?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 86], ds, {s: "I am not sure what we are going to have to do, whether we have three separate containers."},
        qs, {q: "Does somebody know what to do for sure?" , hasCorrect: "No", randomOrder: false}],
    [["filler", 87], ds, {s: "But I have been unable to do that, because I hurt my foot about five years ago."},
        qs, {q: "Can all activities be done with a hurt foot?" , hasCorrect: "No", randomOrder: false}],
    [["StimZero.OriginalThat",[88,7]], ds, {s: "And the rates@NPHEAD1 we@RCSUBJ1 keep@RCVERB1 paying@RCVERB2 seem to keep increasing."},
        qs, {q: "Do the rates keep going up?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalThat",[88,7]], ds, {s: "And the rates@NPHEAD1 that@COMPL we@RCSUBJ1 keep@RCVERB1 paying@RCVERB2 seem to keep increasing."},
        qs, {q: "Do the rates keep going up?" , hasCorrect: "Yes", randomOrder: false}],
    ["contact", "Message", {consentRequired: false, html: {include: "contacts.html"}}],
    ["code", "Message", {consentRequired: false, html: {include: "code.html"}}]
];

