function gladiatorExpenses(fights, helmet, sword, shield, armor) {
    let lostFights = fights;
    let helmetPrice = helmet;
    let swordPrice = sword;
    let shieldPrice = shield;
    let armorPrice = armor;

    let brokenShield = 0
    let expenses = 0;

    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
        if (currentFight % 2 === 0) {
            expenses += helmetPrice;
        }
        if (currentFight % 3 === 0) {
            expenses += swordPrice
        }
        if (currentFight % 2 === 0 && currentFight % 3 === 0) {
            expenses += shieldPrice;
            brokenShield++;
            if (brokenShield % 2 === 0) {
                expenses += armorPrice
            }

        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)