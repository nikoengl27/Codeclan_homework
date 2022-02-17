import React from "react";

const SongDetail = (song) => {
    return(
        <div>
            <h3>{song.name}</h3>
            <p>{song.artist}</p>
        </div>
    )
}

export default SongDetail;