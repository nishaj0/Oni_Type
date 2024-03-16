import { MdRefresh } from 'react-icons/md';
import { themeColors } from '../utils/theme';

interface TextContainerProps {
   Text: string;
}

function TextContainer({ Text }: TextContainerProps) {
   return (
      <div className="text-2xl flex flex-col justify-center items-center text-left">
         <div>{Text}</div>
         <MdRefresh
            className="mt-12 cursor-pointer"
            style={{ color: themeColors.aura.text.secondary }}
         />
      </div>
   );
}

export default TextContainer;
