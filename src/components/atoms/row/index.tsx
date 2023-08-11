// types
import { ReactNode, FC } from 'react';

type RowProps = {
  children: ReactNode;
  spacing?: string;
  className?: string;
  alignmentY?: string;
  alignmentX?: string;
};

export const Row: FC<RowProps> = ({
  children,
  spacing,
  alignmentY,
  alignmentX,
  className = '',
}) => {
  const rowClasses = `flex flex-wrap 
        ${spacing ? `-mx-${spacing}` : 'mx-4'}
        ${alignmentY ? `items-${alignmentY}` : 'items-start'}
        ${alignmentX ? `justify-${alignmentX}` : 'justify-start'}
        ${className}
    `;

  return <div className={rowClasses}>{children}</div>;
};
