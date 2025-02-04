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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.otp) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter the OTP.",
      });
      return;
    }

    if (formData.otp === generatedOTP) {
      toast({
        title: "Success",
        description: "Sign in successful!",
      });
      onClose();
      navigate("/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid OTP. Please try again.",
      });
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
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-black/50 border-primary/20 text-white"
            required
          />
          <div className="flex gap-2">
            <Input
              type="tel"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="bg-black/50 border-primary/20 text-white"
              required
            />
            <Button
              type="button"
              onClick={handleSendOTP}
              className="bg-primary hover:bg-primary/80"
              disabled={showOTP}
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
            />
          )}
          <Button type="submit" className="w-full bg-primary hover:bg-primary/80">
            {showOTP ? "Verify & Sign In" : "Sign In"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInForm;