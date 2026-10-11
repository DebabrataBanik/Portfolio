import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "../context/themeContext";

const links = [
  { label: "Home", href: "#home", cls: "nav-home" },
  { label: "About", href: "#about", cls: "nav-about" },
  { label: "Projects", href: "#projects", cls: "nav-projects" },
  { label: "Contact", href: "#contact", cls: "nav-contact" },
];

const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed max-w-200 z-30 w-full pt-4 px-2 bg-background">
      <div className="relative w-full p-1 border border-border rounded-lg bg-surface">
        <div className="flex w-full items-center justify-between">
          <a
            href="#home"
            aria-label="Debabrata Banik, back to top"
            className="pl-0.5"
          >
            <img
              src="/avatar.jpg"
              alt="avatar"
              width={32}
              height={36}
              className="size-8.5 rounded-md object-cover"
            />
          </a>

          <div className="flex items-center gap-3 sm:gap-7">
            <nav className="hidden sm:block">
              <ul className="flex items-center gap-7 text-sm text-text-muted font-heading">
                {links.map((l) => (
                  <li key={l.href}>
                    <a className={`nav-links ${l.cls}`} href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="p-2.5 border border-border rounded-lg bg-background cursor-pointer sm:hidden"
            >
              {open ? <XIcon size={15} /> : <MenuIcon size={15} />}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 border border-border rounded-lg bg-background cursor-pointer"
            >
              {isDarkMode ? <MoonIcon size={15} /> : <SunIcon size={15} />}
            </button>
          </div>
        </div>

        {open && (
          <ul
            id="mobile-menu"
            className="absolute inset-x-0 top-full mt-2 flex flex-col p-2 border border-border rounded-lg bg-surface text-sm text-text-muted font-heading sm:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 hover:underline decoration-accent hover:underline-offset-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
