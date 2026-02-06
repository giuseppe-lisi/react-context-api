import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    function getProduct() {
        const apiUrl = "https://fakestoreapi.com/products";
        axios
            .get(`${apiUrl}/${id}`)
            .then((res) => {
                if (res.data) {
                    setProduct(res.data);
                } else {
                    navigate("/");
                }
            })
            .catch((err) => console.log(`errore: ${err}`));
    }

    useEffect(() => {
        getProduct();
    }, [id]);

    return (
        <>
            <div className="wrapper">
                <div className="singleProduct">
                    <div className="singleProductImg">
                        <img src={product.image} />
                    </div>
                    <div className="singleProductDesc">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
            <div className="productButtons wrapper">
                <button onClick={() => navigate(`/Products/${Number(id) - 1}`)}>
                    Vai al Prodotto Precedente
                </button>
                <button onClick={() => navigate(`/Products/${Number(id) + 1}`)}>
                    Vai al prodotto Successivo
                </button>
            </div>
        </>
    );
}

export default SingleProduct;
