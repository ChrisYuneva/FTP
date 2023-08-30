import { ButtonCustom } from "../../components/buttonCustom";
import { useNavigate } from "react-router-dom";

import "./index.css";

export function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="error-wrap">
            <div className="error-404-wrap">
                <h2 data-t="404">404</h2>
            </div>
            <h3>Sorry, page not found. Please return to the home page.</h3>
            <ButtonCustom text={"Return to the home page"} arrow={true} active={false} onClick={() => navigate("/")} />
        </div>
    )
}