import React from 'react';
import axios from 'axios';


export default class MusicList extends React.Component {

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
                this.setState({ loading: false })
                console.log(this.state.music);
                // this.allMusic();
            })

    }


    // allMusic() {
    //     // want to return
    //     // need to use array functions like filter(), 
    //     // print one song on a row first***
    //     // need a row for each song using map() 
    //     let song = {};

    //     for (let i = 0; i < this.state.music.length; i++) {
    //         song = this.state.music[i];
    //         console.log(song);
    //     }
    //     return song;
    // }

    render() {
        // const contents = ;
        // console.log(music);
        return (
            <div>
                <tbody class="table-body">
                    <tr>
                        {this.state.music.map((musicItem, index) => {
                            return (
                                <td>{this.musicItem.album}</td>
                                <td>{this.musicItem.artist}</td>
                                <td>{this.musicItem.title}</td>
                                <td>{this.musicItem.releaseDate}</td>
                                <td>{this.musicItem.genre}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </div>
        )
    }
}
