import IconIDTypes from '@/types/icon';
import { SVGProps } from 'react';

interface IIconProps {
  id: IconIDTypes;
  size?: number | string;
  className?: string;
}

const Icon: React.FC<SVGProps<SVGSVGElement> & IIconProps> = ({
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
