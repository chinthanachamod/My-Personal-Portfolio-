import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
export function AppRouter() {
  return <BrowserRouter>
          <Routes>
            <Route path="/home" element={<App />} />
          </Routes>
      </BrowserRouter>;
}