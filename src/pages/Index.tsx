import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkflowSection from "@/components/WorkflowSection";
import AgentSection from "@/components/AgentSection";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

const healthcareAgents = [
  {
    name: "Physician Assistant Agent",
    description: "AI-powered medical assistance and diagnosis support.",
    agent_image_path: "/Physician Assistant.png",
  },
  {
    name: "Clinical Pharmacist Agent",
    description: "Medication management and drug interaction analysis.",
    demo_video_path:"public/demo_video_path.gif",
    agent_image_path: "/Clinical Pharmacist.png",
    demo_audio_path: "public/demo_audio_path.mp3"
  },
  {
    name: "Patient Experience Agent",
    description: "Enhancing patient satisfaction and care quality.",
    agent_image_path: "public/Patient Experience Agent.png",
  },
  {
    name: "Radiology Agent",
    description: "Advanced medical imaging analysis and reporting.",
    agent_image_path: "public/Radiology Agent.png",
  },
  {
    name: "Pathology Agent",
    description: "Tissue sample analysis and pathology reporting.",
    agent_image_path: "public/Pathology Agent.png",
  },
  {
    name: "Appointment Booking Agent",
    description: "Smart scheduling and appointment management.",
    agent_image_path: "public/Patient Appointment booking Agent.png",
  },
  {
    name: "Shift Scheduling Agent",
    description: "Efficient staff scheduling and management.",
    agent_image_path: "public/Shift Scheduling Agent.png",
  },
  {
    name: "Claims Adjudication Agent",
    description: "Automated claims processing and verification.",
    agent_image_path: "public/Claims Adjudication Agent.png",
  },
];

const financeAgents = [
  // {
  //   name: "Claim Adjudication Agent",
  //   description: "Automated insurance claim processing and verification.",
  // },
  // {
  //   name: "Appointment Booking Agent",
  //   description: "Smart scheduling and appointment management.",
  // },
  {
    name: "Financing Agent",
    description: "Financial planning and loan processing assistance.",
    agent_image_path: "public/Claims Adjudication Agent.png",
  },
  {
    name: "Risk Assessment Agent",
    description: "Comprehensive risk analysis and management.",
    agent_image_path: "public/Risk Assessment Agent.png",
  },
  {
    name: "Investment Agent",
    description: "Investment strategy and portfolio management.",
    agent_image_path: "public/Investment Agent.png",
  },
  {
    name: "Compliance Agent",
    description: "Regulatory compliance monitoring and reporting.",
    agent_image_path: "public/Claims Adjudication Agent.png",
  },
  {
    name: "Fraud Detection Agent",
    description: "Advanced fraud prevention and detection.",
    agent_image_path: "public/Fraud Detection Agent.png",
  },
  {
    name: "Market Analysis Agent",
    description: "Real-time market analysis and trend prediction.",
    agent_image_path: "public/Market Analysis Agent.png",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WorkflowSection />
      <div className="h-[500px] bg-black/50 backdrop-blur-sm" id="workflow-video">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh", backgroundColor: "black" }}>
      <div style={{ width: "80%", height: "auto",  borderRadius: "16px", padding: "16px", textAlign: "center" }}>
        <img
          src="OrchestrAI (4).gif"
          alt="OrchestrAI Animation"
          style={{ maxWidth: "100%", borderRadius: "16px" }}
        />
      </div>
    </div>
      </div>
      <AgentSection
        id="healthcare"
        title="Prodify <span class='text-primary'>Care AI Suite</span>"
        description="AI Agents workforce, revolutionizing patient care and healthcare Operations with specialized AI agents tailored for healthcare."
        agents={healthcareAgents}
      />
      <AgentSection
        id="finance"
        title="Prodify <span class='text-primary'>Financial AI Suite</span>"
        description="Empowering financial services with precision-driven AI automation Agents."
        agents={financeAgents}
        isReversed
      />
      <DemoForm />
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-4 bg-primary/80 hover:bg-primary text-white rounded-full shadow-lg transition-all duration-300"
      >
        ↑
      </button>
    </div>
  );
};

export default Index;