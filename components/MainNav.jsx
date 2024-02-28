"use client";
import { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-base-100 sticky top-0 z-10 shadow-sm w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-800 font-bold text-lg">
          <a href="/" className="text-xl">
            <img
              className="p-1 h-12 w-12 lg:w-20 lg:h-20 "
              src="/assets/logo.png"
            />{" "}
            CSE Tour 2K24{" "}
          </a>
        </div>

        <div className="hidden md:flex space-x-4 m-1">
          <a href="/" className="text-gray-800 m-2 p-1">
            Home
          </a>
          <a href="/allperson" className="text-gray-800 m-2 p-1">
            {" "}
            Who Participated{" "}
          </a>

          <a href="/tourplane" className="text-gray-800 m-2 p-1">
            {" "}
            Tour Timeline{" "}
          </a>

          <a href="/allperson" className="text-gray-800 m-2 p-1">
            Contact
          </a>
          {user ? (
            // If user has data
            <a href="/chats" className="btn">
              Inbox
            </a>
          ) : (
            // If user has no data
            <a href="/login">
              <button className="btn btn-primary">Log In</button>
            </a>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="text-2xl mr-2" />
            ) : (
              <ListIcon className="text-2xl mr-2" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2">
          <a href="/" className="block text-gray-800 py-2 mx-2">
            Home
          </a>
          <a href="/allperson" className="block text-gray-800 py-2 mx-2">
            {" "}
            Who Participated{" "}
          </a>

          <a href="/tourplane" className="block text-gray-800 py-2 mx-2">
            {" "}
            Tour Timeline{" "}
          </a>

          <a href="/allperson" className="block text-gray-800 py-2 mx-2">
            Contact
          </a>
          {user ? (
            // If user has data
            <a href="/chats" className="btn">
              Inbox
            </a>
          ) : (
            // If user has no data
            <a href="/login">
              <button className="btn btn-primary">Log In</button>
            </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
