import React from "react";
class TemperatureList extends React.Component {

    render() {
        return this.props.tempList.map((item)=>{
            return(
                <div class="item">
                    <div class="content">
                    <a class="header">{item.summary}</a>
                    <div class="description">Date:{item.date}</div>
                    <div class="description">Temperature in Celsius: {item.temperatureC}</div>
                    <div class="description">Temperature in Fahrenheit: {item.temperatureF}</div>
                    </div>
                </div>
            );            ;
        });
    }
}

export default TemperatureList;