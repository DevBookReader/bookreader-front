import Icon from '@/components/common/Icon';

export default function IconPage() {
  return (
    <div>
      <Icon id={'outline-user'} className="fill-magenta-500" />
      <Icon id={'outline-search'} size={24} />
      <Icon id={'outline-write'} />
      <Icon id={'outline-archive-spam'} size={36} className="fill-grey-400" />
    </div>
  );
}
