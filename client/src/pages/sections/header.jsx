import React, { useContext } from "react";
import { Bars3Icon, CalendarDateRangeIcon, EnvelopeIcon, HomeIcon, MapIcon, PaperAirplaneIcon, UserCircleIcon, UserGroupIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { IconButton, Navbar, Typography } from "@material-tailwind/react";
import { Drawer, Button, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";
import { UserContext } from "../../UserContext";
import { NavLink } from "react-router-dom";
import UserAvatar from "../../components/useravatar";
import NavItem from "../../components/navitem";


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
  const { user, logout } = useContext(UserContext); // Access user context
  const closeDrawer = () => setOpen(false);

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
      color={(isScrolling || page !== 'home') ? "transparent" : "transparent"}
      className={`fixed top-0 z-50 border-0 ${isScrolling ? 'bg-[#ffffff40] backdrop-blur-md border-b-[1px] border-[#0000000d]' : ''}`}
    >
      <div className={`container mx-auto flex items-center justify-between ${(isScrolling || page !== 'home') ? "text-black" : "text-white"}`}>
        <img
          alt="ipdmis logo"
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
          {/* Conditionally render the registration or user email */}
          {user ? (
            <UserAvatar />
          ) : (
            <NavItem href="/registration">
              <UserCircleIcon className="h-4 w-4" />
              <span>Registration</span>
            </NavItem>
          )}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <img
            alt="nitr logo"
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
        <Drawer open={open} onClose={closeDrawer} placement="right">
          <div className="mb-2 flex items-center justify-between p-4">
            <Typography variant="h5" color="blue-gray">
              Material Tailwind
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <List>
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <ListItem key={name} onClick={closeDrawer}>
                <ListItemPrefix>
                  <Icon className="h-5 w-5" />
                </ListItemPrefix>
                {name}
              </ListItem>
            ))}
            {/* Conditionally render the registration or user email */}
            {user ? (
              <ListItem onClick={closeDrawer}>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                {user.email}
                <ListItemSuffix>
                  <Button onClick={logout} size="sm" color="red">
                    Logout
                  </Button>
                </ListItemSuffix>
              </ListItem>
            ) : (
              <ListItem onClick={closeDrawer}>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Registration
              </ListItem>
            )}
          </List>
          <Button className="mt-3 ml-5" size="sm">
            Documentation
          </Button>
        </Drawer>
      </div>
    </Navbar>
  );
}

export default Header;
