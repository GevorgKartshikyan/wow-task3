import React, {FC} from "react";
interface Props{
    id:number
    name:string,
    price:string,
    image:string
}
const ProductCard: FC<Props> = ({image,name,price,id}) => {
    return (
            <figure className='products__card'>
                <img src={image} alt="" className='products__card__image'/>
                <figcaption className='products__card__figcaption'>
                    <div className='products__card__figcaption__info'>
                        <p className='products__card__figcaption__name'>{name}</p>
                        <p className='products__card__figcaption__price'>{price}</p>
                    </div>
                    <button className='products__card__figcaption__button'>
                        Add to cart
                    </button>
                </figcaption>
            </figure>
    )
}
export default ProductCard
