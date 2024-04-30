import  themes  from '../style/themes';

interface CountdownProps {
   timeLeft: number;
   className?: string;
}

const style = {
   color: themes.aura.text.secondary,
};

function Countdown({ timeLeft, className }: CountdownProps) {
   let timeLeftString: string = `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;
   return (
      <h2 className={className} style={style}>
         {timeLeftString}
      </h2>
   );
}

export default Countdown;
