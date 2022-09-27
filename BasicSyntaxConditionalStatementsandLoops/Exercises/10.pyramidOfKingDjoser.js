function pyramidOfKingDjoser(baseWidth, increment) {
    //The bulk is made out of stone
    //the outer layer is made out of marble. 
    //Every fifth step’s outer layer is made out of lapis lazuli . 
    //The final step is made out of gold.
    //frst step of the pyramid has a width and length equal to the given base and every next step is reduced by 2 blocks
    // stone -  reduce the width and length by 2 blocks (one from each side), find its area, and multiply it by the increment. 
    // merble&lapis - find its perimeter and reduce it by 4, and multiply the result by the increment. 
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let count = 0;
    let steps = 0;


    for (let width = baseWidth; width >= 1; width -= 2) {
        steps++;
        if (width == 1 || width == 2) {
            let gold = (width * width) * increment;
            totalGold += gold;
            break;
        }

        let stone = (width - 2) * (width - 2) * increment;
        totalStone += stone;
        let decorative = ((width * 4) - 4) * increment;
        count++;
        if (count == 5) {
            totalLapis += decorative;
            count = 0;
        } else {
            totalMarble += decorative;
        }

    }
    let height = steps * increment;
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}
pyramidOfKingDjoser(11, 1)
