import React, { useEffect, useState } from "react";

import axios from "axios";

class WhoAmI extends React.Component {
 

  constructor(props) {
    super(props);

    this.state = {
       Response:{ Items: []}, 
    };
}

  
  componentDidMount() {
    fetch(
"http://127.0.0.1:8000/home/")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                Response: json,
               
            });
        })
}

render(){
    const {  Response } = this.state;

    return (
        <div>
          { Response.map(function (item, index){
            console.log(item);
            return (
              <div key={index}>
                <h2>{item.Href}</h2>
              </div>
            );
          })}
        </div>
      );

}
 
};

export default WhoAmI;

