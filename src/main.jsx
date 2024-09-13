import { createRoot } from 'react-dom/client'
import './assets/fonts/fontawesome-free-6.1.2-web/css/all.css';
import './assets/css/normalize.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';
import {HeaderPub} from "./components/layouts/public/HeaderPub.jsx";

createRoot(document.getElementById('root')).render(
    <>
    <HeaderPub/>
    </>
)
