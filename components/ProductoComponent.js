import React from 'react';
import styled from 'styled-components'

const Product=styled.article`
    img{
        width:100%;
    }
`;


export const ProductoComponent = ({product}) => {
    let {id,name,images,price}=product;
           
    return (

        <Product>
            <img src={images[0].src} />
          <h3>{name}</h3>
          <p> $ {price}</p>
        </Product>
    );
};