import React, { Component } from "react";
import moment from 'moment';

class History extends Component {

    render() {
        const date = moment(new Date());
        return (
            <div>
            <div className="d-flex justify-content-end">{date.format("MM-DD-YYYY")}</div>
            <div className="d-flex justify-content-end">{date.format("HH:mm")}</div>
            </div>
            
        );
    }
}


export default History;