import React from 'react'
import Product from '../components/Product'
import p1 from '../assets/product1.jpg'
import p2 from '../assets/product2.jpg'
import p3 from '../assets/product3.jpg'

function Category() {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-16 py-12'>
                <Product price={599} name={"Banana Double Cloth Bath Towels"} img={p1} id={1} />
                <Product price={799} name={"Aluvera Double Cloth Bath Towel"} img={p2} id={2} />
                <Product price={999} name={"Bamboo Terry Bath Towel"} img={p3} id={3} />
                <Product price={599} name={"Banana Double Cloth Bath Towels"} img={p1} id={4} />
                <Product price={799} name={"Aluvera Double Cloth Bath Towel"} img={p2} id={5} />
                <Product price={999} name={"Bamboo Terry Bath Towel"} img={p3} id={6} />
            </div>
        </div>
    )
}

export default Category