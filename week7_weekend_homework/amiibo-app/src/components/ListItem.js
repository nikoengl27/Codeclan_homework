import React from "react";

const ListItem = ({amiibo, onAmiiboClick}) => {

    const handleClick = function() {
        onAmiiboClick(amiibo);
    }

    return (
    <>
    <p onClick={handleClick}>
        <div class="amiiboImage">
        <img src={amiibo.image}/><br></br>
        </div>
    </p>
    <p>
        {amiibo.name}
    </p>
    </>
    )
}

export default ListItem