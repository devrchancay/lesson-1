import { useMemo } from "react";

interface ItemProps {
  name: string;
  created: string;
}

const Item: React.FC<ItemProps> = ({ name = "", created }) => {
  const initials = useMemo(() => {
    const [first, last] = name?.split(" ");

    if (!last) {
      return `${first[0]}`;
    }

    return `${first[0]}${last?.[0]}`;
  }, [name]);

  const date = useMemo(() => {
    return new Date(created).toLocaleDateString();
  }, [created]);

  return (
    <div className="">
      <div className="flex items-center justify-center h-40 bg-gray-300 rounded dark:bg-gray-700">
        <h2 className="text-5xl">{initials}</h2>
      </div>
      <div className="py-2 flex flex-col justify-start w-full">
        <h3 className="text-lg">{name}</h3>
        <h4 className="text-sm text-gray-900 dark:text-gray-50">{date}</h4>
      </div>
    </div>
  );
};

export default Item;
