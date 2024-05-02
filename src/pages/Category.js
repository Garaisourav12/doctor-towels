import React from 'react'
import Product from '../components/Product'

function Category({ setVisible }) {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-16 py-12'>
                <Product price={599} name={"Banana Double Cloth Bath Towels"} id={1} setVisible={setVisible} />
                <Product price={799} name={"Aluvera Double Cloth Bath Towel"} id={2} setVisible={setVisible} />
                <Product price={999} name={"Bamboo Terry Bath Towel"} id={3} setVisible={setVisible} />
                <Product price={599} name={"Banana Double Cloth Bath Towels"} id={4} setVisible={setVisible} />
                <Product price={799} name={"Aluvera Double Cloth Bath Towel"} id={5} setVisible={setVisible} />
                <Product price={999} name={"Bamboo Terry Bath Towel"} id={6} setVisible={setVisible} />
            </div>
        </div>
    )
}

export default Category