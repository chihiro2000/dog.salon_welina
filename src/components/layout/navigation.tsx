import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/price", label: "料金" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/access", label: "アクセス" },
];

interface NavigationProps {
  mobile?: boolean;
}

export function Navigation({ mobile = false }: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "transition-colors hover:text-foreground/80",
            mobile ? "block w-full p-2" : "",
            pathname === item.href
              ? "font-medium text-foreground"
              : "text-foreground/60"
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
