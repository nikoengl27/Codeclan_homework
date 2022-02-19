import React, { useEffect, useState } from 'react';
import AmiiboDetail from '../components/Amiibo';
import AmiiboList from '../components/AmiiboList';
import AmiiboCollection from '../components/AmiiboCollection';


const AmiiboContainer = () => {
    const [amiibos, setAmiibos] = useState([]);
    const [selectedAmiibo, setSelectedAmiibo] = useState(null);
    const [showAmiiboList, setAmiiboList] = useState(true);
    const [purchased, setPurchased] = useState ([]);


    useEffect(() => {
        getAmiibos();
    }, [])

    const getAmiibos = function() {
        fetch('https://www.amiiboapi.com/api/amiibo/')
        .then(res => res.json())
        .then(data => setAmiibos(data.amiibo));
    }

    // const onAmiiboClick = function(amiibo){
    //     setSelectedAmiibo(amiibo);
    // }
    
    const onAmiiboSelected = function(amiibo){
        setSelectedAmiibo(amiibo);
        setAmiiboList(false)
    }

    const addToCollection = (newAddition) => {
        let newPurchased = [...purchased, newAddition]
        setPurchased(newPurchased)
    }

    // const addToCollection = function(amiibo){
    //     setPurchased(amiibo);
    //     purchased.push(amiibo);
    //     setPurchased(purchased);
    // }
    

    return (
        <div className="main-container">
            <div>
                {/* {selectedAmiibo ? <AmiiboDetail selectedAmiibo={onAmiiboClick} /> : null} */}
                {selectedAmiibo ? <AmiiboDetail selectedAmiibo={selectedAmiibo} addToCollection={addToCollection}/> : null}
            </div>
            <div>
                {showAmiiboList ? <AmiiboList amiibos={amiibos} onAmiiboSelected={onAmiiboSelected}/> : null}
            </div>
            <div>
                {/* <AmiiboCollection purchased={purchased} character={purchased.character} onAmiiboSelected={onAmiiboSelected} addToCollection={addToCollection}/> */}
                <h3>Personal Collection</h3>
                {purchased ? <AmiiboCollection purchased={purchased}/> : null}
            </div>
        </div>
    )




}

export default AmiiboContainer;