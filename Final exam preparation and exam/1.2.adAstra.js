function adAstra(input) {

    let text = input.shift();
    let totalCalories = 0;
    /*
    First, you must extract the food info. It will always follow the same pattern rules:
      •It will be surrounded by "|" or "#" (only one of the two) in the following pattern: 
          #{item name}#{expiration date}#{calories}#   or |{item name}|{expiration date}|{calories}|
      •The item name will contain only lowercase and uppercase letters and whitespace 
      •The expiration date will always follow the pattern: "{day}/{month}/{year}", where the day, month, and year will be exactly two digits long
      •The calories will be an integer between 0-10000
    */
    let pattern = /([|#])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let foodInfo = text.matchAll(pattern);

    for (const food of foodInfo) {
        let currentCalories = Number(food.groups.calories);
        totalCalories += currentCalories;

    }
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    foodInfo = text.matchAll(pattern);
    for (const food of foodInfo) {
        console.log(`Item: ${food.groups.itemName}, Best before: ${food.groups.expirationDate}, Nutrition: ${food.groups.calories}`);
    }


}
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']
)