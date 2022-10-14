function gramophone(bandName, albumName, songName) {

    let time = (albumName.length * bandName.length) * songName.length / 2
    let rotations = time / 2.5

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)

}
gramophone('Rammstein', 'Sehnsucht', 'Engel')