
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const SignInForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
  });
  const [showOTP, setShowOTP] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = () => {
    if (!formData.name || !formData.email || !formData.mobile) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields before requesting OTP.",
      });
      return;
    }

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);
    
    toast({
      title: "OTP Sent",
      description: `Your OTP is: ${otp}`, // In a real app, this would be sent to the user's mobile
    });
    setShowOTP(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!formData.otp) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter the OTP.",
      });
      setIsLoading(false);
      return;
    }

    if (formData.otp === generatedOTP) {
      toast({
        title: "Success",
        description: "Sign in successful! Redirecting to dashboard...",
      });
      
      // Small delay to show the success message
      setTimeout(() => {
        onClose();
        navigate("/dashboard");
      }, 1000);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid OTP. Please try again.",
      });
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/90 border border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Sign In</DialogTitle>
          <DialogDescription className="text-gray-400">
            Enter your details to sign in to your account
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-black/50 border-primary/20 text-white"
            required
            disabled={isLoading}
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-black/50 border-primary/20 text-white"
            required
            disabled={isLoading}
          />
          <div className="flex gap-2">
            <Input
              type="tel"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="bg-black/50 border-primary/20 text-white"
              required
              disabled={isLoading}
            />
            <Button
              type="button"
              onClick={handleSendOTP}
              className="bg-primary hover:bg-primary/80"
              disabled={showOTP || isLoading}
            >
              Send OTP
            </Button>
          </div>
          {showOTP && (
            <Input
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
              className="bg-black/50 border-primary/20 text-white"
              required
              disabled={isLoading}
            />
          )}
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/80"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : (showOTP ? "Verify & Sign In" : "Sign In")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInForm;
