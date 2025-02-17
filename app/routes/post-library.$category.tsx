import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/post-library/$category")({
  component: RouteComponent,
});

function RouteComponent() {
  return <>TEST</>;
}
