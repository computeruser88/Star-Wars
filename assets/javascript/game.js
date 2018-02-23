$(document).ready(function () {

    function character() {
        this.name = "";
        this.healthPoints = 0;
        this.attackPower = 0;
        this.counterAttackPower = 0;
        this.picture = "";
        this.isDead = false;
        this.isDefender = false;
    };

    var fighter = [];
    var enemies = [];
    var yourPicture;
    var defender = {};

    fighter[0] = new character();
    fighter[0].name = "Luke Skywalker";
    fighter[0].counterAttackPower = 8;
    fighter[0].picture = '<img src="assets/images/luke-skywalker.JPG">';

    fighter[1] = new character();
    fighter[1].name = "Rey";
    fighter[1].counterAttackPower = 11;
    fighter[1].picture = '<img src="assets/images/rey.JPG">';

    fighter[2] = new character();
    fighter[2].name = "Kylo Ren";
    fighter[2].counterAttackPower = 25;
    fighter[2].picture = '<img src="assets/images/kylo-ren.JPG">';

    fighter[3] = new character();
    fighter[3].name = "Darth vader";
    fighter[3].counterAttackPower = 30;
    fighter[3].picture = '<img src="assets/images/darth-vader.JPG">';

    var yourCharacter = {};
    var yourCharacterDiv = $("<div>");
    var defender = {};
    var defenderIndex = -1;
    var defenderDiv = $("<div>");
    var enemyDiv = [];

    function initialize() {
        // reset healthPoints and attackPower for each fighter
        fighter[0].healthPoints = 100; // Luke
        fighter[0].attackPower = 8;

        fighter[1].healthPoints = 120; // Rey
        fighter[1].attackPower = 8;

        fighter[2].healthPoints = 150; // Kylo
        fighter[2].attackPower = 8;

        fighter[3].healthPoints = 170; // Vader
        fighter[3].attackPower = 8;

        defender = {};
        defenderIndex = -1;
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
        $("#message").text("You have chosen " + yourCharacter.name + ". Please select an enemy to fight.");
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].isDead = false;
            enemies[i].isDefender = false;
        }
        // create divs for all enemies
        redrawEnemiesToAttack();
    }
    function redrawEnemiesToAttack() {
        for (var i = 0; i < enemies.length; i++) {
            // create enemy div and append to #enemies-to-attack if not dead or defender
            if (enemies[i].isDead || enemies[i].isDefender) {
                continue;
            } else {
                console.log("enemies[i].name " + enemies[i].name);
                enemyDiv[i] = $("<div>");
                enemyDiv[i].html('<figure class="enemy"><figcaption class="enemy-name">' + enemies[i].name +
                    '</figcaption>' + enemies[i].picture + '<figcaption class="enemy-health-points">' + enemies[i].healthPoints + '</figcaption>');
                $("#enemies-to-attack").append(enemyDiv[i]);
            }
        }
    }

    function drawDefenderDiv(index) {
        defenderDiv.html('<figure class="defender"><figcaption class="defender-name">' + enemies[index].name +
            '</figcaption>' + enemies[index].picture + '<figcaption class="defender-health-points">' + enemies[index].healthPoints + '</figcaption>');
        $("#defender").html(defenderDiv);
        $("#message").text("You have chosen to fight " + enemies[index].name + ". Click attack to begin.");
    }

    function chooseDefender() {
        $(enemyDiv[0]).on("click", function () {
            $(this).remove();
            drawDefenderDiv(0);
            enemies[0].isDefender = true;
            console.log(enemies[0].healthPoints);
            fight(enemies[0], 0, enemies[0].healthPoints);
            return 0;
        });
        $(enemyDiv[1]).on("click", function () {
            $(this).remove();
            drawDefenderDiv(1);
            enemies[1].isDefender = true;
            console.log(enemies[1].healthPoints);
            fight(enemies[1], 1, enemies[1].healthPoints);
            return 1;
        });
        $(enemyDiv[2]).on("click", function () {
            $(this).remove();
            drawDefenderDiv(2);
            enemies[2].isDefender = true;
            console.log(enemies[2].healthPoints);
            fight(enemies[1], 2, enemies[1].healthPoints);
            return 2;
        });
    }

    function fight(defender, index, defenderHealthPoints) { //returns true for your victory and false for your defeat
        $("#attack").on("click", function () {
            // attack first, counterattack second, update message third
            defenderHealthPoints -= yourCharacter.attackPower;
            $(".defender-health-points").text(defenderHealthPoints);
            $("#message").text("You attacked " + enemies[index].name + " for " + yourCharacter.attackPower + " damage.");
            yourCharacter.attackPower += 10; // increment your attackPower
            if (defenderHealthPoints <= 0) {
                enemies[index].isDead = true;
                enemies[index].isDefender = false;
                $(defenderDiv).remove();
                $("#message").append("<br>You have defeated " + enemies[index].name + ".");
                var enemiesLeft = false;
                for (var i = 0; i < enemies.length; i++) {
                    if (enemies[i].isDead === false) {
                        enemiesLeft = true;
                    }
                }
                if (enemiesLeft === false) {
                    $("#message").append("<br>all enemies are dead!!!");
                    if (yourCharacter.name === "Rey" || yourCharacter.name === "Luke Skywalker"){
                        $("#message").append("<br>the jedi have prevailed over the empire!!!");
                    } else {
                        $("#message").append("<br>long live the galactic empire!!!");
                    }
                } else {
                    $("#message").append("<br>Now choose to fight another enemy.");
                }
            } else {
                // counterattack
                yourCharacter.healthPoints -= enemies[index].counterAttackPower;
                $("#your-health-points").text(yourCharacter.healthPoints);
                if (yourCharacter.healthPoints <= 0) {
                    yourCharacter.isDead = true;
                    $("#message").append("<br>You have been defeated... game over!!!");
                } else {
                    $("#message").append("<br>" + enemies[index].name + " attacked you back for " + enemies[index].counterAttackPower + " damage.");
                }
                if (yourCharacter.isDead === false && enemies[index].isDead === true) {
                    return true;
                } else if (yourCharacter.isDead) {
                    return false;
                }
            }
        });
    }

    $("#choose-character").on("click", "#choose-luke-skywalker", function () {
        initialize();
        yourCharacter = fighter[0];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/luke-skywalker.JPG" alt="Luke Skywalker">');
        chooseDefender();
    }).on("click", "#choose-rey", function () {
        initialize();
        yourCharacter = fighter[1];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/rey.JPG" alt="Rey">');
        chooseDefender();
    }).on("click", "#choose-kylo-ren", function () {
        initialize();
        yourCharacter = fighter[2];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/kylo-ren.JPG" alt="Kylo Ren">');
        chooseDefender();
    }).on("click", "#choose-darth-vader", function () {
        initialize();
        yourCharacter = fighter[3];
        createAllCharacters(yourCharacter, '<img id="your-pic" src="assets/images/darth-vader.JPG" alt="Darth Vader">');
        chooseDefender();
    });
});
