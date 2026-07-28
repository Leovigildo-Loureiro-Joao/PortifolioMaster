// components/UI/ProfessionalAvatar.tsx
import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

interface ProfessionalAvatarProps {
  name: string;
  role?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showInitials?: boolean;
  className?: string;
}

export const ProfessionalAvatar = ({
  name,
  role,
  size = "lg",
  showInitials = true,
  className = "",
}: ProfessionalAvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "w-16 h-16 text-lg",
    lg: "w-24 h-24 text-2xl",
    xl: "w-32 h-32 text-3xl",
  };

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar container */}
      <div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-primary to-secondry flex items-center justify-center shadow-lg border-4 border-white/50`}
      >
        {showInitials ? (
          <span className="font-bold text-white">{initials}</span>
        ) : (
          <FiUser className="w-1/2 h-1/2 text-white" />
        )}
      </div>

      {/* Status indicator */}
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>

      {/* Role badge (optional) */}
      {role && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs font-medium bg-white px-2 py-1 rounded-full shadow-md text-gray-700">
            {role}
          </span>
        </div>
      )}
    </motion.div>
  );
};

// Placeholder image component for when photo is not available
export const ProfilePlaceholder = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondry/20 to-primary/20 border-2 border-dashed border-primary/30 ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <FiUser className="w-16 h-16 text-primary/50" />
        <span className="text-sm text-primary/70 font-medium">
          Adicionar fotografia
        </span>
        <span className="text-xs text-gray-500">
          Recomendado: 400x400px
        </span>
      </div>
    </div>
  );
};
