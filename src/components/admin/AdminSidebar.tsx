"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  ExternalLink,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Posts", href: "/admin/posts", icon: FileText },
  { label: "Categories", href: "/admin/categories", icon: FolderOpen },
];

interface AdminSidebarProps {
  user?: { name?: string | null; email?: string | null } | null;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ user }) => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-stone-200 flex flex-col min-h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-stone-100">
        <Link href="/admin" className="flex items-center gap-3">
          <img
            src="/images/logo.svg"
            alt="Tenki"
            className="h-7 w-7 object-contain"
          />
          <span className="font-ogg text-xl font-bold text-tenki-text">
            tenki
          </span>
        </Link>
        <p className="text-xs text-tenki-muted mt-2 font-sans">
          Content Management
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-sans transition-colors ${
                isActive
                  ? "bg-tenki-accent/10 text-tenki-accent font-medium"
                  : "text-tenki-muted hover:bg-stone-50 hover:text-tenki-text"
              }`}
            >
              <item.icon size={18} strokeWidth={1.5} />
              {item.label}
            </Link>
          );
        })}

        <div className="pt-4 mt-4 border-t border-stone-100">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-sans text-tenki-muted hover:bg-stone-50 hover:text-tenki-text transition-colors"
          >
            <ExternalLink size={18} strokeWidth={1.5} />
            View Site
          </a>
        </div>
      </nav>

      {/* User + Logout */}
      <div className="p-4 border-t border-stone-100">
        {user && (
          <p className="text-xs text-tenki-muted font-sans mb-3 px-4 truncate">
            {user.email}
          </p>
        )}
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-sans text-tenki-muted hover:bg-red-50 hover:text-red-600 transition-colors w-full"
        >
          <LogOut size={18} strokeWidth={1.5} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
