import InboxPage from "~/components/pages/inbox/inbox";
import NavigationBarInbox from "~/components/pages/navigation/navbar-inbox/navbar-inbox";
import SidebarAccounts from "~/components/pages/navigation/sidebar-accounts/accounts-sidebar";

export default function InboxDash() {
  return (
    <div>
      <NavigationBarInbox ></NavigationBarInbox>
      <SidebarAccounts></SidebarAccounts>
      <InboxPage className={"w-full"} />
    </div>
  );
}
