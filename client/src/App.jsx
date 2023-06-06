import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PasswordPage } from "./pages/PasswordPage";
import { PasswordFormPage } from "./pages/PasswordFormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/password" />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/password-create" element={<PasswordFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
