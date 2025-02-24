import * as React from 'react'

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, className }) => {
  return (
    <button className={`rounded-full bg-gray-200 hover:opacity-70 ${className}`} onClick={onClick}>
      { icon }
    </button>
  )
}

export default IconButton