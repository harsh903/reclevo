type TrustIndicatorProp = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function TrustIndicator({ title, description, icon }: TrustIndicatorProp) {
  return (
    <div className="bg-white/30 backdrop-blur-md shadow-lg sticky top-0 z-50 p-3 rounded-3xl">
      {icon}
      <div className="text-xl font-bold text-gray-200">{title}</div>
      <div className="text-sm mt-1 text-gray-200">{description}</div>
    </div>
  );
}
