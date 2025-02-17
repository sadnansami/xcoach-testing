import { createFileRoute, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const router = useRouter();

  return (
    <>
      <div className="h-96 w-96 bg-red-600">333</div>
      <button type="button">Add 1 to ?</button>
    </>
  );
}
