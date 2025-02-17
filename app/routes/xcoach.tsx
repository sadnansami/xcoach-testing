import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/xcoach")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <iframe
      src="https://tixaeagents.ai/app/na/render/P5ittWdfO9Lah6S/iframe"
      className="w-full h-full -m-[30px] box-border"
      frameborder="0"
    ></iframe>
  );
}
