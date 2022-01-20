import { Routes, Route } from "solid-app-router";
import Cipher from "./components/Cipher";
import Choose from "./components/Choose";
import Application from "./Application";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Application />}>
        <Route path="/" element={<Choose />} />
        <Route path="encrypt" element={<Cipher />} />
        <Route path="decrypt" element={<Cipher />} />
      </Route>
    </Routes>
  );
}
