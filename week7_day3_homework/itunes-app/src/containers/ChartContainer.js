import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';
import SongSelecter from '../components/SongSelect'


const ChartContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null)
   
    useEffect(() => {
        getSongs();
    },[])
   
    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
    } 

    const onSongClick = function(song){
        setSelectedSong(song);
    }

    return (
        <div className="main-container">
     
            {songs ? <SongList songs={songs} onSongClick={onSongClick}/> : null}
        </div>
    )

}

export default ChartContainer;