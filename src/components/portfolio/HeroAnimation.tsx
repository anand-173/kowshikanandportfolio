import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const HeroAnimation = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse values
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Transform raw mouse position to rotation and movement
  const rotateX = useTransform(smoothY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothX, [-1, 1], [-15, 15]);
  
  const moveX1 = useTransform(smoothX, [-1, 1], [-30, 30]);
  const moveY1 = useTransform(smoothY, [-1, 1], [-30, 30]);
  
  const moveX2 = useTransform(smoothX, [-1, 1], [40, -40]);
  const moveY2 = useTransform(smoothY, [-1, 1], [40, -40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1 based on screen size
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute right-0 lg:right-20 xl:right-40 top-1/2 -translate-y-1/2 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] hidden md:block pointer-events-none z-0" style={{ perspective: "1000px" }}>
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        {/* Main Obsidian Core */}
        <motion.div
          style={{ x: moveX1, y: moveY1 }}
          className="absolute inset-10 lg:inset-20 bg-surface border border-primary/30 rounded-3xl shadow-[0_0_60px_hsl(var(--primary)/0.15)] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle inner grid for texture */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Inner floating emblem */}
          <div className="w-32 h-32 border border-primary/20 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 border border-primary/40 rounded-full animate-[spin_10s_linear_infinite]" />
          </div>
        </motion.div>

        {/* Orbiting Shard 1 */}
        <motion.div
          style={{ x: moveX2, y: moveY2, z: 50 }}
          className="absolute top-10 right-0 lg:right-10 w-32 h-40 bg-surface/80 backdrop-blur-md border border-primary/40 rounded-2xl shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
        />

        {/* Orbiting Shard 2 */}
        <motion.div
          style={{ x: moveX1, y: moveY2, z: 80 }}
          className="absolute bottom-20 left-0 lg:left-10 w-40 h-24 bg-surface/90 border border-primary/30 rounded-2xl shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
        />

        {/* Ambient Glow */}
        <motion.div
          style={{ x: moveX2, y: moveY1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"
        />
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
