import { actionsSymbols } from '@/constants/icons/actions';
import { commonSymbols } from '@/constants/icons/common';
import { statesSymbols } from '@/constants/icons/states';

const SVGSymbols = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
    {actionsSymbols}
    {commonSymbols}
    {statesSymbols}
  </svg>
);

export default SVGSymbols;
