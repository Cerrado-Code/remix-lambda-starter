import { cn } from "~/lib/utils";

interface InboxPageProps{
    className?: string
}

const InboxPage: React.FC<InboxPageProps> = ({ className }) => {

  return (
    <div className={cn(className, 'bg-slate-500')}>


    </div>
  );
  
}

export default InboxPage;
