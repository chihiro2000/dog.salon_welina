import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/commitment", label: "こだわり" },
  { href: "/price", label: "料金" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/about", label: "店舗概要" },
];

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void; // メニューを閉じるためのコールバック関数を追加
}

export function Navigation({ mobile = false, onItemClick }: NavigationProps) {
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
          onClick={onItemClick} // クリック時にコールバックを実行
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
