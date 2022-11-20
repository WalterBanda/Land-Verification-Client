import Link from "next/link";
import { useRouter } from "next/router";
import { sidebar } from "../../styles";
import { useEffect, useState } from "react";

/**
 *
 * @param {JSX} children - This `replaces the Sidebar children ` used to set custom widgets for Sidebar
 * @returns
 */
export default function Sidebar({ children }) {
  return (
    children ?? (
      <div className={sidebar.root}>
        <SidebarItem
          itemName="dashboard"
          itemIcon="verifier-home"
          pageLink="/dashboard"
        />
        <SidebarItem
          itemName="land owners"
          itemIcon="verifier-history"
          pageLink="/dashboard/owners"
        />
        <SidebarItem
          itemName="stats"
          itemIcon="verifier-transactions"
          pageLink="/dashboard/transactions"
        />
        <SidebarItem
          itemName="settings"
          itemIcon="verifier-settings"
          pageLink="/dashboard/settings"
        />
      </div>
    )
  );
}

function SidebarItem({ itemName, itemIcon, pageLink }) {
  const router = useRouter();

  return (
    <Link href={pageLink} passHref>
      <div
        className={`${sidebar.item}`}
        style={{
          color: router.pathname == pageLink ? "var(--text-active)" : undefined,
        }}
      >
        <i className={`${itemIcon}`} />
        <h2>{itemName}</h2>
      </div>
    </Link>
  );
}
