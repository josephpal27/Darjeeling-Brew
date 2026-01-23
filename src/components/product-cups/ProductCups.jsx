import './ProductCups.css';
import angle from '../../assets/images/icons/left-angle.png';

const ProductCups = ({ product }) => {
    return (
        <>
            <section className="product-cup">
                <div className="product-cup-head">
                    <h2>{product.title}</h2>
                    <p>Available in Whole Leaf & Fannings/Flakes</p>
                </div>
                <div className="product-cup-row">
                    <div className="product-cup-content" id="product-cup-content-left">
                        <img src={angle} alt="Arrow Left" loading="lazy" />
                        <span
                            dangerouslySetInnerHTML={{
                                __html: product.cupLeftContent,
                            }}
                        />
                    </div>
                    <div className="product-cup-image">
                        <img src={product.cupImage} alt="Product Cup" loading="lazy" />
                    </div>
                    <div className="product-cup-content" id="product-cup-content-right">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: product.cupRightContent,
                            }}
                        />
                        <img src={angle} alt="Arrow Right" loading="lazy" />
                    </div>
                </div>
                <div className="product-cup-foot">
                    <span>Product Essence</span>
                    <p>{product.productEssence}</p>
                </div>
            </section>
        </>
    )
}

export default ProductCups
