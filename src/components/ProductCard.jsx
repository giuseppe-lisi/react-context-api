import { useEffect, useState } from "react";
import { Link } from "react-router";

function ProductCard({ product }) {
    const rating = Math.ceil(product.rating.rate);
    const [stars, setStars] = useState([]);

    useEffect(()=>{
        const tempStarsArray = [];
        for (let i = 1; i <= rating; i++) {
            tempStarsArray.push(i);
        }
        setStars(tempStarsArray);
    }, [])


    return (
        <>
            <Link to={`/Products/${product.id}`} className="productCard">
                <div className="cardImg">
                    <img src={product.image} />
                </div>
                <h4>{product.title}</h4>
                {stars.map((star) => (
                    <img className="star" src="src/assets/images/star.png" />
                ))}
            </Link>
        </>
    );
}

export default ProductCard;
