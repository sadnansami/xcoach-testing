import ResourceCard from "@/framer/resource-card";
import { createFileRoute } from "@tanstack/react-router";
import { airtableClient, Airtable } from "../components/airtableClient";

export const Route = createFileRoute("/resources/")({
  component: RouteComponent,
  loader: async () => {
    const resources = await airtableClient.table("Resources").list().all();

    console.log(resources[0].get("Cover Image"));

    return resources;
  },
});

function RouteComponent() {
  const resources = Route.useLoaderData();

  const ResourceCollection = resources.map((resource) => {
    return (
      <ResourceCard
        className="!max-w-[1200px]"
        variant="Featured"
        title={resource.fields["Name"]}
        description={resource.fields["Description"]}
        image={resource.fields["Cover Image"][0].url}
        link={`/resources/${resource.id}`}
      ></ResourceCard>
    );
  });

  return (
    <>
      <h1 className="text-5xl font-bold text-white mb-[50px]">
        Resource Hub 📑
      </h1>
      <div className="flex flex-col gap-5">{ResourceCollection}</div>
    </>
  );
}
