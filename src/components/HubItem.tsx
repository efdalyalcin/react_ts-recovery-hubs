import { HubT } from '@/types/hubs.type';
import HubPlasticDetail from './HubPlasticDetail';
import HubLogo from '@/components/HubLogo';
import portfolioIcon from '@/assets/portfolio_icon.png';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import HubImageModal from '@/components/HubImageModal';
import useHubSelectionStore from '@/store/useHubSelectionStore';
import cn from 'classnames';

type Props = {
  hubData: HubT;
};

const textClickableClassName =
  'px-4 py-1 text-cyan-800 hover:text-cyan-400 transition-colors';

const smallScreenClassName =
  'grid grid-cols-4 grid-rows-2 place-items-center gap-4 border rounded py-2 px-4 transition-colors';

// this function is special for the component, and since it is not reusable I kept it here
const findIsItemSelected = (hubId: string, selectedItems: string[]) => {
  return selectedItems.find((item) => item === hubId);
};

export default function HubItem({ hubData }: Props) {
  const { isSelectClicked, selectedHubs, selectHub } = useHubSelectionStore();

  // modal will create a rerender so I kept detail props in state also
  // the reason is, not to create the same object over and over
  const [hubPlasticDetailProps] = useState({
    recoveredData: hubData.totalRecoveredQuantity,
    unassignedData: hubData.unassignedQuantityTotal,
    unit: hubData.recoveredQuantityUnit,
  });

  const [isPhotoModalShown, setIsPhotoModalShown] = useState(false);

  // since this is passed to other components it is wrapped to useCallback to prevent unwanted renders
  const closeModal = useCallback(() => {
    setIsPhotoModalShown(false);
  }, []);

  // since this is a simple function and not passed anywhere for performance reasons it is kept unwrapped
  const handleHubSelect = () => {
    if (isSelectClicked) return selectHub(hubData.uuid);

    // if selection is not open it doesn't let you select
    return () => {};
  };

  return (
    <>
      <div
        className={cn(
          smallScreenClassName,
          'lg:flex lg:items-center lg:justify-between',
          {
            'border-cyan-700': findIsItemSelected(hubData.uuid, selectedHubs),
            'border-cyan-200 hover:border-cyan-700': isSelectClicked,
          }
        )}
        onClick={handleHubSelect}
      >
        <HubLogo
          imageSrc={hubData.logo?.directLink}
          hubName={hubData.displayName}
        />
        <div className="flex items-center justify-center flex-col lg:min-w-80">
          <p className="font-semibold text-center">{hubData.name}</p>
          <a
            href={`https://test.cleanhub.com/hub/${hubData.slug}`}
            className={textClickableClassName}
          >
            Details
          </a>
        </div>
        <HubPlasticDetail {...hubPlasticDetailProps} />
        {hubData.parentHubName ? (
          <img
            src={portfolioIcon}
            alt="portfolio icon"
            className="w-12 h-8 object-contain"
          />
        ) : (
          <div className="w-12 h-8"> </div>
        )}
        <div>
          <button
            type="button"
            onClick={() => setIsPhotoModalShown(true)}
            className={textClickableClassName}
          >
            Images
          </button>
        </div>
      </div>
      {
        //#region modal
        isPhotoModalShown
          ? createPortal(
              <HubImageModal
                closeModal={closeModal}
                photoSrc={hubData.cardImage.directLink}
              />,
              document!.getElementById('modal')!
            )
          : null
        //#endregion
      }
    </>
  );
}
