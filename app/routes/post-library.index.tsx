import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/post-library/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-5xl font-bold text-white mb-[50px]">
        Post Library 📚
      </h1>
      <div className="flex flex-col gap-5"></div>
    </>
  );
}
