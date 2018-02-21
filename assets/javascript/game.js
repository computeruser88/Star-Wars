$document.ready(function () {

    function character() {
        this.name = "";
        this.healthPoints = 0;
        this.attackPower = 0;
        this.counterAttackPower = 0;
        this.picture = "";
    };

    var fighter = [];
    
    function initialize() {
        fighter[0] = new character();
        fighter[0].name = "Luke Skywalker";
        fighter[0].healthPoints = 100;
        fighter[0].attackPower = 7;
        fighter[0].counterAttackPower = 5;

        fighter[1] = new character();
        fighter[1].name = "Rey";
        fighter[1].healthPoints = 120;
        fighter[1].attackPower = 8;
        fighter[1].counterAttackPower = 10;

        fighter[2] = new character();
        fighter[2].name = "Kylo Ren";
        fighter[2].healthPoints = 150;
        fighter[2].attackPower = 9;
        fighter[2].counterAttackPower = 20;

        fighter[3] = new character();
        fighter[3].name = "Darth Vader";
        fighter[3].healthPoints = 180;
        fighter[3].attackPower = 10;
        fighter[3].counterAttackPower = 25;
    }

    initialize();

    $("#choose-character").on("click", "#luke-skywalker", function () {

    }).on("click", "#rey", function () {

    }).on("click", "#kylo-ren", function () {

    }).on("click", "#darth-vader", function () {

    });
});
