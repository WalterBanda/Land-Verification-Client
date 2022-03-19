import Link from "next/link";
import { useRouter } from "next/router";
import { sidebar_style } from "../../styles";

/**
 *
 * @param {JSX} children - This `replaces the Sidebar children ` used to set custom widgets for Sidebar
 * @returns
 */
export default function Sidebar({ children }) {
  return (
    children ?? (
      <div className={sidebar_style.root}>
        <SidebarItem itemName="Index" itemIcon="icon-search" pageLink="/" />
        <SidebarItem itemName="home" itemIcon="icon-search" pageLink="/home" />
      </div>
    )
  );
}

function SidebarItem({ itemName, itemIcon, pageLink }) {
  const router = useRouter();
  const active = {
    color: router.asPath === pageLink ? "#292A2D" : "",
  };
  return (
    <Link href={pageLink} passHref>
      <div className={`${sidebar_style.sidebar_item}`} style={active}>
        <i className={`${itemIcon}`} />
        <h3>{itemName}</h3>
      </div>
    </Link>
  );
}
