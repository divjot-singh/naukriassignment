import React from 'react';
import styled from 'styled-components';

export default function Whatsappalert (){
    return (
        <div className="whatsappalert">
            <div className="leftcontent">
                <h4>Get alerts on Whatsapp</h4>
                <p>For similar jobs</p>
                <Whatsappcard showcount={false}>
                    Enable now
                </Whatsappcard>
            </div>
            <div className="rightcontent">
                <img src="assets/whatsapp.png" height="100" width="100" alt="Whatsapp Icon" />
            </div>
            
        </div>
    );
}

const Whatsappcard = styled.span`
flex: 0 0 auto;
    border-radius: 2em;
    padding: 0.5em 1em;
    box-shadow: none;
    color: white !important;
    background: #209090;
    text-transform: uppercase;
    font-size: 0.8em !important;
    border: 1px solid #80808029;
    display: inline-block;
`;