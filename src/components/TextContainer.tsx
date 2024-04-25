interface TextContainerProps {
   Text: string;
}

function TextContainer({ Text }: TextContainerProps) {
   return (
      <div className="text-2xl flex flex-col justify-center items-center text-left">
         <div>{Text}</div>
      </div>
   );
}

export default TextContainer;
