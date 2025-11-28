
interface CategoryCardProps {
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
  items: string[];
  categoryName: string;
  cardColor: string;
}

const AssetCategoryCard = ({
  icon: Icon,
  iconBgColor,
  items,
  categoryName,
  cardColor,
}:CategoryCardProps) => {
  return (
    <div className="relative w-80 h-100 bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out m-4 outline-2">
      {/* Icon Section */}
      <div className="flex justify-center pt-8 pb-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center shadow-md ring-4 ring-offset-2"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon className="w-10 h-10 text-green-700 transition-transform duration-300 group-hover:rotate-12" />
        </div>
      </div>

      {/* Items List */}
      <div className="px-8 pb-20">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex text-sm sm:text-md items-start group hover:text-emerald-600 transition-colors duration-200"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
              <span className="text-gray-700 font-medium leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Category Name Banner */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center shadow-inner"
        style={{ backgroundColor: cardColor }}
      >
        <h3 className="text-white font-extrabold text-lg text-center px-4 tracking-wide">
          {categoryName}
        </h3>
      </div>
    </div>
  );
};

export default AssetCategoryCard;
