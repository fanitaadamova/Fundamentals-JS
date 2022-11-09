function songs(listArray) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = listArray.shift();
    let typeSong = listArray.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = listArray[i].split('_');
        let song = new Song(type, name, time)
        songs.push(song);
    }

    if (typeSong === 'all') {
        //songs.forEach((i) => console.log(i.name));

        for (let song of songs) {
            console.log(song.name);
        }

    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        //filtered.forEach((i) => console.log(i.name));
        for (let song of filtered) {
            console.log(song.name);
        }

    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)