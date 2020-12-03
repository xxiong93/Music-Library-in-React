import React, {Components} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: "http://www.devcodecampmusiclibrary.com/api/music"
  });
  
  class getList extends Components{
    constructor() {
        super();
        api.get('/').then(res => {
            console.log(res.data)
        })
    }
  
  }

export default getList;