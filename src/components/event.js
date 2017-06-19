import React from 'react';
import ReactDOM from 'react-dom';

const Event = (props) => {
    return (
        <div className="container-fluid search-result-item">
            <div className=" col-sm-offset-2 col-sm-1">
                <img src={props.imageUri} />
            </div>
            <div className="col-sm-9">
                <div><b>{props.title}</b></div>
                <div>{props.venue}</div>
                <div>{props.performers}</div>
                <div>{props.date}</div>
            </div>
        </div>
    );
};
export default Event;
