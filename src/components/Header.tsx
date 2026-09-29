import { SunIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="p-1 w-full border border-border rounded-lg bg-surface">
      <div className="flex w-full items-center justify-between">
        <div className="pl-2 tracking-wide">Debabrata Banik</div>
        <div className="flex items-center gap-7">
          <nav>
            <ul className="flex items-center gap-7 text-sm  text-text-muted">
              <li>Home</li>
              <li>Projects</li>
              <li>Skills</li>
              <li>Contact</li>
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
