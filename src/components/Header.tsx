import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import dawnKnightLogo from "@/assets/dawn-knight-logo.jpg";

const navItems = [
  { label: "Каталог", to: "/catalog" },
  { label: "Хиты", to: "/#featured" },
  { label: "FAQ", to: "/#faq" },
  { label: "Контакты", to: "/#contacts" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 premium-focus rounded-lg">
          <img src={dawnKnightLogo} alt="Dawn Knight" className="h-11 w-11 rounded-xl object-cover" loading="lazy" />
          <div>
            <p className="text-lg font-extrabold tracking-tight text-gradient">Dawn Knight</p>
            <p className="text-xs text-muted-foreground">Премиум LED для авто</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className="premium-focus rounded-md px-2 py-1 text-sm text-muted-foreground transition hover:text-foreground">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+78001234567" className="text-sm text-muted-foreground hover:text-foreground">
            +7 (800) 123-45-67
          </a>
          <Button size="sm" asChild>
            <a href="#lead-form">Консультация</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Открыть меню">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mt-10 space-y-4">
              {navItems.map((item) => (
                <NavLink key={item.label} to={item.to} className="block rounded-lg bg-muted/40 px-4 py-3 text-sm">
                  {item.label}
                </NavLink>
              ))}
              <Button className="w-full gap-2" asChild>
                <a href="tel:+78001234567">
                  <PhoneCall className="h-4 w-4" /> Позвонить
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
