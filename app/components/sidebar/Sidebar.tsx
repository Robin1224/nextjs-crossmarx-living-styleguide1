import Link from "next/link";
import Logo from "./Logo";
import DarkmodeToggle from "./DarkmodeToggle";
import Tabs from "./Tabs";

interface Props {}

export default function Sidebar(props: Props) {
  return (
    <div className="grid h-screen min-h-screen w-full overflow-hidden grid-cols-[240px_1fr] bg-bg-1 text-text-1 dark:bg-dark-bg-1 dark:text-dark-text-1">
      <div className="flex flex-col gap-4 p-4 border-r border-gray-700">
        <Logo />
        <nav className="space-y-2 mt-8">
          <Tabs />
        </nav>
        <div className="absolute bottom-4">
          <DarkmodeToggle />
        </div>
      </div>
    </div>
  );
}
