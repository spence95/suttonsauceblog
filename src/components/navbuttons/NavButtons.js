import React, { Component } from 'react';
import './NavButtons.css';

class NavButtons extends Component {
    render(){
        if (this.props.index < this.props.max && this.props.index > 0) {
            return (
                <div className="NavButtons">
                    <div className="NavButton Right" onClick={() => {this.props.changeNavigation(this.props.index + 1)}}>
                    &#x21E8;
                    </div>
                    <div className="NavButton Left" onClick={() => {this.props.changeNavigation(this.props.index - 1)}}>
                    &#x21E6;
                    </div>
                </div>
            )
        } else if (this.props.index === this.props.max) {
            return (
                <div className="NavButtons">
                    <div className="NavButton Left" onClick={() => {this.props.changeNavigation(this.props.index - 1)}}>
                    &#x21E6;
                    </div>
                </div>
            )
        } else if (this.props.max === 0) {
            return (
                <div className="NavButtons">
                </div>
            )
        }
        return (
            <div className="NavButtons">
                <div className="NavButton Right" onClick={() => {this.props.changeNavigation(this.props.index + 1)}}>
                &#x21E8; 
                </div>
            </div>
        )
    }
}

export default NavButtons;
