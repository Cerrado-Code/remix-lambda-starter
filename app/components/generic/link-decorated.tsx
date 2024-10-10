import React, { ReactNode } from "react";
import { Link } from "../ui/link";
import { cn } from "~/lib/utils";


interface LinkDecoratedProps {
    className?: string;
    children?: ReactNode;
    to: string;
}

 const LinkDecorated: React.FC<LinkDecoratedProps> = ({ className, children, to }) => {

  return(
    <div className={cn(className, 'hover:bg-slate-200 rounded-full p-2')}>
      <Link to={to}>{children}</Link>
    </div>
  )
}

export default LinkDecorated;