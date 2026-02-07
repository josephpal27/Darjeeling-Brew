import '../css/StoreTermsPolicies.css';

const StoreTermsPolicies = () => {
    return (
        <>
            <section className="terms-policies">
                <h1 data-aos="fade-up">Store Terms & Policies</h1>
                <div className="terms-box" data-aos="fade" data-aos-once="true">
                    <span>Shipping Policy -</span>
                    <p>The ordered goods will be dispatched within 2 working days.</p>
                    <p>Mode of delivery: Delhivery, Shipprocket, or other available courier services.</p>
                    <p>Delivery time: Generally, it takes 7 working days from the date of dispatch, depending on the delivery location.</p>
                </div>
                <div className="terms-box" data-aos="fade" data-aos-once="true">
                    <span>Return & Refund -</span>
                    <p>Thank you for selecting The Darjeeling Brew as your choice.</p>
                    <p>Should you find your order not meeting your expectations, you can reach out to us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vcare@thedarjeelingbrew.com" target="_blank">vcare@thedarjeelingbrew.com</a></p>
                </div>
                <div className="terms-box" data-aos="fade" data-aos-once="true">
                    <span>Cancellation Policy -</span>
                    <p>We kindly request that all cancellation appeals be initiated within 10 hours from the moment of order placement or prior to the shipment of your order, depending on whichever occurs first.</p>
                    <p>In instances where your order has already been dispatched, regrettably, we will be unable to accommodate cancellations.</p>
                </div>
                <div className="terms-box" data-aos="fade" data-aos-once="true">
                    <span>Product Replacements/Exchange -</span>
                    <p>For replacement requests, we encourage you to initiate the process within a maximum of 7 days starting from the delivery date. Such requests will be considered valid solely under the circumstances outlined below:</p>
                    <ul>
                        <li><b>Receipt of Damaged/Incorrect/Expired Product</b> - Kindly attach a photograph of the delivered package alongside the invoice to facilitate our internal quality assessment. Following this, please allow us a window of 24-48 hours for the review of your request.</li>
                        <li><b>Item Missing from Your Order</b> - For cases where an item is absent from your delivered parcel, please provide an image of the invoice. Afterward, we will require 24-48 hours to conduct an internal review and, if applicable, send you a replacement.</li>
                        <li><b>Receipt of Expired Product</b> - In the event that you receive a product that has passed its expiry date, attaching a picture displaying the expiry date alongside the invoice is requested. We will then perform a review within 24 hours and, if applicable, send you a replacement after the essential internal assessments.</li>
                    </ul>
                </div>
                <div className="terms-box" data-aos="fade" data-aos-once="true">
                    <span>Returns Policy -</span>
                    <p>Kindly note that we are unable to accept returns for the following reasons:</p>
                    <ul>
                        <li>To minimize our carbon footprint.</li>
                        <li>Food and beverage products experience diminished freshness throughout the return process.</li>
                    </ul>
                </div>
                <div className="terms-box" data-aos="fade" data-aos-once="true">
                    <span>Refund Process -</span>
                    <p>All refund processes will be conducted subsequent to our internal quality evaluations. In the event of a refund request, it is imperative to furnish the required evidence. Our Customer Service team will communicate the approval of the refund request.</p>
                    <p>Approved refunds will be processed within 7 business days. In case of any delay, please don't hesitate to contact us. Additionally, all refunds will be channeled back to the original mode of payment. It's important to note that The Darjeeling Brew cannot process refunds for requests initiated 5 days after delivery.</p>
                </div>
                <div className="terms-box" data-aos="fade" data-aos-once="true">
                    <span>Payment Methods -</span>
                    <p>At The Darjeeling Brew, we strive to offer a seamless and secure shopping experience for our valued customers.</p>
                    <p>Accepted Payment Methods:</p>
                    <ul>
                        <li>Credit and Debit Cards</li>
                        <li>UPI</li>
                        <li>Net Banking</li>
                    </ul>
                </div>
                <div className="terms-box" data-aos="fade" data-aos-once="true">
                    <span>Terms & Conditions -</span>
                    <p>At www.thedarjeelingbrew.com we value and share your concerns about your privacy and security. By visiting us, the user has agreed to read, browse and access all our information subject to the guidelines and terms of use applicable to such services. If it is not acceptable, kindly refrain from accessing or visiting our Site.</p>
                </div>
                <div className="terms-box" data-aos="fade" data-aos-once="true">
                    <span>Discounts & Promotions -</span>
                    <ul>
                        <li>Each sale is applicable on select products and may not be applicable on all products on the Site.</li>
                        <li>There will be no exchange or return of products on sale or discount.</li>
                        <li>Discounts differ on individual products and will be considered for final invoicing irrespective of material used for promotional purpose.</li>
                    </ul>
                </div>

                <img src="/images/cart-element.avif" alt="Element 1" loading="lazy" id="terms-element-1" />
                
            </section>

            <section className="mountain-bg" style={{ backgroundColor: '#f4f8e1' }}>
                <img src="/images/mountain.avif" alt="Mountain" loading="lazy" width="100%" />
            </section>
        </>
    )
}

export default StoreTermsPolicies
