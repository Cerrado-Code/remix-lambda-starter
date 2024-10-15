import { useNavigate } from "@remix-run/react";
import {
  ChartColumnDecreasingIcon,
  Inbox,
  LogOutIcon,
  SettingsIcon,
} from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "~/components/ui/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useAuth } from "~/lib/auth-hook";
import { SideBarProps } from "~/types/ui/nav_types";

export const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const { user, showLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      //   showLogin();
    } else {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <div className="flex bg-gray-100 text-gray-900 w-full">
      <aside className="flex h-screen w-12 flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
          <img src="/app/assets/images/icone-feedguard.png" alt=""></img>
        </div>
        <nav className="flex flex-col  flex-1 gap-y-11 pt-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link to={"/inbox"} className="py-10">
                  <Inbox />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Inbox</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Link to={"/dashboard"}>
                  <ChartColumnDecreasingIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <div className="flex flex-col items-center gap-y-10 py-10 p-2">
          <TooltipProvider>
          <Tooltip>
              <TooltipTrigger>
                <Link to={"/settings"}>
                  <SettingsIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Link to={"/log-out"}>
                  <LogOutIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Log Out</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Link
                  className="mt-2 rounded-full bg-gray-100"
                  to={`/profile/${1}`}
                >
                  <img src="/app/assets/images/user.png" alt=""></img>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </aside>
      <div className="w-full">{children}</div>
    </div>
  );
};
