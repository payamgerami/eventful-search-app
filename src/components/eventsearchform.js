import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const url = 'http://eventfulsearchapi.azurewebsites.net/api/v1/events/search';

class EventSearchForm extends React.Component {
    state = { address: 'Downtown Vancouver Canada', radius: 10, datestart: '2017/06/19', dateend: '2017/07/15', category: 'music' }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url, {
            address: this.state.address,
            radius: this.state.radius,
            datestart: this.state.datestart,
            dateend: this.state.dateend,
            category: this.state.category
        })
            .then(res => {
                this.props.onSubmit(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <lable for="address" className="col-sm-2 control-label">Address</lable>
                    <div className="col-sm-10">
                        <textarea rows="2" id="address" className="form-control" type="text" value={this.state.address} onChange={(event) => this.setState({ address: event.target.value })}
                            placeholder="address" required />
                    </div>
                </div>
                <div className="form-group">
                    <lable for="datestart" className="col-sm-2 control-label">Start Date</lable>
                    <div className="col-sm-4">
                        <input id="datestart" className="form-control" type="text" value={this.state.datestart} onChange={(event) => this.setState({ datestart: event.target.value })}
                            placeholder="datestart" />
                    </div>
                    <lable for="dateend" className="col-sm-2 control-label">End Date</lable>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" value={this.state.dateend} onChange={(event) => this.setState({ dateend: event.target.value })}
                            placeholder="dateend" />
                    </div>
                </div>
                <div className="form-group">
                    <lable for="radius" className="col-sm-2 control-label">Radius (km)</lable>
                    <div className="col-sm-4">
                        <input id="radius" className="form-control" type="number" value={this.state.radius} onChange={(event) => this.setState({ radius: event.target.value })}
                            placeholder="radius" required />
                    </div>
                    <lable for="category" className="col-sm-2 control-label">Category</lable>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" value={this.state.category} onChange={(event) => this.setState({ category: event.target.value })}
                            placeholder="category" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary"> Search</button>
                    </div>
                </div>
            </form>
        );
    }
};
export default EventSearchForm;
