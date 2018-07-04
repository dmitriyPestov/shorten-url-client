import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {notify} from 'react-notify-toast';
import {UrlApi} from 'url';
import {server} from '../../utils/config'
import {deleteUrl, redirectUrl} from '../../utils/Requests';
import './UrlLink.css';
import trash from '../../img/url-trash.svg';

export default class UrlLink extends Component {
  constructor(props) {
    super(props)
  }

  onClickDeleteUrl = () => {
    const {updateUrlsList, urlData} = this.props;
    const deleteIdUrl = urlData._id || '';

    deleteUrl(deleteIdUrl).then(function (res) {
      if(res.data && res.data.status) {
        notify.show(res.data.status, 'error');
      }
      else {
        updateUrlsList();
        notify.show('URL deleted', 'success');
        }
      }).catch(function (err, res) {
          console.log('Url Not delete', err);
      });
    }

    getHostName(urlData) {
      const parser = document.createElement('a');

      parser.href = urlData.longurl;
      return parser.hostname;
    }

    render() {
      const {urlData, isOpen, toggleOpen} = this.props;
      const headerUrl = this.getHostName(urlData);
      const shortLink = server + urlData.shortEntry;

      return (
        <div className="link-url link-url_font">
          <div className="row link-url_row">
            <div className="col-8">
              <div className="headerurl">Site: {headerUrl}</div>
              <div className="longurl">
                <a href={urlData.longurl} target="_blank">{urlData.longurl}</a>
              </div>
              <div className="shorturl">
                <a href={shortLink} target="_blank">{urlData.shorturl}</a>
              </div>
            </div>
            <div className="col-4 url-info">
              <div>
                <div className="count-redirect">
                  <img 
                    src={trash}
                    onClick={this.onClickDeleteUrl}
                    className="trash"
                    alt="clock"
                  />
                  <div className="count-redirect_text">Count redirect : {urlData.countcall}</div>
                  </div>
              </div>
              <div>
                <div className="time">{urlData.date}</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}