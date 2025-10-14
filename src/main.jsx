import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import AppRoutes from "./Routes/AppRoutes.jsx";
import { ProductProvider } from "./Context/Product/ProductProvider.jsx";
import Cartprovider from "./Context/Cart/Cartprovider.jsx";

createRoot(document.getElementById("root")).render(
  <Cartprovider>
    <ProductProvider>
      <AppRoutes>
        <App />
      </AppRoutes>
    </ProductProvider>
  </Cartprovider>,
);
