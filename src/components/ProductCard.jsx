import { Link } from "react-router";

function ProductCard({ product }) {

    return (
        <>
            <Link
                to={`/Products/${product.id}`}
                className="productCard"
                key={product.id}
            >
                <div className="cardImg">
                    <img src={product.image} />
                </div>
                <h4>{product.title}</h4>
            </Link>
        </>
    );
}

export default ProductCard;
