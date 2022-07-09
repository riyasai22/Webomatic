import "./App.css";
import SupplierHome from "./screens/SupplierScreen/SupplierHome/SupplierHome";
import { Routes, Route } from "react-router-dom";
import { axiosInstance } from "./actions/authUserActions";

function App() {
  axiosInstance.interceptors.response.use((res) => {
    return res;
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<SupplierHome />} />
      </Routes>
    </>
  );
}

export default App;
