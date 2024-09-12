import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export const HoverEffect = ({
    items,
    className,
  }: {
    items: {
      title: string;
      description: string;
      link?: string; // Make the link property optional
    }[];
    className?: string;
  }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
        to={item?.link}  // Use 'to' instead of 'href'
        key={item?.link}
          className="relative group   block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-tr from-[#2088ca] to-[#f37023] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle isHovered={hoveredIndex === idx}>
              {item.title}
            </CardTitle>
            <CardDescription isHovered={hoveredIndex === idx}>
              {item.description}
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-transparent border-zinc-600 border relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  isHovered,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: boolean;
}) => {
  return (
    <h4
      className={cn(
        "font-semibold text-[4vw] md:text-[3vw] lg:text-[1.2vw] pb-3 text-center tracking-wide mt-4",
        isHovered ? "text-white" : "text-[#313131]",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
  isHovered,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: boolean;
}) => {
  return (
    <p
      className={cn(
        "w-full text-[3.8vw] md:text-[2vw] text-center lg:text-[0.9vw]",
        isHovered ? "text-white/85" : "text-zinc-700",
        className
      )}
    >
      {children}
    </p>
  );
};
