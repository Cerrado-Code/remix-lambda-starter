import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import InboxPage from "~/components/pages/inbox/InboxPage";
import NavigationBarInbox from "~/components/pages/navigation/navbar-inbox/navbar-inbox";
import SidebarAccounts from "~/components/pages/navigation/sidebar-accounts/accounts-sidebar";
import ViewNovidades from "~/components/pages/view-novidades/view-novidades";

export default function InboxDash() {

  const location = useLocation();
  const [view, setView] = useState('')

  useEffect(() => {
      // Criar um objeto URL para facilitar a manipulação
      const urlParams = new URLSearchParams(location.search);
      const view = urlParams.get('view');
      setView(view ?? '')
  }, [location.search]);

  return (
    <div>
      <NavigationBarInbox ></NavigationBarInbox>
      <div className="flex">
      <SidebarAccounts></SidebarAccounts>
      <div className="flex flex-col w-full">
      <InboxPage className="" />
      {view == 'novidades' && <div className="w-full"><ViewNovidades className="w-3/12"/></div>}
      {view == 'lidas' && <div>adas</div>}
      </div>
      </div>
      
    </div>
  );
}
