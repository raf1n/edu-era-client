import { Avatar, Button, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [user, setUser] = useState(true);
  const [isShown, setIsShown] = useState(false);
  return (
    <Navbar fluid={true} rounded={true} className="mx-24">
      <Link to="/" className="flex">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174675.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Edu Era
        </span>
      </Link>
      <div className="flex md:order-2">
        {user ? (
          <>
            <div className="flex md:order-2">
              <div className="flex">
                <Avatar
                  className="fixed"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                >
                  {isShown && (
                    <small className="text-red-900 font-bold relative right-44">
                      Rahim Uddin Rafin
                    </small>
                  )}
                </Avatar>
                <Button color="dark" className="ml-16 p-0">
                  log out
                </Button>
              </div>
            </div>
          </>
        ) : (
          <Button color="dark" className="p-0 mr-2">
            Login
          </Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/home">Home</Link>
        <Link>Courses</Link>
        <Link>Faq</Link>
        <Link>Blog</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
