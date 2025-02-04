import { Button } from "@/components/ui/button";

const Hero = () => {
  const features = [
    {
      title: "Precision Agents",
      description: "Task-specific AI agents delivering unmatched efficiency and value.",
    },
    {
      title: "UnityCore AI",
      description: "Unlock the power of teamwork with AI agents working seamlessly together.",
    },
    {
      title: "OrchestrAI Platform",
      description: "Orchestrating Intelligent Agents, Delivering Limitless Possibilities.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center  pt-20">
      <div className="max-w-4xl mb-12">
        <h1 className="text-5xl md:text-6xl font-bold  mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a63777] animate-gradient">
          Purpose-built AI agents, driven by an innovative Agentic AI framework.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Revolutionizing your business with unmatched precision and efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            // className="p-6 bg-black/30 backdrop-blur-sm border border-[#a63777]/20 rounded-lg hover:border-[#a63777]/50 transition-all duration-300 animate-float"
            // style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <Button
        className="bg-[#a63777] hover:bg-[#a63777]/80 text-white px-8 py-6 text-lg"
        onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
      >
        Book a Demo
      </Button>
    </div>
  );
};

export default Hero;