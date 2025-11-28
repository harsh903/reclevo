import {
  Recycle,
  Building2,
  Zap,
  Droplets,
} from "lucide-react";
import Title from "@/components/Title";
import AssetCategoryCard from "@/components/AssetCategoryCard";

const categories = [
  {
    icon: Recycle,
    iconBgColor: "#FEF3C7",
    items: [
      "Composting plants and biogas facilities",
      "Material recovery facilities",
      "Collection vehicles and bins",
      "Bulk waste generator tracking",
    ],
    categoryName: "Solid Waste Management",
    cardColor: "#059000",
  },
  {
    icon: Droplets,
    iconBgColor: "#DBEAFE",
    items: [
      "Sewage treatement plants(STPs)",
      "Effluent treatment plants (ETPs)",
      "Fecal sludge treatment plants",
      "Suction tankers and vehicals",
    ],
    categoryName: "Liquid Waste Management",
    cardColor: "#2563E0",
  },
  {
    icon: Zap,
    iconBgColor: "#FDE68A",
    items: [
      "Planned facilities and equipment",
      "Project tracking and timelines",
      "Budget allocation monitoring",
      
    ],
    categoryName: "Proposed Infrastructure",
    cardColor: "#DC2620",
  },
  {
    icon: Building2,
    iconBgColor: "#E5E7EB",
    items: [
      "Government and private tiolets",
      "Women's facilities(pink Toilets)",
      "Mobile toilet units",
      "Maintenance equipment",
    ],
    categoryName: "Sanitation Facilities",
    cardColor: "gray",
  },
];

const AssetCategorySection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Title
            text1="ASSET CATEGORIES"
            text2="AND ORGANISATIONS"
            description="Explore key infrastructure categories that support sustainable
            development and efficient city operations."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {categories.map((category, index) => (
            <AssetCategoryCard
              key={index}
              icon={category.icon}
              iconBgColor={category.iconBgColor}
              items={category.items}
              categoryName={category.categoryName}
              cardColor={category.cardColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetCategorySection;
