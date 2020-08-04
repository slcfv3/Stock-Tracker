import React from "react";
import { SectionTitle, PeerSymbol } from '../styled-components/text.js'
import { BlueLine } from '../styled-components/lines.js'
import { Row, Col } from '../styled-components/wrappers.js'

const Peers = (props) => {
    const peer = ["MSFT", "AMZN", "TWTR", "VOD", "GOOG"]
    return (
        <div className="peers">
            <SectionTitle>TOP PEERS</SectionTitle>
            <BlueLine />
            <Row columnGap='10%'>
                {peer.map((item, index) =>
                    <Col>
                        <PeerSymbol breakpoint={props.breakpoint}> {item} </PeerSymbol>
                    </Col>
                )}
            </Row>
        </div>
    );
}

export default Peers;