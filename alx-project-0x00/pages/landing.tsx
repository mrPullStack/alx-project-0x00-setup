import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      <div className="flex gap-4 flex-wrap mt-6">
  <Button title="Small Round" size="small" shape="rounded-full" />
  <Button title="Medium Rounded" size="medium" shape="rounded-md" />
  <Button title="Large Sharp" size="large" shape="rounded-sm" />
  <Button title="Large Full" size="large" shape="rounded-full" />
</div>


      {/* Render Card Component multiple times */}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
