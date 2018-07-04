import React, { Component } from 'react';
import UrlLinkList from './UrlLinkList';
import {getUrls} from './utils/Requests';
import Notifications, {notify} from 'react-notify-toast';
import axios from 'axios';
import SendBlock from './SendBlock';
import {ENV, devServer} from './utils/config';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//axios.defaults.baseURL = 'https://rocky-crag-65521.herokuapp.com/';
axios.defaults.baseURL = ENV === 'dev' ? devServer : window.location.href;

class App extends Component {
  state = {
      allUrls : [{
        '_id' : '',
        'longurl' : '',
        'shorturl' : '',
        'countcall' : 0,
        'shortEntry' : '',
        'date' : ''
      }]
  }

  componentWillMount() {
        this.updateUrlsList();
  }

  render() {
    const {allUrls} = this.state;
    return (
      <div className="App">
        <Notifications options={{zIndex: 5000}}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <div className="App-title">URL Shorten</div>
        </header>
        <div className="App-intro">
          <SendBlock
            updateUrlsList={this.updateUrlsList}
          />
        </div>
        <UrlLinkList 
          listUrls={allUrls} 
          updateUrlsList={this.updateUrlsList}
        />
      </div>
    );
  }

  updateUrlsList = ()=> {
      const that = this;
      let error = null;

      // Get urls
      getUrls().then(function (result) {
          that.setState({
              allUrls: result.data
          });
      }).catch(function (reject) {
          error = reject;
      });

      if (error) {
        console.log('GetUrls error!');
        notify.show('GetUrls error!', 'error');
      }
  }
}

export default App;