import Icon from './Icon';

interface Title {
  title: string;
  position: 'left' | 'center' | 'right';
}

interface Props {
  showBackButton?: boolean;
  onBackClick?: () => void;
  title?: Title;
  rightArea?: React.ReactNode;
}

const Header: React.FC<Props> = ({
  showBackButton = false,
  onBackClick,
  title = { title: '', position: 'center' },
  rightArea,
}) => {
  const titlePosition: string = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[title.position];

  return (
    <header className="h-14 flex items-center px-4 bg-white">
      {showBackButton && (
        <button onClick={onBackClick} className="mr-4">
          <Icon id="iconset-chevron-left" size={24} />
        </button>
      )}
      <div className={`flex-1 flex ${titlePosition}`}>
        <h1 className="text-3-bold text-grey-800">{title.title}</h1>
      </div>
      <div className="h-full flex items-center">{rightArea}</div>
    </header>
  );
};

export default Header;
