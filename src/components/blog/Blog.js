import React, { Component } from 'react';
import './Blog.css';
import ReactMarkdown from 'react-markdown';
import posts from './posts.json';

import NavButtons from '../navbuttons/NavButtons';

class Blog extends Component {
    constructor(Props) {
        super(Props);

        this.state = {
            text: "",
            index: this.getPostId(),
            max: posts.length - 1
        };

        this.setURL();

        this.setText();
    }

    render() {
        return (
            <div>
                <div className="Blog">
                    <div className="Content">
                        <ReactMarkdown source={this.state.text} />
                        <div className="NavButtons">
                            <NavButtons max={this.state.max} index={this.state.index} changeNavigation={this.changeNavigation}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    changeNavigation = (newIndex) => {
        this.setState({
            index: newIndex
        }, () => {
            this.setText();
            this.setURL();
        });
    }

    setURL() {
        var url = new URL(window.location.href);
        console.log(this.getPostsTitle());
        url.searchParams.set("postTitle", this.getPostsTitle());
        //window.location.href = url;
        window.history.pushState("html", "pageTitle", url.toString());
    }

    getPostsTitle() {
        return posts[this.state.index]["title"];
    }

    setText() {
        var client = new XMLHttpRequest();

        client.open('GET', '../../posts/' + this.state.index + '.md');
        client.onreadystatechange = function() {
            if (client.readyState === 4) {
                if (client.status === 200) {
                    this.setState({
                        text: client.responseText
                    });
                }
            }
            
        }.bind(this);
        client.send();
    }

    getPostId() {
        var url = new URL(window.location.href);
        var postTitle = url.searchParams.get("postTitle");
        for(var i = 0; i < posts.length; i++){
            if (posts[i]["title"] === postTitle) {
                return posts[i]["id"];
            }
        }
        return posts.length - 1;
    }
}

export default Blog;
