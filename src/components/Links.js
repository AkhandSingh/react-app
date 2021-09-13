import React from "react";

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <a href={this.props.href} className={this.props.className} onClick={(e)=>this.click(e)}>{this.props.children}</a>
    }

   click(event) {
        event.preventDefault();
        
        window.history.pushState({},'',this.props.href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
}

export default Link;