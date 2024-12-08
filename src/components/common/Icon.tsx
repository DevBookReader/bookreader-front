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
}) => (
  <svg width={size} height={size} fill={fill} {...props}>
    <use href={`#${id}`} />
  </svg>
);

export default Icon;
