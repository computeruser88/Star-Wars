$(document).ready(function () {

    function character() {
        this.name = "";
        this.healthPoints = 0;
        this.attackPower = 0;
        this.counterAttackPower = 0;
        this.picture = "";
    };

    var fighter = [];
    var enemies = [];
    var yourPicture;

    fighter[0] = new character();
    fighter[0].name = "Luke Skywalker";
    fighter[0].counterAttackPower = 5;
    fighter[0].picture = '<img src="assets/images/luke-skywalker.JPG">';

    fighter[1] = new character();
    fighter[1].name = "Rey";
    fighter[1].counterAttackPower = 10;
    fighter[1].picture = '<img src="assets/images/rey.JPG">';

    fighter[2] = new character();
    fighter[2].name = "Kylo Ren";
    fighter[2].counterAttackPower = 15;
    fighter[2].picture = '<img src="assets/images/kylo-ren.JPG">';

    fighter[3] = new character();
    fighter[3].name = "Darth vader";
    fighter[3].counterAttackPower = 20;
    fighter[3].picture = '<img src="assets/images/darth-vader.JPG">';

    var yourCharacter = {};
    var yourCharacterDiv;
    var defender = {};
    var enemyDiv = [];

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
    function createAllCharacters(yourCharacter, yourPicture) {
        console.log("yourCharacter " + yourCharacter);
        $("#choose-character").empty();

        // add enemies
        for (var i = 0; i < fighter.length; i++) {
            if (fighter[i].name !== yourCharacter.name) {
                enemies.push(fighter[i]);
                console.log("Enemies " + enemies);
            }
        }
        yourCharacterDiv = $("<div>");
        
        yourCharacterDiv.html('<figure id="you"><figcaption id="your-name">' + yourCharacter.name +
            '</figcaption>' + yourPicture + '<figcaption>' + yourCharacter.healthPoints + '</figcaption>');
        console.log(yourCharacterDiv);

        $("#your-character").html(yourCharacterDiv);

        // create divs for all enemies
        for (var i = 0; i < fighter.length; i++) {
            if (fighter[i].name !== yourCharacter.name) {
                // create enemy div and append to #enemies-to-attack
                enemyDiv[i] = $("<div>");
                enemyDiv[i].html('<figure class="enemy"><figcaption class="enemy-name">' + yourCharacter.name +
                '</figcaption>' + fighter[i].picture + '<figcaption class="enemy-health-points">' + fighter[i].healthPoints + '</figcaption>');
                $("#enemies-to-attack").append(enemyDiv[i]);
            }
        }
    }

    initialize();

    $("#choose-character").on("click", "#choose-luke-skywalker", function () {
        yourCharacter = fighter[0];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/luke-skywalker.JPG">');
    }).on("click", "#choose-rey", function () {
        yourCharacter = fighter[1];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/rey.JPG">');
    }).on("click", "#choose-kylo-ren", function () {
        yourCharacter = fighter[2];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/kylo-ren.JPG">');
    }).on("click", "#choose-darth-vader", function () {
        yourCharacter = fighter[3];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/darth-vader.JPG">');
    });
});
