// components/Layout.js
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { useState, useEffect } from "react";
import { sessionStorage } from "./shopify.server";
import { json } from "@remix-run/node";

export const ShopInfo = () => {
  const [shopDetails, setShopDetails] = useState({});

  useEffect(() => {
    const getSession = async () => {
      const sessionToken = await sessionStorage.getSessionToken();
      const session = await sessionStorage.getSession(sessionToken);
      setShopDetails(session.shop);
    };
    getSession();
  }, []);

  return (
    <div>
      <h3>Shop Details:</h3>
      <p>Name: {shopDetails.name}</p>
      <p>ID: {shopDetails.id}</p>
      <p>Domain: {shopDetails.domain}</p>
    </div>
  );
};

export const Layout = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Nishant Kumar Tiwary</h1>
        <ShopInfo />
      </body>
    </html>
  );
};