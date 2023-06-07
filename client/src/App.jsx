import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PasswordPage } from "./pages/PasswordPage";
import { PasswordFormPage } from "./pages/PasswordFormPage";
import { Navigation } from "./components/Navigation";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/password" />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/password-create" element={<PasswordFormPage />} />
        <Route path="/password/:id" element={<PasswordFormPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
