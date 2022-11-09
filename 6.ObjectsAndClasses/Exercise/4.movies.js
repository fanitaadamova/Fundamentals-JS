function movies(list) {

    let movies = [];

    list.forEach(line => {
        if (line.includes("addMovie ")) {
            let name = line.split("addMovie ")[1]; //правим стринга на array и взимаме първи индекс
            movies.push({name});       //така добавяме ключ name със стойност името на филма
        } else if (line.includes("directedBy")) {
            let [name, director] = line.split(" directedBy ");

            let movie = movies.find(el => el.name === name); // връща проверка, дали името го има в обекта

            if (movie) {
                movie.director = director;
            }

        } else if (line.includes("onDate")) {
            let [name, date] = line.split(" onDate ");

            let movie = movies.find(el => el.name === name); // връща проверка, дали името го има в обекта

            if (movie) {
                movie.date = date;
            }
        }


    })

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })


}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)