import React from "react";
import AmiiboDetail from "./Amiibo";

const AmiiboCollection = ({purchased, onAmiiboSelected}) => {

    const CollectionItems = purchased.map((addition) => {
        return <li>{addition.character}</li>
    })

    return (
        <div>
            <ul>
                {CollectionItems}
            </ul>
        </div>
    )
}

export default AmiiboCollection;


