import React from "react";

import { Bars3Icon, CalendarDateRangeIcon, CommandLineIcon, EnvelopeIcon, HomeIcon, MapIcon, PaperAirplaneIcon, RectangleStackIcon, UserCircleIcon, UserGroupIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Avatar, Button, IconButton, Navbar, Typography } from "@material-tailwind/react";



function NavItem({ children, href }) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        // target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon, // You should replace this with the appropriate icon component
    href: "/home", // Provide the correct href if needed
  },
  {
    name: "Submission",
    icon: PaperAirplaneIcon, // You should replace this with the appropriate icon component
    href: "/submission", // Provide the correct href if needed
  },
  {
    name: "Important Dates",
    icon: CalendarDateRangeIcon, // You should replace this with the appropriate icon component
    href: "/important-dates", // Provide the correct href if needed
  },
  {
    name: "Registration",
    icon: UserIcon, // You should replace this with the appropriate icon component
    href: "/registration", // Provide the correct href if needed
  },
  {
    name: "Committee",
    icon: UserGroupIcon, // You should replace this with the appropriate icon component
    href: "/committee", // Provide the correct href if needed
  },
  {
    name: "Venue & Accommodation",
    icon: MapIcon, // You should replace this with the appropriate icon component
    href: "/venue-accommodation", // Provide the correct href if needed
  },
  {
    name: "Contact Us",
    icon: EnvelopeIcon, // You should replace this with the appropriate icon component
    href: "/contact", // Provide the correct href if needed
  },
];


export function Header({ page='nothome'}) {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      shadow={false}
      fullWidth
      blurred={false}
      color={(isScrolling || page!=='home') ? "light-blue" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* <Typography
          color={isScrolling ? "blue-gray" : "white"}
          className="text-lg font-bold"
        >
          Material Tailwind
        </Typography> */}
        <Avatar />
        <ul
          className={`hidden items-center gap-8 lg:flex text-white`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-4 w-4" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          {/* <a href="/login">
            <Button className={`${isScrolling ? "text-gray-900" : "text-white"} hover:bg-gray-900 hover:bg-opacity-25`} variant="text">
              Sign in
            </Button>
          </a>
          <a href="/register">
            <Button className={`shadow-none ${isScrolling ? "bg-gray-900 text-white" : "bg-white text-gray-900"} hover:shadow-none`}>
              Sign Up
            </Button>
          </a> */}
          <Avatar />
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
    </Navbar>
  );
}

export default Header;
