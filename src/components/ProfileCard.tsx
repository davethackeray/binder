import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Skill {
  name: string;
  level: number;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  company: string;
  skills: Skill[];
  image: string;
  bio: string;
}

interface ProfileCardProps {
  profile: Profile;
  className?: string;
  style?: React.CSSProperties;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  className,
  style,
}) => {
  return (
    <Card
      className={cn(
        "w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden",
        className
      )}
      style={style}
    >
      <div className="relative aspect-[3/4]">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <p className="text-lg opacity-90">{profile.title}</p>
          <p className="text-sm opacity-80">{profile.company}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{profile.bio}</p>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {skill.name}
              <span className="bg-primary/10 px-1 rounded text-xs">
                {skill.level}
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};