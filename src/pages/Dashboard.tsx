
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black/90 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
          <Button 
            variant="outline"
            onClick={() => navigate("/")}
            className="border-primary/20 text-white hover:bg-primary/20"
          >
            Sign Out
          </Button>
        </div>
        <p className="text-gray-300">You have successfully signed in!</p>
      </div>
    </div>
  );
};

export default Dashboard;
