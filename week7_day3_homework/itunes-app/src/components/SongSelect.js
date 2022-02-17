import React from "react";

const SongSelector = ({songs, onSongClick}) => {

    const handleChange = function(event){
        const chosenSong = songs[event.target.value]
        onSongClick(chosenSong)
    }

    const SongOptions = songs.map((song, index) => {
        return <option value={index} key={index}>{song.name}</option>
    })

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a song</option>
            {SongOptions}
        </select>
    )
}

export default SongSelector;