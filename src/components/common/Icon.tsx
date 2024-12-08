import IconIDTypes from '@/types/icon';
import { SVGProps } from 'react';

interface IconProps {
  id: IconIDTypes;
  size?: number | string;
  className?: string;
}

const Icon: React.FC<SVGProps<SVGSVGElement> & IconProps> = ({
  id,
  size = '16',
  fill = 'black',
  ...props
}) => {
  return (
    <svg width={size} height={size} {...props}>
      <use href={`#${id}`} />
    </svg>
  );
};

export default Icon;
