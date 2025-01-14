import Header from '@/components/common/Header';
import Icon from '@/components/common/Icon';

const SearchButton = () => (
  <button className="h-full w-10 flex items-center justify-center">
    <Icon id="outline-search" size={24} />
  </button>
);

const ProfileButton = () => (
  <button className="h-full w-10 flex items-center justify-center">
    <Icon id="outline-user" size={24} />
  </button>
);

const MoreButton = () => (
  <button className="h-full w-10 flex items-center justify-center">
    <Icon id="iconset-more" size={24} />
  </button>
);

const ArrowUpRightButton = () => (
  <button className="h-full w-10 flex items-center justify-center">
    <Icon id="iconset-arrow-up-right" size={24} />
  </button>
);

export default function HeaderPage() {
  return (
    <>
      <Header
        title={{ title: '서비스 이름', position: 'left' }}
        rightArea={
          <>
            <SearchButton />
            <ProfileButton />
          </>
        }
      />
      <Header
        showBackButton
        title={{ title: '독서 노트', position: 'center' }}
        rightArea={<MoreButton />}
      />
      <Header showBackButton title={{ title: '검색', position: 'center' }} />
      <Header showBackButton rightArea={<ArrowUpRightButton />} />
    </>
  );
}
