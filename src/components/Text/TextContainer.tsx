interface TextContainerProps {
   textContent: string;
   className?: string;
}

function TextContainer({ textContent, className }: TextContainerProps) {
   let strArray: string[] = [];
   if (textContent) {
      strArray = textContent.split(' ');
   }
   return (
      <div
         className={`flex flex-col justify-center items-center text-left text-2xl ${className}`}
      >
         <p>
            {strArray.map((str, index) => (
               <>
                  <span key={str + Math.random()}>{str}</span>
                  {index !== strArray.length - 1 && <span> </span>}
               </>
            ))}
         </p>
      </div>
   );
}

export default TextContainer;
