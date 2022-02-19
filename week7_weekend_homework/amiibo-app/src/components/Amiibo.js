import React from "react";

const AmiiboDetail = ({selectedAmiibo, addToCollection}) => {

    const handleClick = function(event){
        addToCollection(selectedAmiibo)
    }

    return (

        <div>
            <img src={selectedAmiibo.image}/>
            <p>Name: {selectedAmiibo.character}</p>
            <p>Amiibo Series: {selectedAmiibo.amiiboSeries}</p>
            <p>Game Series: {selectedAmiibo.gameSeries}</p>
            <p>Release Date: {selectedAmiibo.release.eu}</p>
            <button id='favourite' onClick={handleClick}>Add to Collection!</button>
            </div>
    )
}

export default AmiiboDetail;

