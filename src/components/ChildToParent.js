import React from "react";

class ChildToParent extends React.Component {
    
    render () {
        return (
            <div className="ui cards">
                <div className="extra content">
                    <div className="ui two buttons">
                        <button className="ui basic green button" style={{'margin':'20px'}} onClick={this.click}>Approve</button>
                    </div>
                </div>
            </div>
        );
    }

    click=()=> {
        alert('hi');
        this.props.onSubmit();
    }
}
export default ChildToParent;