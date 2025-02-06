import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Users, Eye } from "lucide-react";

const VisitorCounter = () => {
  const [totalVisits, setTotalVisits] = useState("000000");
  const [uniqueVisits, setUniqueVisits] = useState("000000");
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    // Simulate fetching visitor counts
    const fetchCounts = async () => {
      setIsRolling(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Example counts - in a real app these would come from your backend
      setTotalVisits("000127");
      setUniqueVisits("000089");
      
      setTimeout(() => setIsRolling(false), 2000);
    };

    fetchCounts();
    console.log("Visitor counter mounted");
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center mt-8 animate-fade-up">
      <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
        <div className="flex items-center gap-2 text-white mb-2">
          <Eye className="w-4 h-4" />
          <span className="text-sm">Total Visits</span>
        </div>
        <div className={`font-mono text-2xl font-bold text-white ${isRolling ? 'animate-[pulse_0.5s_ease-in-out_infinite]' : ''}`}>
          {totalVisits.split('').map((digit, idx) => (
            <span
              key={idx}
              className="inline-block w-6 text-center"
              style={{
                animation: isRolling ? `spin${idx} 1s ease-in-out` : 'none',
              }}
            >
              {digit}
            </span>
          ))}
        </div>
      </Card>

      <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
        <div className="flex items-center gap-2 text-white mb-2">
          <Users className="w-4 h-4" />
          <span className="text-sm">Unique Visits</span>
        </div>
        <div className={`font-mono text-2xl font-bold text-white ${isRolling ? 'animate-[pulse_0.5s_ease-in-out_infinite]' : ''}`}>
          {uniqueVisits.split('').map((digit, idx) => (
            <span
              key={idx}
              className="inline-block w-6 text-center"
              style={{
                animation: isRolling ? `spin${idx} 1s ease-in-out` : 'none',
              }}
            >
              {digit}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default VisitorCounter;