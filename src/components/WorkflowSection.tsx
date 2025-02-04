import { ArrowRight } from "lucide-react";

const WorkflowSection = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="section-heading">When agents work together, you get a better result.</h2>
        <p className="section-subheading">
          Agentic AI breaks queries into tasks, routes each one to the right agent, then consolidates
          a response, you get detailed, trustworthy answers fast.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <div className="agent-card text-center animate-float">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">📥</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Input</h3>
            <p className="text-gray-400">Query Processing</p>
          </div> */}

          <div className="relative">
            {/* <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-full">
              <ArrowRight className="w-8 h-8 text-primary mx-auto animate-pulse" />
            </div> */}
            {/* <div className="agent-card text-center animate-float" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Processing</h3>
              <p className="text-gray-400">AI Agents</p>
            </div> */}
          </div>

          {/* <div className="agent-card text-center animate-float" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">📤</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Output</h3>
            <p className="text-gray-400">Consolidated Response</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;