import React, {FC} from "react";
import ProductTopBlock from "../components/ProductTopBlock";
import ProductCard from "../components/ProductCard";
import {products} from "../helpers/data";

const Products: FC = () => {
    return (
        <div className='products'>
            <div className="container">
                <ProductTopBlock title='burning suggestions'
                                 desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'}/>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
                    {products.map((e) => (
                        <ProductCard
                            name={e.name}
                            key={e.id}
                            id={e.id}
                            price={e.price}
                            image={e.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Products
