import { useEffect, useState } from "react";
import { Link } from "react-router";

function ProductCard({ product }) {
    // ratingDecimals per tagliare la stellina finale del rating in base al punto decimale
    // ratingCieled per determinare quante immagini della stellina devono essere renderizzate
    const rating = product.rating.rate;
    const ratingDecimals = Number((rating - Math.floor(rating)).toFixed(1));
    const ratingCeiled = Math.ceil(product.rating.rate);

    // state che viene mappato per renderizzare le stelline
    const [stars, setStars] = useState([]);

    // quando il componente viene creato definiamo quante stelle deve avere il rating del prodotto
    // tramite for loop e ratingCieled determino quante stelline servono e poi uso il setter della
    // mia var di stato "stars"
    useEffect(() => {
        const tempStarsArray = [];
        for (let i = 1; i <= ratingCeiled; i++) {
            tempStarsArray.push(i);
        }
        setStars(tempStarsArray);
    }, []);

    return (
        <>
            <Link to={`/Products/${product.id}`} className="productCard">
                <div className="cardImg">
                    <img src={product.image} />
                </div>
                <h4>{product.title}</h4>
                <div className="starContainer">
                    {/* renderizza le stelle del rating del prodotto */}
                    {stars.map((star, i, stars) => (
                        <div style={i === stars.length - 1 ? { width: `${ratingDecimals*10}%`, overflow: "hidden" } : {}}>
                            <img
                                className="star"
                                src="src/assets/images/star.png"
                            />
                        </div>
                    ))}
                </div>
            </Link>
        </>
    );
}

export default ProductCard;
