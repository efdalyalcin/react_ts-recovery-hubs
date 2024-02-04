import { HubT } from '@/types/hubs.type';
import HubPlasticDetail from './HubPlasticDetail';
import HubLogo from '@/components/HubLogo';
import portfolioIcon from '@/assets/portfolio_icon.png';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import HubImageModal from '@/components/HubImageModal';

type Props = {
  hubData: HubT;
};

// unassigned quantity amount
// const findPlasticInInventory = (data: HubT) => {
//   return data.hubUnassignedRecoveryList[0]
//     ? `${data.hubUnassignedRecoveryList[0].unassignedQuantity} ${data.hubUnassignedRecoveryList[0].quantityUnit}`
//     : 'No information';
// };
const textClickableClassName =
  'px-4 py-1 text-cyan-800 hover:text-cyan-400 transition-colors';

const smallScreenClassName =
  'grid grid-cols-4 grid-rows-2 place-items-center gap-4 border rounded py-2 px-4';

export default function HubItem({ hubData }: Props) {
  // modal will create a rerender so I kept detail props in state also
  // the reason is, not to create the same object over and over
  const [hubPlasticDetailProps] = useState({
    recoveredData: hubData.totalRecoveredQuantity,
    unassignedData: hubData.unassignedQuantityTotal,
    unit: hubData.recoveredQuantityUnit,
  });
  const [isPhotoModalShown, setIsPhotoModalShown] = useState(false);
  const closeModal = useCallback(() => {
    setIsPhotoModalShown(false);
  }, []);

  return (
    <>
      <div
        className={
          smallScreenClassName + ' lg:flex lg:items-center lg:justify-between'
        }
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
