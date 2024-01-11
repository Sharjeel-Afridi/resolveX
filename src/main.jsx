import ReactDOM  from "react-dom/client";
import Main from "../components/Main";
import "../src/styles.css";

const AppLayout = () => {
    return <Main />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)