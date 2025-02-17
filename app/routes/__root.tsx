import Navbar from "@/framer/navbar";
import Sidebar from "@/framer/sidebar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import CSS from "@/app/css/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "XCoach",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: CSS,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
        <script
          data-memberstack-app="app_cm6a8cjc200130sthgbcffayo"
          data-memberstack-use-cookies
          src="https://static.memberstack.com/scripts/v1/memberstack.js"
          type="text/javascript"
        ></script>
      </head>
      <body className="bg-[#1B1C1C] overflow-x-hidden">
        {/*<Navbar className="!fixed !w-full z-5"></Navbar>
        <Sidebar className="!fixed !h-screen z-10"></Sidebar>*/}
        <main className="p-[50px] pt-[130px] pl-[130px] w-screen h-screen flex justify-center">
          {children}
        </main>
        <Scripts />
      </body>
    </html>
  );
}
