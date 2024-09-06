import { Typography } from "@material-tailwind/react";
import AnnouncementsCard from "./components/announcements-card";
import PastEventsCard from "./components/pastevents-card";


export function Announcements() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10 my-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        Lorem
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Lorem Ipsum 2024
      </Typography>
      <Typography
        variant="lead"
        className="mt-2  mb-8 w-full font-normal !text-gray-500"
        style={{
          textAlign: 'justify',
          // textJustify: 'inter-word'  
        }}
      >
        Product Design is the idea generation to commercialize the product by a systematic approach, conceptualize and evaluate ideas to create a product. The product designer’s role is to combine art, science, and technology to create new products that people can use. Their evolving role has been facilitated by digital tools that now allow designers to communicate, visualize, analyze and produce tangible ideas in a way that would have taken greater man power in the past.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <AnnouncementsCard />
        <PastEventsCard />
      </div>
    </section>
  );
}

export default Announcements;
