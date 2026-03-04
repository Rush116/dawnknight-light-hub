import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#hits", label: "Хиты" },
  { href: "#how-to-choose", label: "Как выбрать" },
  { href: "#faq", label: "FAQ" },
];

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-extrabold tracking-wide text-gradient">
          Dawn Knight
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={isHome ? item.href : `/${item.href}`} className="transition-smooth hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden border-border/70 sm:flex">
            <Link to="/catalog">Подобрать лампы</Link>
          </Button>
          <Button asChild>
            <a href={isHome ? "#lead-form" : "/#lead-form"}>Консультация</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
