import { Link } from "@remix-run/react";
import React from "react";
import { useAuth } from "../lib/auth-hook";


export default function Index() {
  const { user, loggedIn } = useAuth()
  console.log(user, loggedIn)
  return (
    <div>
       <p className="text-red-600">Run DEv</p>
       <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}
