import Link from "next/link";
import { Home, Phone, Calendar, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block border-t border-border bg-background/95 backdrop-blur-sm md:hidden">
      <div className="flex items-center justify-around py-2">
        <NavItem href="/" icon={<Home className="h-5 w-5" />} label="ホーム" />
        <NavItem
          href={`tel:${siteConfig.contact.phone}`}
          icon={<Phone className="h-5 w-5" />}
          label="電話"
        />
        <NavItem
          href="https://petlife.asia/salon/17897/"
          target="_blank"
          rel="noopener noreferrer"
          icon={<Calendar className="h-5 w-5" />}
          label="予約"
        />
        <NavItem
          href={siteConfig.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          icon={<Instagram className="h-5 w-5" />}
          label="Instagram"
        />
      </div>
    </div>
  );
}

type NavItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  target?: string;
  rel?: string;
};

function NavItem({ href, icon, label, ...props }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center px-2 py-1"
      {...props}
    >
      <span className="text-foreground">{icon}</span>
      <span className="mt-1 text-xs text-muted-foreground">{label}</span>
    </Link>
  );
}
