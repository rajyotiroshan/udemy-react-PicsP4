import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'


class App extends React.Component {

  async onSearchSubmit(term){
        //call to unsplash api.
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers:{
                Authorization: 'Client-ID 940166052fabfd53a01780b3fd3363db5b431f84e31906f6f57fc0cbda806552'
            }
        });

        console.log(response.data.results);
    }

    render(){
        return (
        <div className="ui container"style={{marginTop: '10px'}}>
            <SearchBar onSubmit = {this.onSearchSubmit}/>
        </div>
    );
 }
}

 export default App;