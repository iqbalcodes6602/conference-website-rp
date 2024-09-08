import { Typography, IconButton } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  { name: "Home", href: "/home" },
  { name: "Submission", href: "/submission" },
  { name: "Important Dates", href: "/important-dates" },
  { name: "Committee", href: "/committee" },
  { name: "Venue & Accommodation", href: "/venue-accommodation" },
  { name: "Contact Us", href: "/contact" },
  { name: "Registration", href: "/registration" },
];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h6"
            className="text-gray-900"
          >
            IPDIMS
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <NavLink to={link.href}>
                  <Typography
                    as="a"
                    variant="small"
                    color="white"
                    className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Typography>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2 text-gray-900">
            <IconButton size="sm" className="text-gray-900" variant="text">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" className="text-gray-900" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" className="text-gray-900" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" className="text-gray-900" variant="text">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; IPDIMS {CURRENT_YEAR} Made by Department of Industrial Design, NIT Rourkela.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
