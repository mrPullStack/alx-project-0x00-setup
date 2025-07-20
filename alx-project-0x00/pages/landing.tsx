import React from "react";
import Card from "@/components/Card"; // ✅ Make sure this path is correct

const Landing: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      {/* Render Card Component multiple times */}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
