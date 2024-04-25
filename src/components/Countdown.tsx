import { themeColors } from '../utils/theme';

interface CountdownProps {
   timeLeft: number;
}

const style = {
   color: themeColors.aura.text.secondary,
};

function Countdown({ timeLeft }: CountdownProps) {
   let timeLeftString: string = `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;
   return (
      <h2 className="mb-2 font text-xl" style={style}>
         {timeLeftString}
      </h2>
   );
}

export default Countdown;
