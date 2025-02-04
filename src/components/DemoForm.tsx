import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const DemoForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted",
      description: "We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div id="demo-form" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-heading text-center">Book a Demo</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-black/50 border-primary/20 text-white"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-black/50 border-primary/20 text-white"
            />
          </div>
          <div>
            <Input
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-black/50 border-primary/20 text-white"
            />
          </div>
          <div>
            <Textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-black/50 border-primary/20 text-white"
            />
          </div>
          <Button type="submit" className="w-full bg-[#a63777] text-black hover:bg-[#a63777]/80">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DemoForm;