import type { Component } from "solid-js";
import { Outlet, Link, useLocation } from "solid-app-router";

const Application: Component = () => {
  const location = useLocation();

  return (
    <main className="h-full flex flex-col justify-center items-center">
      <header className="uppercase my-4">
        <h2
          classList={{
            "text-green-400": location.pathname === "/encrypt",
            "text-green-900": location.pathname !== "/encrypt",
          }}
          className="inline-block text-4xl font-bold"
        >
          <Link href="/encrypt">Encrypt</Link>
        </h2>
        <span className="text-green-300 text-4xl">/</span>
        <h2
          classList={{
            "text-green-400": location.pathname === "/decrypt",
            "text-green-900": location.pathname !== "/decrypt",
          }}
          className="inline-block text-4xl font-bold"
        >
          <Link href="/decrypt">Decrypt</Link>
        </h2>
      </header>
      <Outlet />
    </main>
  );
};

export default Application;
