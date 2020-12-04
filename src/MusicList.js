import React from 'react';
import axios from 'axios';


export default class MusicList extends React.Component{

    state = {
        music: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const music = res.data;
                this.setState({ music });
                console.log(this.state.music);

            });
    }

    render() {
        return (
            <div>
                <p>
                    
                </p>
            </div>
        )
    }
}
