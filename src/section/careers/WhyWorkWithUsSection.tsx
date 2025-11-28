import { ptSerif } from "@/utils/Fonts";
const WhyWorkWithUsSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 ">
      <h2
        className={`text-4xl md:text-6xl font-bold text-center mb-4 !text-[#3a5a44] ${ptSerif.className}`}
      >
        Why Work With Us
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-[#393e2f] p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2 !text-white">
            Innovative Projects
          </h3>
          <p className="!text-[#a6b385]">
            Work on cutting-edge solutions to solve real-world waste management
            problems.
          </p>
        </div>
        <div className="bg-[#393e2f] p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2 !text-white">
            Growth Opportunities
          </h3>
          <p className="!text-[#a6b385]">
            Learn, grow, and thrive in a supportive and challenging environment.
          </p>
        </div>
        <div className="bg-[#393e2f] p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2 !text-white">
            Inclusive Culture
          </h3>
          <p className="!text-[#a6b385]">
            Join a diverse team where every voice matters and collaboration
            thrives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
