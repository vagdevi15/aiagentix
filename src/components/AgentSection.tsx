import AgentCard from "./AgentCard";

interface AgentSectionProps {
  title: string;
  description: string;
  agents: Array<{ name: string; description: string; demo_video_path?: string; agent_image_path?: string; audio_path?: string; }>;
  isReversed?: boolean;
  id?: string;
 
}

const AgentSection = ({ title, description, agents, isReversed = false, id }: AgentSectionProps) => {
  console.log("agents: ",agents)
  console.log("agents[1]: ",agents[1])
  console.log("agents[1].imagePath: ",agents[1]['demo_video_path'],agents[1]['audio_path'])
  return (
    <div className="py-20 px-5" id={id}>
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        <div className={`text-left ${isReversed ? 'md:order-2' : ''}`}>
          <h2 className="section-heading" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="section-subheading">{description}</p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 ${isReversed ? 'md:order-1' : ''}`}>
          {agents.map((agent, index) => (
            <AgentCard
              // key={agent.name}
              name={agent.name}
              description={agent.description}
              demo_video_path={agent.demo_video_path}
              agent_image_path={agent.agent_image_path}
              audio_path={agent.audio_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentSection;