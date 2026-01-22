import { useParams } from "react-router-dom";
import "../css/ProductDetails.css";

import ProductGallery from "../components/product-gallery/ProductGallery";
import { products } from "../data/products";

const ProductDetails = () => {
    const { slug } = useParams();

    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return <p style={{ textAlign: "center" }}>Product Not Found</p>;
    }

    return <ProductGallery product={product} />;
};

export default ProductDetails;
