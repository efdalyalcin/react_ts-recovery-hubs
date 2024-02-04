import recycleIcon from '@/assets/recycling_icon.svg';

type Props = {
  hubName: string;
  imageSrc: string | null | undefined;
};

const iconClassName = 'block w-12 h-12 object-contain';

export default function HubLogo({ imageSrc, hubName }: Props) {
  if (!imageSrc)
    return (
      <img
        src={recycleIcon}
        alt="recycling icon"
        className={iconClassName + ' p-2'}
      />
    );

  return (
    <img src={imageSrc} alt={`${hubName} logo`} className={iconClassName} />
  );
}
