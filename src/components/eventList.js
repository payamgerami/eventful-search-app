import React from 'react';
import ReactDOM from 'react-dom';
import Event from './event';

const EventList = (props) => {
    return (
        <div className="search-result">
            {props.events.map(event => <Event key={event.id} {...event} />)}
        </div>
    );
};
export default EventList;
