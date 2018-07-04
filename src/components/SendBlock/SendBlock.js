import React from 'react';
import {InputGroup, InputGroupAddon, Input, Button, InputGroupText} from 'reactstrap';
import {notify} from 'react-notify-toast';
import {addUrl} from '../../utils/Requests';
import 'bootstrap/dist/css/bootstrap.css';
import './SendBlock.css';

export default class SendBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urlName: '',
            shortName: ''
        };
    }

    onBlurInput = (e) => {
        const target = e.target,
            value = target.value,
            name = target.name;
    }

    onChangeInput = (e) => {
        const target = e.target,
            value = target.value,
            name = target.name;

        this.setState({
            [name]: value
        });
    }

    onClickSave = () => {
        const {urlName, shortName} = this.state;
        const {updateUrlsList} = this.props;
        const newUrlData = {
            'longurl' : urlName,
            'shortPartUserUrl': shortName
        };

        if(!/^[a-z0-9]+$/i.test(shortName)) {
            notify.show('A short part of the link name must contain letters and / or numbers', 'error');
            this.setState({
                shortName: ''
            });
            return
        }

        addUrl(newUrlData).then(function (res) {
            if(res) {
                updateUrlsList();
                notify.show('Added to DB!', 'success');
            }
        }).catch(function (err) {
            if (err.response) {
                notify.show(err.response.data.status, 'error');
            }
        });

        this.setState({
            urlName: '',
            shortName: ''
        });
    }

    render() {
        const {urlName, shortName} = this.state;
        return (
            <div className="input-block">
                <InputGroup className="input-url">
                    <Input placeholder="http://example.com"
                        name="urlName"
                        value={urlName}
                        onChange={this.onChangeInput}
                        onBlur={this.onBlurInput}
                        maxLength="200"
                    />
                    <InputGroupAddon addonType="append">
                        <Button
                            onClick={this.onClickSave}
                            color="info">Shorten URL
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
                <InputGroup className="input-url">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Input short part url :</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="your short name"
                        className="short-user-part"
                        name="shortName"
                        value={shortName}
                        onChange={this.onChangeInput}
                        onBlur={this.onBlurInput}
                        maxLength="200"
                    />
                </InputGroup>
                <span className="optional-field">(optional field for filling)</span>
            </div>
        );
    }
}