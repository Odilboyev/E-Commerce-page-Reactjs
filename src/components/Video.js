import React, { Component } from 'react';
import {RiPlayFill} from 'react-icons/ri'
class Video extends Component {
    render() {
        return (
            <div className="video">
                <div className="round1">
                    <div className="round2">
                        <RiPlayFill/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;
