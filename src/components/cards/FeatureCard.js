import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export const FeatureCard = ({
  title,
  description,
  icon,
  className,
  iconClass,
}) => {
  return (
    <div
      className={cn(
        "flex flex-row items-start gap-4 p-6 rounded-lg",
        className
      )}
    >
      {/* Icon container */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-950 flex-shrink-0">
        <Icon
          icon={icon}
          className={cn("w-6 h-6 text-primary-500", iconClass)}
        />
      </div>

      {/* Text content */}
      <div>
        <h6 className="text-md text-title font-title font-medium">{title}</h6>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  );
};
