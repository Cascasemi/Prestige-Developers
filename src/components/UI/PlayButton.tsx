import React from 'react';
import { FaPlay } from 'react-icons/fa';

interface PlayButtonProps {
  small?: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = ({ small = false }) => {
  const size = small ? "w-10 h-10" : "w-16 h-16";
  
  return (
    <button className={`${size} rounded-full bg-konta-orange text-white flex items-center justify-center animate-pulse`}>
      <FaPlay className={small ? "text-sm" : "text-xl"} />
    </button>
  );
};

export default PlayButton;