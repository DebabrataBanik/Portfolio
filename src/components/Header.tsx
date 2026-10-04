import { SunIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="p-1 w-full border border-border rounded-lg bg-surface">
      <div className="flex w-full items-center justify-between">
        <div className="pl-2 tracking-wide">Debabrata Banik</div>
        <div className="flex items-center gap-7">
          <nav>
            <ul className="flex items-center gap-7 text-sm  text-text-muted font-heading">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <button className="p-2 border border-border rounded-lg bg-background cursor-pointer">
            <SunIcon size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
