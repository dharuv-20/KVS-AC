import { Variants, Transition, Easing } from 'framer-motion';

// Standard precision transition curves
export const cubicEase: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
export const snappyEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const smoothTransition: Transition = {
  duration: 0.55,
  ease: cubicEase,
};

export const snappyTransition: Transition = {
  duration: 0.35,
  ease: snappyEase,
};

// Fade In Up with configurable delay and offset
export const fadeInUp = (delay: number = 0, distance: number = 24): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: cubicEase,
    },
  },
});

// Staggered Container for grids and cards
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0.05
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Image Scale-In Reveal
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: cubicEase,
    },
  },
};

// Card Lift on Hover (Desktop only)
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
  hover: {
    y: -5,
    boxShadow: '0 20px 25px -5px rgba(16, 29, 50, 0.12), 0 8px 10px -6px rgba(16, 29, 50, 0.08)',
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
};

// Subtle Airflow Floating motion for background elements
export const airflowFloat: Variants = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, 8, -6, 0],
    y: [0, -8, 6, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  },
};

// Accordion Expand/Collapse
export const accordionContent: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] as const },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] as const },
      opacity: { duration: 0.3, delay: 0.05 },
    },
  },
};

// Mobile Drawer Slide & Fade
export const mobileDrawerVariants: Variants = {
  closed: {
    opacity: 0,
    y: -16,
    scale: 0.98,
    transition: { duration: 0.2, ease: 'easeIn' as const },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: snappyEase },
  },
};
