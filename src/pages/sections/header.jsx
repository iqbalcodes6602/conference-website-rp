import React from "react";

import { Bars3Icon, CalendarDateRangeIcon, EnvelopeIcon, HomeIcon, MapIcon, PaperAirplaneIcon, UserCircleIcon, UserGroupIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { IconButton, Navbar, Typography } from "@material-tailwind/react";



function NavItem({ children, href }) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        // target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-semibold"
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/home",
  },
  {
    name: "Submission",
    icon: PaperAirplaneIcon,
    href: "/submission",
  },
  {
    name: "Important Dates",
    icon: CalendarDateRangeIcon,
    href: "/important-dates",
  },
  {
    name: "Registration",
    icon: UserCircleIcon,
    href: "/registration",
  },
  {
    name: "Committee",
    icon: UserGroupIcon,
    href: "/committee",
  },
  {
    name: "Venue & Accommodation",
    icon: MapIcon,
    href: "/venue-accommodation",
  },
  {
    name: "Contact Us",
    icon: EnvelopeIcon,
    href: "/contact",
  },
];


export function Header({ page = 'nothome' }) {
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
      color={(isScrolling || page !== 'home') ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className={`container mx-auto flex items-center justify-between ${(isScrolling || page !== 'home') ? "text-black" : "text-white"}`}>
        {/* <Typography
          color={isScrolling ? "blue-gray" : "white"}
          className="text-lg font-bold"
        >
          Material Tailwind
        </Typography> */}
        <img
          src="/logos/ipdmis.png"
          className="w-10 h-10"
        />
        <ul
          className={`hidden items-center gap-8 lg:flex`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-4 w-4" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <img
            src="/logos/nit_rourkela.png"
            className="w-10 h-10"
          />
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
