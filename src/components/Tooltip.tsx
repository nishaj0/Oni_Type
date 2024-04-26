import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

type ReactTooltipProps = React.ComponentProps<typeof ReactTooltip>;

interface TooltipProps extends ReactTooltipProps {
   id: string;
   content: string;
   children: React.ReactElement;
}

function Tooltip({ id, content, children, ...rest }: TooltipProps) {
   // ? check if children is a React fragment
   if (React.isValidElement(children) && children.type === React.Fragment) {
      throw new Error('Children cannot be a React fragment');
   }

   // ? add id to the child element
   const childWithId = React.cloneElement(children, { id });

   // ? select the anchor element by id
   const anchorSelectId = '#' + id;

   const style = {
      fontSize: '1rem',
      padding: '.5rem 1rem',
   };

   return (
      <>
         {childWithId}
         <ReactTooltip style={style} anchorSelect={anchorSelectId} {...rest}>
            {content}
         </ReactTooltip>
      </>
   );
}

export default Tooltip;
