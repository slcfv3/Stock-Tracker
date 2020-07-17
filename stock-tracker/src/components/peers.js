import React from "react";
import { useSelector } from 'react-redux'
import './components.css';

const Peers = () => {
    const peer = useSelector(state => state.peer);
    //console.log('test overview'+JSON.stringify(overview))
    return (
        <div className="peers">
          <div className="title">TOP PEERS</div>
          {peer.map((item, index) =>
                    <label>{item+' '}</label>
                )}
            
        </div>
    );
}

export default Peers;