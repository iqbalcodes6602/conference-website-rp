import { Typography } from '@material-tailwind/react';
import React from 'react'
import { NavLink } from 'react-router-dom';

function NavItem({ children, href }) {
    return (
      <li>
        <Typography
          as="a"
          variant="paragraph"
          className="flex items-center gap-2 font-semibold"
        >
          <NavLink to={href} className="flex items-center gap-2 font-semibold">
            {children}
          </NavLink>
        </Typography>
      </li>
    );
  }

export default NavItem