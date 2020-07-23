import React from "react";
import { useSelector } from 'react-redux'
import { SectionTitle, PeerSymbol } from '../styled-components/text.js'
import { BlueLine } from '../styled-components/lines.js'
import { Row, Col } from '../styled-components/wrappers.js'

const Peers = () => {
    const peer = useSelector(state => state.peer);
    //console.log('test overview'+JSON.stringify(overview))
    return (
        <div className="peers">
            <SectionTitle>TOP PEERS</SectionTitle>
            <BlueLine />
            <Row>
                {peer.map((item, index) =>
                    <PeerSymbol>{item + '     '}</PeerSymbol>
                )}
            </Row>
        </div>
    );
}

export default Peers;