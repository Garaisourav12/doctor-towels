import React from "react";
import Product from "./Product";

function MayLike({ setVisible }) {
    return (
        <section className="my-16 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl text-center font-bold">
                You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <Product
                    price={599}
                    name={"Banana Double Cloth Bath Towels"}
                    id={1}
                    setVisible={setVisible}
                />
                <Product
                    price={799}
                    name={"Aluvera Double Cloth Bath Towel"}
                    id={2}
                    setVisible={setVisible}
                />
                <Product
                    price={999}
                    name={"Bamboo Terry Bath Towel"}
                    id={3}
                    setVisible={setVisible}
                />
                <Product
                    price={599}
                    name={"Banana Double Cloth Bath Towels"}
                    id={4}
                    setVisible={setVisible}
                />
            </div>
        </section>
    );
}

export default MayLike;
