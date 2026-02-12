import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";
import ProductCard from "../components/ProductCard";

function Products() {
    const [products, setProducts] = useState([]);
    const { maxPrice } = useBudget();

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
                    {products
                        .filter((product) =>
                            maxPrice ? product.price <= maxPrice : product,
                        )
                        .map((product) => (
                            <ProductCard product={product} key={product.id}></ProductCard>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Products;
