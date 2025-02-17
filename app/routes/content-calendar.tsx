import { createFileRoute, redirect } from "@tanstack/react-router";
import { airtableClient } from "../components/airtableClient";
import ContentCalendarItem from "@/framer/content-calendar-item";
import { getHeader } from "@tanstack/start/server";
import * as cookie from "cookie";
import memberstackAdmin from "@memberstack/admin";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const memberstack = memberstackAdmin.init(import.meta.env.VITE_MS_SECRET_KEY);

function isTokenExpired(token) {
  const payload = JSON.parse(atob(token.split(".")[1])); // Decode the token payload
  return payload.exp * 1000 < Date.now(); // Compare expiration time with current time
}

export const Route = createFileRoute("/content-calendar")({
  component: RouteComponent,
  beforeLoad: async () => {},
  loader: async () => {
    const contentCalendar = await airtableClient
      .table("Content Calendar")
      .list({ filterByFormula: "{Role}='Marketer'" })
      .all();

    //console.log(request.headers.get("cookie"));

    console.log();

    console.log(contentCalendar);
  },
});

const myArr = [1, 2, 3, 4, 5, 6, 7];

function RouteComponent() {
  return (
    <>
      <Carousel
        className="w-3/4 flex"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {myArr.map(() => {
            return (
              <CarouselItem className="basis-1/2">
                <ContentCalendarItem
                  dayOfTheWeek="Tuesday"
                  firstTask="Make x task"
                  secondTask="Make y Task"
                ></ContentCalendarItem>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
