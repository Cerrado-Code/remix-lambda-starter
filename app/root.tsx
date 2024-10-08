import { json, LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { auth } from './services/auth/auth.server'

import React from "react";
import styles from './tailwind.css?url'

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { AuthProvider } from "./lib/auth-hook";
import { SideBar } from "./components/pages/sidebar/sidebar";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await auth.isAuthenticated(request)

  return json({ user })
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useLoaderData<typeof loader>()
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" ></meta>
        <title>FeedGuard</title>
        <Meta />
        <Links />
      </head>
      <body>
      <AuthProvider user={loaderData?.user ?? null}>
        <SideBar>
        {children}
        </SideBar>
        </AuthProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
