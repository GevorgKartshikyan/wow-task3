import React, {FC} from "react";

interface Props {
    title: string
    desc: string
}

const ProductTopBlock: FC<Props> = ({title,desc}) => {
    return (
        <div className='products__top__block'>
            <div className='products__top__block__left'>
                <h4 className='products__top__block__left__title'>{title}</h4>
                <p className='products__top__block__left__desc'>{desc}</p>
            </div>
            <button className='products__top__block__button'>
                View more
            </button>
        </div>
    )
}
export default ProductTopBlock
