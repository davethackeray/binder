import React from "react";
import { SwipeContainer } from "@/components/SwipeContainer";
import type { Profile } from "@/components/ProfileCard";

const SAMPLE_PROFILES: Profile[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Full-stack developer with 5+ years of experience in React and Node.js. Passionate about building scalable applications and mentoring junior developers.",
    skills: [
      { name: "React", level: 9 },
      { name: "Node.js", level: 8 },
      { name: "TypeScript", level: 9 },
      { name: "AWS", level: 7 },
    ],
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Product Manager",
    company: "Future Solutions Ltd.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Product leader with a background in UX design. Experienced in agile methodologies and cross-functional team leadership.",
    skills: [
      { name: "Product Strategy", level: 9 },
      { name: "Agile", level: 8 },
      { name: "UX Design", level: 7 },
      { name: "Data Analysis", level: 8 },
    ],
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    title: "DevOps Engineer",
    company: "Cloud Systems Corp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "DevOps specialist focused on automating deployment pipelines and implementing robust monitoring solutions.",
    skills: [
      { name: "Kubernetes", level: 9 },
      { name: "Docker", level: 9 },
      { name: "CI/CD", level: 8 },
      { name: "Python", level: 7 },
    ],
  },
];

const Index = () => {
  const handleSwipe = (profileId: string, direction: "left" | "right") => {
    console.log(`Swiped ${direction} on profile ${profileId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-8 px-4">
      <div className="max-w-md mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Binder</h1>
        <p className="text-gray-600">Find your perfect match in tech</p>
      </div>
      <SwipeContainer profiles={SAMPLE_PROFILES} onSwipe={handleSwipe} />
    </div>
  );
};

export default Index;