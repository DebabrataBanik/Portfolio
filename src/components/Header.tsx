import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "../context/themeContext";

const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <div className="fixed max-w-200 z-10 w-full pt-4 px-2 bg-background">
      <div className="w-full p-1 border border-border rounded-lg bg-surface">
        <div className="flex w-full items-center justify-between">
          <div className="pl-2 tracking-wide">Debabrata Banik</div>
          <div className="flex items-center gap-7">
            <nav>
              <ul className="flex items-center gap-7 text-sm  text-text-muted font-heading">
                <li>
                  <a className="nav-links nav-home" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-links nav-about" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-links nav-projects" href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="nav-links nav-contact" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 border border-border rounded-lg bg-background cursor-pointer"
            >
              {isDarkMode ? <MoonIcon size={15} /> : <SunIcon size={15} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
