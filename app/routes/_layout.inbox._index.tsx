import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import ConteudoPostsCentral from "~/components/pages/conteudo-posts/central-conteudo-posts";
import InboxListaComentarios from "~/components/pages/inbox/InboxPage";
import NavigationBarInbox from "~/components/pages/navigation/navbar-inbox/navbar-inbox";
import SidebarAccounts from "~/components/pages/navigation/sidebar-accounts/accounts-sidebar";
import ViewNovidades from "~/components/pages/view-novidades/view-novidades";

export default function InboxDash() {
  const [view, setView] = useState("");
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const view = urlParams.get("view");
    setView(view ?? "");
  }, [location.search]);

  return (
    <div className="">
      <NavigationBarInbox></NavigationBarInbox>
      <div className="flex">
        <SidebarAccounts />
        <div className="flex flex-col w-full border">
          <InboxListaComentarios />
          <div className="flex">
            <div className="w-[30%]">
              {" "}
              {view == "novidades" && (
                <div className="w-full">
                  <ViewNovidades className="w-full" />
                </div>
              )}
              {view == "lidas" && <div>adas</div>}
            </div>
            <div className="flex w-[69%] justify-center mt-2">
              <ConteudoPostsCentral />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
