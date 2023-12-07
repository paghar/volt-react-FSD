import { HashRouter } from "react-router-dom";

// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "@/pages/HomePage";
import ScrollToTop from "@/widgets/ScrollToTop/ui";


const App = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <HomePage />
        </HashRouter>
    );
};

export default App;