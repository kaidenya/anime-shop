import "./CouponCode.css";
export default function CouponCode() {
    return (
        <div className="coupon-wrapper">
            <div className="form-group">
                <div className="form-group__input-container">
                    <label className="form-group__label " for="textfield">
                        Coupon Code
                    </label>
                    <span>
                        {" "}
                        <input
                            className="js_ml"
                            type="text"
                            id="textfield"
                            placeholder="Enter code here"
                        />
                    </span>
                    <span className="apply-btn">APPLY</span>
                </div>
            </div>
        </div>
    );
}
