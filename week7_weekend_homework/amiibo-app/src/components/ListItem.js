import React from "react";

const ListItem = ({amiibo, onAmiiboClick}) => {

    const handleClick = function() {
        onAmiiboClick(amiibo);
    }

    return (
    <>
    <p onClick={handleClick}>
        <img src={amiibo.image}/><br></br>
    </p>
    <p>
        {amiibo.name}
    </p>
    </>
    )
}

export default ListItem