import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 w-11/12 lg:grid-cols-3 lg:gap-4 lg:px-12">
        <Link href="/people">
          <div className="border hover:border-dark hover:bg-gray-100 dark:hover:border-white dark:hover:bg-gray-900 transition-all border-gray-800 py-2 flex flex-col items-center justify-center">
            <Image src="/image-1.png" alt="personas" width={200} height={200} />
            <h2 className="text-2xl text-center">Personas</h2>
          </div>
        </Link>
        <Link href="/planets">
          <div className="border hover:border-dark hover:bg-gray-100 dark:hover:border-white dark:hover:bg-gray-900 transition-all border-gray-800 py-2 flex flex-col items-center justify-center">
            <Image src="/image-1.png" alt="planetas" width={200} height={200} />
            <h2 className="text-2xl text-center">Planetas</h2>
          </div>
        </Link>
        <Link href="/vehicles">
          <div className="border hover:border-dark hover:bg-gray-100 dark:hover:border-white dark:hover:bg-gray-900 transition-all border-gray-800 py-2 flex flex-col items-center justify-center">
            <Image src="/image-1.png" alt="Naves" width={200} height={200} />
            <h2 className="text-2xl text-center">Naves</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
