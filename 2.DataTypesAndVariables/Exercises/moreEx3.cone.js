
function cone(radius, height) {
    //use this online tool to check your results: http://www.calculatorsoup.com/calculators/geometry-solids/cone.php
    // Total surface area of a cone Area =  πr(r + √(r2 + h2))
    // Volume of a cone: Volume = (1/3)πr2h

    const pi = Math.PI
    let volume  =  (pi*  Math.pow (radius,2) * height )/3
    let area = pi * radius*( radius + Math. sqrt((Math.pow (radius,2) + Math.pow (height,2))))

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}
cone(3.3,7.8)
