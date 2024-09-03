import { Typography } from "@material-tailwind/react";
import AboutCard from "./components/about-card";
import { Carousel } from "@material-tailwind/react";

const EVENT_INFO = [
  {
    title: "About NIT Rourkela ",
    description:
      "NIT Rourkela is an institution of national importance with a reputation for excellence in research, consultancy, and education at the undergraduate, postgraduate, and doctoral levels. It is passionately committed to making our country a world leader in technology and science, and to inculcate this commitment among all its students. Our target is to be known worldwide for our academic standards and to be counted among the best technological institutes in India in terms of innovation, entrepreneurship, and intellectual wealth creation.",
    // subTitle: "Presentation",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        IPDIMS 2024
      </Typography>
      <Typography
        variant="lead"
        className="mt-2  mb-8 w-full font-normal !text-gray-500"
        style={{
          textAlign: 'justify',
          // textJustify: 'inter-word'  
        }}
      >
        Product Design is the idea generation to commercialize the product by a systematic approach, conceptualize and evaluate ideas to create a product. The product designer’s role is to combine art, science, and technology to create new products that people can use. Their evolving role has been facilitated by digital tools that now allow designers to communicate, visualize, analyze and produce tangible ideas in a way that would have taken greater man power in the past. Smart Manufacturing is a broad category of manufacturing with the goal of optimizing concept generation, production, and product transaction. While manufacturing can be defined as the multi-phase process of creating a product out of raw materials, smart manufacturing is a subset that employs computer control and high levels of adaptability. Smart manufacturing aims to take advantage of advanced information and manufacturing technologies to enable flexibility in physical processes to address a dynamic and global market. The theme IPDIMS-24 discusses the current issues that are facing in industries. This conference covers a wide range of fields like Computer Science, Electronics, Electrical, Automation, Robotics, 3D Printing, Smart Manufacturing, Mechatronics, Composite Materials and many more. The research related to all fields of engineering likely to be covered in this conference. Experts from industries and academia deliver the keynote lecture at this conference.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <Carousel className="rounded-xl">
          <img
          src = "/images/past_ipdims/DSC_0006.JPG"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
          src="/images/past_ipdims/DSC_0129.JPG"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
          src = "/images/past_ipdims/DSC_0213.JPG"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
        <div className="md:col-span-2">
          <AboutCard
            title="About Industrial Design Department!"
            description="Industrial Design involves designing of products of daily life such as mobile phones, cars, home interiors, furniture, home decor, packaging and branding, and so on in such a way so that it makes the modern human life easy and more pleasurable. The field also includes designing of workplaces and tools/equipment in industries to make them safer and more user friendly. The present-day academic activities of Industrial Design are very broad with this due reason. Department of Industrial Design at National Institute of Technology Rourkela was established in 2010 to flourish in the emerging areas of design fields. The Industrial Design department at NIT Rourkela has specialized faculties in all important areas of industrial design such as product design, ergonomics & UX/UI."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
