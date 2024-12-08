import IconID from '@/types/icon';
import { SVGProps } from 'react';

type Props = {
  id: IconID;
  size?: number | string;
  className?: string;
};

const Icon: React.FC<SVGProps<SVGSVGElement> & Props> = ({
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
