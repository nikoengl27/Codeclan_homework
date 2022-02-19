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



// import React from 'react'
// import Country from './Country'
// import CountryContainer from '../containers/CountryContainer'

// const FavouritesList = ({favourites, onCountrySelected}) => {

//     const FavouriteItems = favourites.map((country, index) => {
//         return <Country country={country} key={index} onCountryClick={onCountrySelected} />
//     })

//     return (
//         <ul>
//             {FavouriteItems}
//         </ul>
//     )
// }

// export default FavouritesList
