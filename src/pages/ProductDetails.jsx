import { useParams } from "react-router-dom";
import "../css/ProductDetails.css";

import ProductGallery from "../components/product-gallery/ProductGallery";
import { products } from "../data/products";
import ProductCups from "../components/product-cups/ProductCups";

const ProductDetails = () => {
    const { slug } = useParams();

    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return <p style={{ textAlign: "center", height: "90vh", lineHeight: "80vh" }}>Product Not Found</p>;
    }

    return (
        <>
            <ProductGallery product={product} />
            
            <ProductCups />
        </>
    );
};

export default ProductDetails;
