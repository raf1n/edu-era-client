import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useState } from "react";

const Nav = () => {
  const [user, setUser] = useState(false);
  const [isShown, setIsShown] = useState(false);
  return (
    <Navbar fluid={true} rounded={true} className="mx-24">
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Edu Era
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <>
            <Dropdown
              className="relative"
              inline={true}
              label={
                <Avatar
                  className="lg:fixed"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                >
                  {isShown && (
                    <small className="text-red-900 font-bold absolute top-14 right-10 lg:top-2 lg:right-0 lg:-left-60">
                      You hover over the button.
                    </small>
                  )}
                </Avatar>
              }
            ></Dropdown>
            <Button className="absolute top-2 right-1">log out</Button>
          </>
        ) : (
          <Button>Login</Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars">Home</Navbar.Link>
        <Navbar.Link href="/navbars">Courses</Navbar.Link>
        <Navbar.Link href="/navbars">Faq</Navbar.Link>
        <Navbar.Link href="/navbars">Blog</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
