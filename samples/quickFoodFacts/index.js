'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.echo-sdk-ams.app.4d30865f-95da-4a3c-8adb-d1f06148a684";
var SKILL_NAME = 'Quick Food Facts';

/**
 * Array containing food facts.
 */
 var FACTS = [
     "A pound cake gets its name from its recipe: One pound each of butter, eggs, sugar, and flour.",
     "Pure, natural honey does not go bad, it is one of the only foods that lasts forever.",
     "Salt is used to both flavor and preserve foods.",
     "A tomato is a fruit. Knowledge is knowing it's a fruit, wisdom is not putting it into a fruit salad.",
     "One lemon contains more than 100% of the reccomended daily intake of vitamin C.",
     "Almost all commercially sold cheese in the united states is pasteurized.",
     "A cluster of bananas is called a hand, and a single banana is called a finger.",
     "A watermelon is over ninety two percent water by weight.",
     "It takes up to six hundred and sixty gallons of water to produce a hamburger.",
     "More than half of all grains grown in the United States is fed to livestock.",
     "Oysters are considered to be an aphrodisiac, boosting one's libido.",
     "About seventy percent of packaged foods contain some form of corn.",
     "Throughout history, cultures have burned sage as a means of purifying their surroundings and self."
 ];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random food fact from the food facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a food fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
