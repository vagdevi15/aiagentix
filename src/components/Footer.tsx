const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src="/lovable-uploads/72d6c899-fd9e-45d2-9e33-6965a49cd638.png"
            alt="Logo"
             className="w-100 h-20"
          />
          <p className="text-gray-400">
            Empowering healthcare and finance with intelligent AI solutions.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: Prodify.ai@gmail.com</li>
            <li>Phone: 955 955 1955 </li>
            <li>Address: 3rd Floor, Swathi Plaza, Shyam Karan Road, Ameerpet, Hyderabad</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-primary">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary">
              Twitter
            </a>
            <a href="https://www.linkedin.com/company/prodify-innovatives/posts/?feedView=all" className="text-gray-400 hover:text-primary">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-primary/20 text-center text-gray-400">
        <p>&copy; 2024 Prodify Innovatives LLP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;