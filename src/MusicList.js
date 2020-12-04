import React from 'react';
import axios from 'axios';


export class MusicTable extends React.Component{
    render() {
        return(
            <table>
                <thead>
                <tr>Music id</tr>
                
                </thead>    

            </table>

        );

    }


}
function allMusic(music){
    // want to return
    // need to use array functions like filter(), 
    // print one song on a row first***
    // need a row for each song using map() 
    let song = {};
    
    
    for(let i = 0; i < music.length; i++){
        song += music[i];
        console.log(song);
    }
    return song;
}

export default class MusicList extends React.Component{

    state = {
        music: [],
        loading: true
        //firstSong: //set to an empty object or to null
    }

    componentDidMount() {
        axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
            .then(res => {
                const music = res.data;
                this.setState({ music });
                this.setState({loading: false})
                console.log(this.state.music);

            });
    }
    render() {
        return (
            <div>
                <table></table>
                {this.state.music.title}
                <button onClick={allMusic()}>Show music</button>
            </div>
        );
    }
}
