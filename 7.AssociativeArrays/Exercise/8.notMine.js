function solve(arr) {
//judje 85/100
        let destination = {}

        arr.forEach(line => {
            let tokens = line.split(" > ");
            let [country, city, price] = tokens;

            if (!destination.hasOwnProperty(country)) {
                destination[country] = {}
            }

            if (!destination[country].hasOwnProperty(city)) {

                destination[country][city] = price;
            }

            let oldPrice = destination[country][city];

            if (oldPrice > price) {
                destination[country][city] = price;
            }

        });
        
    let sorted = Object.keys(destination).sort((a, b) => a.localeCompare(b))
    //const sorted = Object.entries(resultObject).sort((a, b) => a[1][1] - b[1][1]);
    
    for (const country of sorted) {
        console.log(`${country} -> ${cityPrice(destination[country])}`);
    }
    
    function cityPrice(destination) {
        let result = [];
        for (const key of Object.keys(destination)) {
            
            // result += `${key} -> ${obj[key]}`
            result.push(`${key} -> ${destination[key]}`);
        }
      
        return result.join(' ');
    }
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)