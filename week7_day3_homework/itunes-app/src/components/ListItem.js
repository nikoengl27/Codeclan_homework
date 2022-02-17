import React from "react";


const ListItem = ({song, onSongClick}) => {
    
    const handleClick = function (){
        onSongClick(song);
    }
    return <ul onCLick={{handleClick}}>{song['im:artist'].label} - {song['im:name'].label}</ul>
}

export default ListItem;
