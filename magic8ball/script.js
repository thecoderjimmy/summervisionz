// JQuery
$(document).ready(function () {
    
    // Hides the answer when the page loads
    $("#answer").hide();
    
    var magic8Ball = {};
    // Magic8Ball answer list
    magic8Ball.answers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams"];
    
    magic8Ball.askQuestion = function (question) {
        // Shakes the Magic8Ball
        $("#8ball").effect("shake");
        
        // Fades the answer into the screen
        $("#answer").css('visibility','visible')
        $("#answer").fadeIn(4000);
        
        // Changes the image to the answerside.png
        $("#8ball").attr("src", "img/answerside.png");
        
        // Create random index number
        var indexNumber = Math.floor(Math.random() * this.answers.length);
        var answer = this.answers[indexNumber];
        
        $("#answer").text(answer);
        
        // what is this for?? -> console.log(question);
        // Prints questions and answer in the page
        console.log(answer);
    };
    
    var onClick = function () {
        // Hides the answer when user clicks button
        $("#answer").hide();
        
        // Changes the image to the 8side.png
        $("#8ball").attr("src", "img/8side.png");
        
        // Delays the code inside so that the image can settle in
        setTimeout(
            function () {
            // Prompts user to input question in pop-up window
            var question = prompt("Ask me any Y/N question!");
            magic8Ball.askQuestion(question);
            }, 500);
        
    }
    
    $("#questionButton").click(onClick);
    
});