interface TextContainerProps {
   textContent: string;
   className?: string;
}

function TextContainer({ textContent, className }: TextContainerProps) {
   return (
      <div
         className={`flex flex-col justify-center items-center text-left ${className}`}
      >
         <div>{textContent}</div>
      </div>
   );
}

export default TextContainer;
