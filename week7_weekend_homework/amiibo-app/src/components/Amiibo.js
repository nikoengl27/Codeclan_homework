import React from "react";

const AmiiboDetail = ({selectedAmiibo, addToCollection}) => {

    const handleClick = function(event){
        addToCollection(selectedAmiibo)
    }

    return (
        <div className="amiibo-container">
            <div className="image-container">
                <img src={selectedAmiibo.image}/>
            </div>
            <div className="text-container">
                <p>Name: {selectedAmiibo.character}</p>
                <p>Amiibo Series: {selectedAmiibo.amiiboSeries}</p>
                <p>Game Series: {selectedAmiibo.gameSeries}</p>
                <p>Release Date: {selectedAmiibo.release.eu}</p>
                <button id='favourite' onClick={handleClick}>Add to Collection!</button>
            </div>
        </div>
    )
}

export default AmiiboDetail;

