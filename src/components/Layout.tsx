import { Inter } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <nav className="flex justify-center py-4 bg-gray-300 dark:bg-gray-700">
        <ul className="flex text-white space-x-6">
          <li>
            <Link href="/people">Personas</Link>
          </li>
          <li>
            <Link href="/planets">Planetas</Link>
          </li>
          <li>
            <Link href="/vehicules">Naves</Link>
          </li>
        </ul>
      </nav>
      <main className={`min-h-screen ${inter.className}`}>{children}</main>
    </div>
  );
};

export default Layout;
