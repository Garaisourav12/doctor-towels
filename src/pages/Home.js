import React from 'react'
import ShopByProduct from '../components/ShopByProduct'
import Awards from '../components/Awards'
import HeroCarousel from '../components/HeroCarousel'

function Home() {
    return (
        <div>
            <HeroCarousel />
            <ShopByProduct />
            <Awards />
        </div>
    )
}

export default Home