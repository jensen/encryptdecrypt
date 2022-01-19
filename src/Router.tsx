import { Routes, Route } from "solid-app-router";
import Encrypt from "./components/Encrypt";
import Decrypt from "./components/Decrypt";
import Choose from "./components/Choose";
import Application from "./Application";

export default function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<Application />}>
        <Route path="/" element={<Choose />} />
        <Route path="encrypt" element={<Encrypt />} />
        <Route path="decrypt" element={<Decrypt />} />
      </Route>
    </Routes>
  );
}
