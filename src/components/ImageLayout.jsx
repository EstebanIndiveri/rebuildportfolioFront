import styled from '@emotion/styled';
import React from 'react';

const ImageContainer=styled.div`
height:100%;
width:100%;
border-radius:12px;
margin:0 auto;
align-items:center;
justify-content:center;
`;
const Image=styled.img`
width:100%;
height:100%;
border-radius:20px;
/* opacity: 0.7; */
margin:0px;
padding:0px;
display:block;
`;


const ImageLayout = () => {
    return ( 
        <div>
            <ImageContainer>
            <Image src="./assets/imgs/Sin título-4.png"/>
            
            </ImageContainer>
        </div>
     );
}
 
export default ImageLayout;