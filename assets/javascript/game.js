$(document).ready(function () {

    function character() {
        this.name = "";
        this.healthPoints = 0;
        this.attackPower = 0;
        this.counterAttackPower = 0;
        this.picture = "";
        this.isDead = false;
    };

    var fighter = [];
    var enemies = [];
    var yourPicture;
    var defender = {};

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
    fighter[2].counterAttackPower = 20;
    fighter[2].picture = '<img src="assets/images/kylo-ren.JPG">';

    fighter[3] = new character();
    fighter[3].name = "Darth vader";
    fighter[3].counterAttackPower = 25;
    fighter[3].picture = '<img src="assets/images/darth-vader.JPG">';

    var yourCharacter = {};
    var yourCharacterDiv = $("<div>");
    var defender = {};
    var defenderDiv = $("<div>");
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

        defender = {};
        yourCharacter = {};
        enemies.length = 0;
    }
    function createAllCharacters(yourCharacter, yourPicture) {
        console.log("yourCharacter " + yourCharacter);
        $("#choose-character").empty();

        // add enemies
        for (var i = 0; i < fighter.length; i++) {
            if (fighter[i].name !== yourCharacter.name) {
                enemies.push(fighter[i]);
                console.log("Enemy " + enemies);
            }
        }
        // create yourCharacterDiv
        yourCharacterDiv.html('<figure id="you"><figcaption id="your-name">' + yourCharacter.name +
            '</figcaption>' + yourPicture + '<figcaption id="your-health-points">' + yourCharacter.healthPoints + '</figcaption>');
        console.log(yourCharacterDiv);

        $("#your-character").html(yourCharacterDiv);

        // create divs for all enemies
        for (var i = 0; i < enemies.length; i++) {
            // create enemy div and append to #enemies-to-attack
            console.log("enemies[i].name " + enemies[i].name);
            enemyDiv[i] = $("<div>");
            enemyDiv[i].html('<figure class="enemy"><figcaption class="enemy-name">' + enemies[i].name +
                '</figcaption>' + enemies[i].picture + '<figcaption class="enemy-health-points">' + enemies[i].healthPoints + '</figcaption>');
            $("#enemies-to-attack").append(enemyDiv[i]);
            enemies[i].isDead = false;
        }
    }

    function chooseFirstDefender() {
        $("#enemies-to-attack").on("click", enemyDiv[0], function () {
            $(enemyDiv[0]).remove();
            defenderDiv.html('<figure class="defender"><figcaption class="defender-name">' + enemies[0].name +
                '</figcaption>' + enemies[0].picture + '<figcaption class="defender-health-points">' + enemies[0].healthPoints + '</figcaption>');
            $("#defender").append(defenderDiv);
            defender = enemies[0];
            enemies.splice(0, 1);
            for (var i = 0; i < enemies.length; i++) {
                console.log("enemies[i].name " + enemies[i].name);
                // create enemy div and append to #enemies-to-attack
                enemyDiv[i] = $("<div>");
                enemyDiv[i].html('<figure class="enemy"><figcaption class="enemy-name">' + enemies[i].name +
                    '</figcaption>' + enemies[i].picture + '<figcaption class="enemy-health-points">' + enemies[i].healthPoints + '</figcaption>');
                $("#enemies-to-attack").append(enemyDiv[i]);
            }
            return defender;
        });
        $("#enemies-to-attack").on("click", enemyDiv[1], function () {
            $(enemyDiv[1]).remove();
            defenderDiv.html('<figure class="defender"><figcaption class="defender-name">' + enemies[1].name +
                '</figcaption>' + enemies[1].picture + '<figcaption class="defender-health-points">' + enemies[1].healthPoints + '</figcaption>');
            $("#defender").append(defenderDiv);
            defender = enemies[1];
            enemies.splice(1, 1);
            for (var i = 0; i < enemies.length; i++) {
                // create enemy div and append to #enemies-to-attack
                console.log("enemies[i].name " + enemies[i].name);
                enemyDiv[i] = $("<div>");
                enemyDiv[i].html('<figure class="enemy"><figcaption class="enemy-name">' + enemies[i].name +
                    '</figcaption>' + enemies[i].picture + '<figcaption class="enemy-health-points">' + enemies[i].healthPoints + '</figcaption>');
                $("#enemies-to-attack").append(enemyDiv[i]);
            }
            return defender;
        });
        $("#enemies-to-attack").on("click", enemyDiv[2], function () {
            $(enemyDiv[2]).remove();
            defenderDiv.html('<figure class="defender"><figcaption class="defender-name">' + enemies[2].name +
                '</figcaption>' + enemies[2].picture + '<figcaption class="defender-health-points">' + enemies[2].healthPoints + '</figcaption>');
            $("#defender").append(defenderDiv);
            defender = enemies[2];
            enemies.splice(2, 1);
            for (var i = 0; i < enemies.length; i++) {
                // create enemy div and append to #enemies-to-attack
                console.log("enemies[i].name " + enemies[i].name);
                enemyDiv[i] = $("<div>");
                enemyDiv[i].html('<figure class="enemy"><figcaption class="enemy-name">' + enemies[i].name +
                    '</figcaption>' + enemies[i].picture + '<figcaption class="enemy-health-points">' + enemies[i].healthPoints + '</figcaption>');
                $("#enemies-to-attack").append(enemyDiv[i]);
            }
            return defender;
        });
    }

    function chooseSecondDefender() {
        $("#enemies-to-attack").on("click", enemyDiv[0], function () {
            $(enemyDiv[0]).remove();
            defenderDiv.html('<figure class="defender"><figcaption class="defender-name">' + enemies[0].name +
                '</figcaption>' + enemies[0].picture + '<figcaption class="defender-health-points">' + enemies[0].healthPoints + '</figcaption>');
            $("#defender").append(defenderDiv);
            defender = enemies[0];
            enemies.splice(0, 1);
            return defender;
        }).on("click", enemyDiv[1], function () {
            $(enemyDiv[1]).remove();
            defenderDiv.html('<figure class="defender"><figcaption class="defender-name">' + enemies[1].name +
                '</figcaption>' + enemies[1].picture + '<figcaption class="defender-health-points">' + enemies[1].healthPoints + '</figcaption>');
            $("#defender").append(defenderDiv);
            defender = enemies[1];
            enemies.splice(1, 1);
            return defender;
        });
    }

    function chooseFinalDefender() {
        $("#enemies-to-attack").on("click", enemyDiv[0], function () {
            $(enemyDiv[0]).remove();
            defenderDiv.html('<figure class="defender"><figcaption class="defender-name">' + enemies[0].name +
                '</figcaption>' + enemies[0].picture + '<figcaption class="defender-health-points">' + enemies[0].healthPoints + '</figcaption>');
            $("#defender").append(defenderDiv);
            defender = enemies[0];
            enemies.length = 0;
            return defender;
        });
    }

    function fight(yourCharacter, defender) {
        $("<button>").on("click", "#attack", function () {
            // attack first, counterattack second, update message third
            defender.healthPoints = defender.healthPoints - yourCharacter.attackPower;
            $("#message").text("You attacked " + defender.name + " for " + yourCharacter.attackPower + " damage.");
            yourCharacter.attackPower += 8; // increment your attackPower
            if (defender.healthPoints <= 0) {
                defender.isDead = true;
                $(defenderDiv).remove();
            }
            // counterattack
            yourCharacter.healthPoints -= defender.counterAttackPower;
            $("#your-health-points").text(yourCharacter.healthPoints);
            if (yourCharacter.healthPoints <= 0) {
                yourCharacter.isDead = true;
            } else {
                $("#message").append("<br>" + defender.name + " attacked you back for " + defender.counterAttackPower + " damage.");
            }
        });
    }

    initialize();

    $("#choose-character").on("click", "#choose-luke-skywalker", function () {
        yourCharacter = fighter[0];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/luke-skywalker.JPG" alt="Luke Skywalker">');
        fight(yourCharacter, chooseFirstDefender());
    }).on("click", "#choose-rey", function () {
        yourCharacter = fighter[1];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/rey.JPG" alt="Rey">');
        fight(yourCharacter, chooseFirstDefender());
    }).on("click", "#choose-kylo-ren", function () {
        yourCharacter = fighter[2];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/kylo-ren.JPG" alt="Kylo Ren">');
        fight(yourCharacter, chooseFirstDefender());
    }).on("click", "#choose-darth-vader", function () {
        yourCharacter = fighter[3];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/darth-vader.JPG" alt="Darth Vader">');
        fight(yourCharacter, chooseFirstDefender());
    });
});
