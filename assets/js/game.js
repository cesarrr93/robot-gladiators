var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", " AMy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators!");

var fight = function (enemyName) {

    //Repeat and execute as long as the enemy robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {
        //asking user if they want to fight or run
        var promtFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to "skip" confirm and then stop the loop
        if (promtFight === "skip" || promtFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {

                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // remove enemy's health by substracting the amount set in the playerAttact variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Substracts the value of enemyAttack from the value of playerHealth and updates the value of the playerHealth variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " heealth left.");
        }
    }
};

/* // if palyer chooses to fight, then fight
    if (promtFight === "fight" || promtFight === "FIGHT") {

    //if no (false), ask questions ask question again by running fight() again
    else {
        fight();
    }
    window.alert(playerName + " has chosen to skip fight!");
} else {
    window.alert("You need to pick a valid option. try again!");
}
}

}; */
for (var i = 0; i < enemyNames.length; i++) {
    //Restoring full health for upcoming robot
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // call fight function with enemy robot
    fight(enemyNames[i]);
}
