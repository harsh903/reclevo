type FeatureListItem = {
  feature: string;
  isHighlighted:boolean
};

const FeatureListItem = ({
  feature,
  isHighlighted = false,
}: FeatureListItem) => {
  return (
    <div
      className={`backdrop-blur-sm text-black rounded-lg p-3 flex items-center border-b-4 border-b-blue-500 
      ${
        isHighlighted ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-200"
      }`}
    >
      <div className="w-3 h-3 bg-teal-600 rounded-full mr-3"></div>
      <span>{feature}</span>
    </div>
  );
};

export default FeatureListItem;
