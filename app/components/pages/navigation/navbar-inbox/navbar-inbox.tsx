import { Link } from "@remix-run/react";
import React, { useState } from "react";

export default function NavigationBarInbox() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border">
      <nav>
        
      </nav>
    </div>
  );
}
