import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";


export function AboutCard({ title='', description='', subTitle='' }) {
  return (
    <Card shadow={false}>
      <CardBody className="h-full p-5 flex flex-col items-center rounded-2xl bg-gray-900 ">
        <Typography variant="h6" className="mb-4 text-center" color="white">
          {subTitle}
        </Typography>
        <Typography variant="h4" className="text-center" color="white">
          {title}
        </Typography>
        <Typography
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-10/12 text-justify font-normal"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}


export default AboutCard;
