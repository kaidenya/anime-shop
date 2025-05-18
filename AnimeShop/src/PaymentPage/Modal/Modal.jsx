import "./Modal.css";
import Success from "../Status/Success/Success";
export default function Modal() {
    return (
        <div class="content">
            <div className="main-container">
                <div className="check-container">
                    <p className="verify-head">Verifying Payment</p>
                    <p className="wait-div">Please wait</p>
                    <Success />
                </div>
                <div className="check-shadow"></div>
            </div>
        </div>
    );
}
