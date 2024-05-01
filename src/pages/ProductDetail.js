import React from 'react'
import { useParams } from 'react-router-dom';
import Awards from '../components/Awards';

function ProductDetail() {
    const { id } = useParams();

    return (
        <div>
            
            <Awards />
        </div>
    )
}

export default ProductDetail