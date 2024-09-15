import { useRef } from "react";


export default function ProcessFlowChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
  //   setIsDragging(true);
  //   const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
  //   const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
  //   setDragStart({
  //     x: clientX - position.x,
  //     y: clientY - position.y,
  //   });
  // };

  // const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
  //   if (!isDragging) return;
  //   const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
  //   const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
  //   const newX = clientX - dragStart.x;
  //   const newY = clientY - dragStart.y;

  //   setPosition({ x: newX, y: newY });
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  return (
    <div className="py-[2rem] w-full">
      <h1 className="text-[8vw]  lg:text-[4vw] text-left lg:text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800  leading-none hero">
        Process Flow Chart
      </h1>
      <p className="my-10 text-[3.5vw] lg:text-[1.2vw] text-zinc-700 w-full lg:w-8/12 mx-auto text-left lg:text-center">
        Explore the detailed steps and stages of our operations, illustrating
        how we ensure efficient and effective workflows from start to finish.
      </p>
      <div
        className="w-full p-5 mt-5 lg:mt-10  flex justify-center items-start relative group overflow-hidden rounded-lg"
        ref={containerRef}
        // onMouseMove={handleMouseMove}
        // onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseUp}
        // onTouchMove={handleMouseMove}
        // onTouchEnd={handleMouseUp}
      >
        {/* <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-0 pointer-events-none duration-300 opacity-[0.8] backdrop-blur-sm z-10"></div>
        <span className="font-semibold absolute top-3 left-3 flex justify-start gap-1 items-center text-sm  z-20 hero text-secondary-500">
          Drag{" "}
          <Icon
            icon="ant-design:drag-outlined"
            className="text-zinc-700 mt-[1.5px]"
          />
        </span> */}
        <div
          ref={imageRef}
          // style={{
          //   cursor: isDragging ? "grabbing" : "grab",
          //   transform: `translate(${position.x}px, ${position.y}px)`,
          // }}
          // onMouseDown={handleMouseDown}
          // onTouchStart={handleMouseDown}
          className="w-[100vw] md:w-[90vw] lg:w-[60vw] select-none"
        >
          <img
            src="/public/chart/process-flow-chart.png"
            className="mx-auto w-full h-auto object-contain pointer-events-none user-select-none"
            alt="Process Chart"
          />
        </div>
      </div>
    </div>
  );
}
