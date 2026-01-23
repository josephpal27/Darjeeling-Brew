import { useParams } from "react-router-dom";

import ProductGallery from "../components/product-gallery/ProductGallery";
import { products } from "../data/products";
import ProductCups from "../components/product-cups/ProductCups";
// import ProductReviews from "../components/product-reviews/ProductReviews";

const ProductDetails = () => {
    const { slug } = useParams();

    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return <p style={{ textAlign: "center", height: "90vh", lineHeight: "80vh" }}>Product Not Found</p>;
    }

    return (
        <>
            <ProductGallery product={product} />

            <ProductCups product={product} />

            {/* <ProductReviews /> */}

            <section className="mountain-bg" style={{backgroundColor: '#f4f8e1'}}>
                <img src="/images/mountain.avif" alt="Mountain" loading="lazy" width="100%" />
            </section>
        </>
    );
};

export default ProductDetails;
