import React from "react";
import { SectionTitle, PeerSymbol } from '../styled-components/text.js'
import { BlueLine } from '../styled-components/lines.js'
import { Row, Col } from '../styled-components/wrappers.js'

const Peers = () => {
    const peer = ["MSFT", "AMZN", "TWTR", "VOD", "GOOG"]
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