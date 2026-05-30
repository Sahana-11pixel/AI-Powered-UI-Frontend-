import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2, Cpu, Zap, Coffee, Rocket, Brain, Wand2 } from 'lucide-react';

// ─── Fun loading messages that cycle through ────────────────────────────
const LOADING_STAGES = [
  {
    icon: '📡',
    title: 'Sending request to AI...',
    subtitle: 'Beaming your design to the cloud ☁️',
    emoji: '🛸',
  },
  {
    icon: '🧠',
    title: 'AI is analyzing your design...',
    subtitle: 'Counting every pixel like a boss 🔍',
    emoji: '🤖',
  },
  {
    icon: '🎨',
    title: 'Understanding the layout...',
    subtitle: 'Figuring out where everything goes 🧩',
    emoji: '🖌️',
  },
  {
    icon: '⚡',
    title: 'Generating your code...',
    subtitle: 'Typing faster than any human could! ⌨️',
    emoji: '💻',
  },
  {
    icon: '✨',
    title: 'Almost there...',
    subtitle: 'Adding the finishing touches 🎀',
    emoji: '🎉',
  },
  {
    icon: '🚀',
    title: 'Your code is on the way!',
    subtitle: 'Polishing it up for you... hang tight! 💎',
    emoji: '🏁',
  },
];

// ─── Fun facts / jokes shown at the bottom ─────────────────────────────
const FUN_FACTS = [
  "☕ Fun fact: The first computer bug was an actual moth!",
  "🤓 Did you know? JavaScript was created in just 10 days!",
  "🧙 A good developer is 10x lazier... that's why we automate!",
  "💡 CSS stands for 'Cascading Style Sheets'... not 'Can't Stop Styling'",
  "🎮 The first video game was made in 1958!",
  "🐍 Python was named after Monty Python, not the snake!",
  "🍕 Programmers & pizza — name a more iconic duo 🤝",
  "🌙 Most bugs are born at 3 AM... coincidence? I think not!",
  "🦖 COBOL is still running 95% of ATM transactions!",
  "🎸 The first website is still online: info.cern.ch",
  "🧃 There are ~700 programming languages in the world!",
  "🐛 'It works on my machine' — every dev, ever",
];

// ─── Floating particle component ────────────────────────────────────────
const FloatingParticle = ({ delay, duration, size, left, icon }) => (
  <motion.div
    className="absolute pointer-events-none select-none"
    style={{ left: `${left}%`, bottom: '-20px', fontSize: `${size}px` }}
    initial={{ y: 0, opacity: 0 }}
    animate={{
      y: [-20, -400 - Math.random() * 200],
      opacity: [0, 1, 1, 0],
      x: [0, (Math.random() - 0.5) * 100],
      rotate: [0, Math.random() * 360],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: 'easeOut',
    }}
  >
    {icon}
  </motion.div>
);

// ─── Orbiting dot component ─────────────────────────────────────────────
const OrbitDot = ({ index, total, radius, duration, color }) => {
  const angle = (index / total) * 360;
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 8,
        height: 8,
        background: color,
        boxShadow: `0 0 12px ${color}`,
        top: '50%',
        left: '50%',
      }}
      animate={{
        rotate: [angle, angle + 360],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
      }}
      // orbit offset
      initial={false}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: -radius,
          left: -4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: color,
          boxShadow: `0 0 12px ${color}`,
        }}
      />
    </motion.div>
  );
};

