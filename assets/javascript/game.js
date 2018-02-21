$(document).ready(function () {

    function character() {
        this.name = "";
        this.healthPoints = 0;
        this.attackPower = 0;
        this.counterAttackPower = 0;
    };

    var fighter = [];
    var enemies = [];
    var yourPicture;

    fighter[0] = new character();
    fighter[0].name = "Luke Skywalker";
    fighter[0].counterAttackPower = 5;

    fighter[1] = new character();
    fighter[1].name = "Rey";
    fighter[1].counterAttackPower = 10;

    fighter[2] = new character();
    fighter[2].name = "Kylo Ren";
    fighter[2].counterAttackPower = 15;

    fighter[3] = new character();
    fighter[3].name = "Darth Vader";
    fighter[3].counterAttackPower = 20;

    var yourCharacter = {};
    var yourCharacterDiv;
    var defender = {};

    function initialize() {
        // reset healthPoints and attackPower for each fighter
        fighter[0].healthPoints = 100; // Luke
        fighter[0].attackPower = 8;

        fighter[1].healthPoints = 120; // Rey
        fighter[1].attackPower = 9;

        fighter[2].healthPoints = 150; // Kylo
        fighter[2].attackPower = 10;

        fighter[3].healthPoints = 180; // Vader
        fighter[3].attackPower = 11;
    }
    function createYourCharacter(yourCharacter, yourPicture) {
        console.log("yourCharacter " + yourCharacter);
        $("#choose-character").empty();
        for (var i = 0; i < fighter.length; i++) {
            if (fighter[i].name !== yourCharacter.name) {
                enemies.push(fighter[i]);
                console.log("Enemies " + enemies);
            }
        }
        yourCharacterDiv = $('<figure><figcaption id="your-name">' + yourCharacter.name +
            '</figcaption>' + '<img id="yourPic" src="../images/' + yourPicture + '" alt="' + yourCharacter.name + '"><figcaption id="your-health-points">' + yourCharacter.healthPoints + '</figcaption');
        console.log(yourCharacterDiv);
        $("#your-character").append(yourCharacterDiv);
    }

    initialize();

    $("<body>").on("click", "#luke-skywalker", function () {
        yourCharacter = fighter[0];
        createYourCharacter(yourCharacter, "luke-skywalker.JPG");
    }).on("click", "#rey", function () {
        yourCharacter = fighter[1];
        createYourCharacter(yourCharacter, "rey.JPG");
    }).on("click", "#kylo-ren", function () {
        yourCharacter = fighter[2];
        createYourCharacter(yourCharacter, "kylo-ren.JPG");
    }).on("click", "#darth-vader", function () {
        yourCharacter = fighter[3];
        createYourCharacter(yourCharacter, "darth-vader.JPG");
    });
});
