import { Variants, Transition } from "framer-motion";

// Advanced Animation Variants
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

export const cardHover: Variants = {
  initial: {
    scale: 1,
    rotateY: 0,
    z: 0,
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    z: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.98,
    rotateY: 0,
    z: 0,
  },
};

export const slideUpFadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const magneticHover: Variants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 0,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

export const glow: Variants = {
  initial: {
    filter: "drop-shadow(0 0 0px rgba(250, 204, 21, 0))",
  },
  animate: {
    filter: [
      "drop-shadow(0 0 5px rgba(250, 204, 21, 0.5))",
      "drop-shadow(0 0 20px rgba(250, 204, 21, 0.8))",
      "drop-shadow(0 0 5px rgba(250, 204, 21, 0.5))",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const floatingAnimation: Variants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const typewriterVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

// Custom Transitions
export const smoothSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const bouncySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 15,
};

export const gentleEase: Transition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
};

// Advanced Effects
export const parallaxVariants = (speed: number = 1): Variants => ({
  initial: { y: 0 },
  animate: { y: -50 * speed },
});

export const morphingIcon: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export const pulseGlow: Variants = {
  initial: {
    boxShadow: "0 0 0 0 rgba(250, 204, 21, 0.4)",
  },
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(250, 204, 21, 0.4)",
      "0 0 0 20px rgba(250, 204, 21, 0)",
      "0 0 0 0 rgba(250, 204, 21, 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

// Museum-style exhibition animations
export const exhibitReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const spotlightEffect: Variants = {
  initial: {
    background:
      "radial-gradient(circle at 50% 50%, rgba(250,204,21,0.1) 0%, transparent 50%)",
  },
  hover: {
    background:
      "radial-gradient(circle at 50% 50%, rgba(250,204,21,0.3) 0%, transparent 70%)",
    transition: {
      duration: 0.3,
    },
  },
};

// Interactive hover effects
export const hoverScale = (scale: number = 1.05): Variants => ({
  initial: { scale: 1 },
  hover: {
    scale,
    transition: smoothSpring,
  },
  tap: {
    scale: scale * 0.95,
  },
});

export const hoverGlow = (color: string = "250, 204, 21"): Variants => ({
  initial: {
    boxShadow: `0 0 0 rgba(${color}, 0)`,
  },
  hover: {
    boxShadow: `0 10px 25px rgba(${color}, 0.3)`,
    transition: {
      duration: 0.3,
    },
  },
});

// Loading animations
export const shimmer: Variants = {
  initial: {
    backgroundPosition: "-200% 0",
  },
  animate: {
    backgroundPosition: "200% 0",
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const breathe: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Text animations
export const fadeInUp = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

export const staggeredFadeIn = (stagger: number = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
    },
  },
});

// Complex animations for historical timeline
export const historicalMoment: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotateY: 90,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.1,
    rotateY: 5,
    z: 100,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};
