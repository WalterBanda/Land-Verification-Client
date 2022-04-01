import Link from "next/link";
import { useRouter } from "next/router";
import { sidebar } from "../../styles";

/**
 *
 * @param {JSX} children - This `replaces the Sidebar children ` used to set custom widgets for Sidebar
 * @returns
 */
export default function Sidebar({ children }) {
  return (
    children ?? (
      <div className={sidebar.root}>
        <SidebarItem itemName="dashboard" itemIcon="verifier-home" pageLink="/home" />
        <SidebarItem itemName="land owners" itemIcon="verifier-history" pageLink="/owners" />
        <SidebarItem itemName="transactions" itemIcon="verifier-transactions" pageLink="/transactions" />
        <SidebarItem itemName="settings" itemIcon="verifier-settings" pageLink="/settings" />
      </div>
    )
  );
}

function SidebarItem({ itemName, itemIcon, pageLink }) {
  const router = useRouter();
  const active = {
    color: router.pathname.startsWith(pageLink) ? "var(--text-active)" : "",
  };
  return (
    <Link href={pageLink} passHref>
      <div className={`${sidebar.item}`} style={active}>
        <i className={`${itemIcon}`} />
        <h2>{itemName}</h2>
      </div>
    </Link>
  );
}
