interface ThemeColorBallProps {
   backgroundColor: string;
   className?: string;
}

function ThemeColorBall({ backgroundColor, className }: ThemeColorBallProps) {
   return (
      <span
         className={`w-4 h-4 rounded-full ${className}`}
         style={{
            backgroundColor,
         }}
      />
   );
}

export default ThemeColorBall;
