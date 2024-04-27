import IconButton from './IconButton';

interface SocialMediasProps {
   className?: string;
}

function SocialMedias({ className }: SocialMediasProps) {
   return (
      <div
         className={`flex justify-center items-center space-x-4 ${className}`}
      >
         <IconButton
            iconName="Github"
            link="https://github.com/nishaj0/Oni_Type"
            target="_blank"
         />
         <IconButton
            iconName="Discord"
            link="https://github.com/nishaj0/Oni_Type"
            target="_blank"
         />
         <IconButton
            iconName="X"
            link="https://github.com/nishaj0/Oni_Type"
            target="_blank"
         />
      </div>
   );
}

export default SocialMedias;
