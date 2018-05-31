import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <div className="NavigationHeader">
        </div>
        <div className="NavItems">
            <div className="NavItem" onClick={() => {this.navigate("blog")}}>
                Blog
            </div>
            <div className="NavItem" onClick={() => {this.navigate("portfolio")}}>
                Portfolio
            </div>
            <div className="NavItem" onClick={() => {this.navigate("about")}}>
                About
            </div>
        </div>
      </div>
    );
  }

  navigate(value){
      this.props.navigationCallback(value);
  }
}

export default Navigation;
