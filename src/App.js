import React, { Component } from 'react';
import EventList from './components/eventList';
import Eventsearchform from './components/eventsearchform';
import './App.css';

class App extends Component {
    state = {
        events: []
    };
    populateEventList = (response) => {
        this.setState({ events: response.events });
    };
    render() {
        return (
            <div>
                <header className="container-fluid">
                    <h4>
                        Eventful Search App
                    </h4>
                </header>
                <div className="container-fluid">
                    <asid className="col-sm-1">
                    </asid>
                    <section className="col-sm-9">
                        <Eventsearchform onSubmit={this.populateEventList} />
                        <EventList events={this.state.events} />
                    </section>
                    <asid className="col-sm-2">
                    </asid>
                </div>
            </div>
        );
    }
}

export default App;
