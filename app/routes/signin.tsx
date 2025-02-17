import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/signin"!
      <button
        onClick={() => window.$memberstackDom.openModal("LOGIN")}
        className="w-32 h-32 bg-amber-200"
      ></button>
      <Link to="/">Hello</Link>
    </div>
  );
}
