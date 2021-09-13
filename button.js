import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const BtnStyles = styled.div`
background-color:${(props)=>props.outline?'tansparent': props.bgcolor};
border:${(props)=>props.outlineThick} solid ${(props)=>props.outlineColor};
display:flex;
justify-content:center;
align-items:center;
max-height:40px;
height:90%;
border-radius:9px;
`;

export default function Button({BtnLink,BtnText,outline,bgcolor,outlineColor,outlineThick}) { /*outline={false or true}*/
    return (
        <BtnStyles outline={outline} bgcolor={bgcolor} outlineColor={outlineColor} outlineThick={outlineThick} >
            <Link className="button" to = {BtnLink}>{BtnText}</Link>
       </BtnStyles>
    )
}
