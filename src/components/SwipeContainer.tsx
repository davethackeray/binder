import React, { useState } from "react";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { Profile, ProfileCard } from "./ProfileCard";
import { toast } from "@/hooks/use-toast";
import { X, Heart } from "lucide-react";

const SWIPE_THRESHOLD = 100;

interface SwipeContainerProps {
  profiles: Profile[];
  onSwipe: (profileId: string, direction: "left" | "right") => void;
}

export const SwipeContainer: React.FC<SwipeContainerProps> = ({
  profiles,
  onSwipe,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const handleDragEnd = async (
    _: any,
    info: PanInfo,
    profileId: string
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(offset) > SWIPE_THRESHOLD || Math.abs(velocity) > 500) {
      const direction = offset > 0 ? "right" : "left";
      await controls.start({
        x: direction === "right" ? 1000 : -1000,
        opacity: 0,
        transition: { duration: 0.2 },
      });
      onSwipe(profileId, direction);
      
      if (direction === "right") {
        toast({
          title: "It's a match! 🎉",
          description: "You've matched with " + profiles[currentIndex].name,
        });
      }

      setCurrentIndex((prev) => prev + 1);
      controls.set({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: 0, opacity: 1 });
    }
  };

  if (currentIndex >= profiles.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] text-center p-8">
        <h2 className="text-2xl font-bold mb-4">No more profiles!</h2>
        <p className="text-gray-600">Check back later for more matches.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px]">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => handleDragEnd(e, info, profiles[currentIndex].id)}
        animate={controls}
        className="absolute w-full cursor-grab active:cursor-grabbing"
      >
        <div className="relative">
          <ProfileCard profile={profiles[currentIndex]} />
          <div className="absolute bottom-[calc(100%-3rem)] left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
            <button
              onClick={() => handleDragEnd(null, { offset: { x: -101 }, velocity: { x: 0 } } as PanInfo, profiles[currentIndex].id)}
              className="p-4 bg-destructive rounded-full text-white shadow-lg hover:bg-destructive/90 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleDragEnd(null, { offset: { x: 101 }, velocity: { x: 0 } } as PanInfo, profiles[currentIndex].id)}
              className="p-4 bg-success rounded-full text-white shadow-lg hover:bg-success/90 transition-colors"
            >
              <Heart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};