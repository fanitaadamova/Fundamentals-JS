function heroesOfCodeAndLogic(input) {

    let array = input.slice();
    let numOfHeroes = Number(array.shift());
    let heroesInfo = {};

    for (let i = 0; i < numOfHeroes; i++) {
        const line = array.shift().split(' ');
        let nameOfHero = line[0];
        let hitPoints = line[1];
        let manaPoints = line[2];

        heroesInfo[nameOfHero] = [hitPoints, manaPoints];
    }

    let commands = array.shift();

    while (commands !== 'End') {

        let currentLine = commands.split(' - ');
        let currentCommand = currentLine[0];
        let nameOfHero = currentLine[1];

        let [hitPoints, manaPoints] = heroesInfo[nameOfHero];
        hitPoints = Number(hitPoints)
        manaPoints = Number(manaPoints);

        switch (currentCommand) {
            case 'CastSpell':
                let manaPointsNeeded = Number(currentLine[2]);
                let nameOfSpell = currentLine[3];


                if (manaPoints < manaPointsNeeded) {
                    console.log(`${nameOfHero} does not have enough MP to cast ${nameOfSpell}!`);
                } else {
                    manaPoints -= manaPointsNeeded;
                    console.log(`${nameOfHero} has successfully cast ${nameOfSpell} and now has ${manaPoints} MP!`);
                    heroesInfo[nameOfHero] = [hitPoints, manaPoints];
                }
                break;

            case 'TakeDamage':
                let damage = Number(currentLine[2]);
                let attacker = currentLine[3];

                if (hitPoints - damage <= 0) {
                    console.log(`${nameOfHero} has been killed by ${attacker}!`);
                    delete heroesInfo[nameOfHero];
                } else {
                    hitPoints -= damage;
                    console.log(`${nameOfHero} was hit for ${damage} HP by ${attacker} and now has ${hitPoints} HP left!`);
                    heroesInfo[nameOfHero] = [hitPoints, manaPoints];
                }
                break;

            case 'Recharge':
                let amount = Number(currentLine[2]);
                let initialManaPoints = manaPoints;
                manaPoints += amount;

                if (manaPoints > 200) {
                    manaPoints = 200;
                }
                console.log(`${nameOfHero} recharged for ${(manaPoints - initialManaPoints)} MP!`);

                heroesInfo[nameOfHero] = [hitPoints, manaPoints];
                break;

            case 'Heal':
                let amountHeal = Number(currentLine[2]);
                let initialHitPoints = hitPoints;
                hitPoints += amountHeal;

                if (hitPoints > 100) {
                    hitPoints = 100;
                }
                console.log(`${nameOfHero} healed for ${(hitPoints - initialHitPoints)} HP!`);

                heroesInfo[nameOfHero] = [hitPoints, manaPoints];
                break;
        }
        commands = array.shift();
    }

    for (const nameOfHero in heroesInfo) {
        let [hitPoints, manaPoints] = heroesInfo[nameOfHero];
        console.log(`${nameOfHero}`);
        console.log(`  HP: ${hitPoints}`);
        console.log(`  MP: ${manaPoints}`);
    }

}
heroesOfCodeAndLogic(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
])