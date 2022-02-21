import React from "react";
import ListItem from "./ListItem";
import AmiiboDetail from "./Amiibo";

const AmiiboList = ({amiibos, onAmiiboSelected}) => {

    const amiiboItems = amiibos.map((amiibo, index) => {
        return <ListItem amiibo={amiibo} key={index} image={amiibo} onAmiiboClick={onAmiiboSelected} />
    })

    return (
        <div className="amiibo-list">
            {amiiboItems}
        </div>
    )
}

export default AmiiboList;
