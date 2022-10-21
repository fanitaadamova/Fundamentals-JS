function lastKNumbersSequance(length, k) {

    let sequance = [1];

    for (let i = 1; i < length; i++) {
        let index = Math.max(sequance.length - k, 0);

        let lastElements = sequance.slice(index);
        let sum = 0;
        for (let el of lastElements) {
            sum += el;
        }
        sequance.push(sum);
    }

    console.log(sequance.join(" "));
}
lastKNumbersSequance(6, 3)