import React, { Component } from 'react';
import Notifications, {notify} from 'react-notify-toast';
import axios from 'axios';
import SendBlock from './components/SendBlock/SendBlock';
import {server} from './utils/config';
import UrlLinkList from './components/UrlLinkList/UrlLinkList';
import {getUrls} from './utils/Requests';
import logo from './img/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = server;

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

  componentDidMount() {
        this.updateUrlsList();
  }

  render() {
    const {allUrls} = this.state;

    return (
      <div className="App">
        <Notifications options={{zIndex: 5000}}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <div className="App-title">URL Shortener</div>
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

  updateUrlsList = () => {
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
        notify.show('GetUrls error!', 'error');
      }
  }
}

export default App;