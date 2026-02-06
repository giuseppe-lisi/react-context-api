import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);

    function getProductData() {
        const apiUrl = "https://fakestoreapi.com/products";

        axios
            .get(apiUrl)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <>
            <div className="wrapper">
                <h2>PRODOTTI</h2>
                <div className="productContainer">
                    {products.map((product) => {
                        return (
                            <>
                                <Link
                                    to={`/Products/${product.id}`}
                                    className="productCard"
                                >
                                    <div className="cardImg">
                                        <img src={product.image} />
                                    </div>
                                    <h4>{product.title}</h4>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Products;
