const Index = () => {
  return (
    <main className="min-h-screen relative">
      {/* Initial white background */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Animated color background that gets "sprayed" */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] opacity-90 animate-color-spray"></div>
      
      {/* Mario-like character */}
      <div className="absolute w-16 h-16 bg-[#1A1F2C] animate-run-spray z-50">
        {/* Character body */}
        <div className="absolute inset-0 rounded-full bg-[#9b87f5]"></div>
        {/* Spray effect */}
        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
          <div className="w-12 h-8 animate-spray">
            <div className="w-2 h-2 bg-[#8B5CF6] rounded-full absolute"></div>
            <div className="w-2 h-2 bg-[#D946EF] rounded-full absolute top-2"></div>
            <div className="w-2 h-2 bg-[#9b87f5] rounded-full absolute top-4"></div>
          </div>
        </div>
      </div>

      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;