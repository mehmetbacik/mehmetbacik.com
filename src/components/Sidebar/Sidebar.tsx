import Link from "next/link";

const Sidebar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-60 bg-gray-800 text-white">
      <ul className="flex flex-col items-start p-4">
        {["Home", "About", "Resume", "Portfolio", "Services", "Contact"].map(
          (item) => (
            <li key={item} className="mb-4">
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
