import React from 'react'
import { useParams } from 'react-router-dom';
import Awards from '../components/Awards';
import MayLike from '../components/MayLike';
import ProductDetailComponent from '../components/productDetails/ProductDetailsComponent';

function ProductDetail({ setVisible }) {
    const { id } = useParams();

    return (
        <div>
            <ProductDetailComponent setVisible={setVisible} id={id+''} />
            <Awards />
            <MayLike setVisible={setVisible} />
        </div>
    )
}

export default ProductDetail