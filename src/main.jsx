import { StrictMode, Fragment } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "@/assets/css/index.scss"

createRoot(document.getElementById("root")).render(
    <Fragment>
        <App />
    </Fragment>,
)
