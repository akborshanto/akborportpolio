import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
}

export default function GradientText({ text, className = '' }: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.span>
  );
}