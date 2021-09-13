import React from "react";
import instance from "../apis/CommonApi";
import TemperatureList from "./TemperatureList";

class CallApi extends React.Component {
   state = {data:[]}
   render() {
       let res;
        if(this.state && this.state.data[0] ===  'Network Error') {
        res = (<div>
                API is not at running state.
            </div>);
        } else {
            res =  <TemperatureList tempList={this.state.data}></TemperatureList>;
        }
       return (
           <div>
               <button className="ui button" onClick={(e)=>this.loadApi()}>Load data from API</button>
              {res}
           </div>
       );
   }

   loadApi() {
       alert('api')
        instance.get('/weatherforecast').then(result=>{
            this.setState({data: result.data});
        }).catch((error)=>{
            if(error.message === 'Network Error') {
                this.setState({data: [error.message]});
            }
        })
        
   }
}

export default CallApi;