const CodeGeneratingOverlay = ({ isVisible }) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);
  const [progress, setProgress] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const startTimeRef = useRef(Date.now());

  // Cycle through loading stages
  useEffect(() => {
    if (!isVisible) {
      setCurrentStage(0);
      setProgress(0);
      setElapsedSeconds(0);
      startTimeRef.current = Date.now();
      return;
    }
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev < LOADING_STAGES.length - 1) return prev + 1;
        return prev; // stay on last stage
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  // Cycle fun facts
  useEffect(() => {
    if (!isVisible) return;
    setCurrentFact(Math.floor(Math.random() * FUN_FACTS.length));
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % FUN_FACTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  // Animate progress bar (fake but satisfying)
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) return 92 + Math.random() * 2; // hover near 92-94%
        return prev + Math.random() * 3 + 0.5;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [isVisible]);

  // Track elapsed time
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const stage = LOADING_STAGES[currentStage];
  const particleIcons = ['✨', '⭐', '💜', '🔮', '⚡', '🌟', '💫', '🎯', '🧩', '🎨'];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Backdrop blur */}
          <motion.div
            className="absolute inset-0"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              background: 'rgba(0, 0, 0, 0.7)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particleIcons.map((icon, i) => (
              <FloatingParticle
                key={i}
                icon={icon}
                delay={i * 1.2}
                duration={6 + Math.random() * 4}
                size={16 + Math.random() * 14}
                left={5 + Math.random() * 90}
              />
            ))}
          </div>

          {/* Main Card */}
          <motion.div
            className="relative z-10 w-full max-w-lg mx-4"
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          >
            <div
              className="rounded-3xl p-8 border"
              style={{
                background: 'var(--bg-card-solid)',
                borderColor: 'rgba(168, 85, 247, 0.3)',
                boxShadow: '0 0 60px rgba(168, 85, 247, 0.15), 0 0 120px rgba(168, 85, 247, 0.05)',
              }}
            >
              {/* Animated Main Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
                      transform: 'scale(2.5)',
                    }}
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Spinning ring */}
                  <motion.div
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{
                      border: '2px solid transparent',
                      borderTopColor: '#a855f7',
                      borderRightColor: '#7c3aed',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        border: '2px solid transparent',
                        borderBottomColor: '#c084fc',
                        borderLeftColor: '#a855f7',
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <motion.span
                        className="text-4xl select-none"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {stage.icon}
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  {/* Orbiting emoji */}
                  <motion.div
                    className="absolute top-1/2 left-1/2"
                    style={{ marginTop: '-12px', marginLeft: '-12px' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  >
                    <motion.span
                      className="absolute text-xl select-none"
                      style={{ top: '-50px', left: '-4px' }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {stage.emoji}
                    </motion.span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Stage Message */}
              <div className="text-center mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStage}
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2
                      className="text-2xl font-bold mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {stage.title}
                    </h2>
                    <p
                      className="text-base"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {stage.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Bar */}
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>
                    Progress
                  </span>
                  <span className="text-xs font-mono font-medium" style={{ color: '#a855f7' }}>
                    {Math.min(Math.round(progress), 99)}%
                  </span>
                </div>
                <div
                  className="w-full h-2.5 rounded-full overflow-hidden"
                  style={{ background: 'rgba(168, 85, 247, 0.1)' }}
                >
                  <motion.div
                    className="h-full rounded-full relative"
                    style={{
                      background: 'linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)',
                      boxShadow: '0 0 12px rgba(168, 85, 247, 0.5)',
                    }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${Math.min(progress, 99)}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                      }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Step indicators */}
              <div className="flex justify-center gap-2 mb-5">
                {LOADING_STAGES.map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: i === currentStage ? 24 : 8,
                      height: 8,
                      background: i <= currentStage ? '#a855f7' : 'rgba(168, 85, 247, 0.2)',
                      borderRadius: 4,
                    }}
                    animate={{
                      width: i === currentStage ? 24 : 8,
                      background: i <= currentStage ? '#a855f7' : 'rgba(168, 85, 247, 0.2)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>

              {/* Fun Fact */}
              <div
                className="rounded-xl p-4 mb-4"
                style={{
                  background: 'rgba(168, 85, 247, 0.06)',
                  border: '1px solid rgba(168, 85, 247, 0.12)',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentFact}
                    className="text-sm text-center leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {FUN_FACTS[currentFact]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Elapsed Time */}
              <div className="text-center">
                <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
                  ⏱️ {elapsedSeconds}s elapsed
                </span>
              </div>
            </div>

            {/* Decorative corner sparkles */}
            <motion.div
              className="absolute -top-3 -right-3"
              animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
            </motion.div>
            <motion.div
              className="absolute -bottom-3 -left-3"
              animate={{ rotate: [360, 180, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Wand2 className="w-5 h-5 text-purple-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CodeGeneratingOverlay;
