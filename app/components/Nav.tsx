"use client";

import { User } from "@prisma/client";

interface NavbarProps {
  currentUser: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="">
      <h2>
        안녕하세요. {currentUser ? `${currentUser.name}` : "Anonymous"} 님
      </h2>
    </div>
  );
};

export default Navbar;
