interface MenuBarItemProps {
   items: (number | string)[];
   borderRight?: boolean;
}

function MenuBarItem({ items, borderRight = false }: MenuBarItemProps) {
   const borderClass: string = 'border-r border-gray-400 pr-4';
   return (
      <div
         className={`flex justify-between items-center space-x-4 ${borderRight ? borderClass : ''}`}
      >
         {items.map((item, index) => (
            <span key={index} className="cursor-pointer hover:underline">
               {item}
            </span>
         ))}
      </div>
   );
}

export default MenuBarItem;
