import useHubSelectionStore from '@/store/useHubSelectionStore';

const buttonClassName = 'w-60';

export default function SelectHubs() {
  const {
    isSelectClicked,
    toggleIsSelectClicked,
    setIsSelectionDoneToTrue,
    setIsSelectionDoneToFalse,
    clearSelectedHubs,
  } = useHubSelectionStore();

  return (
    <div>
      {isSelectClicked ? (
        <button
          type="button"
          onClick={() => {
            setIsSelectionDoneToTrue();
            toggleIsSelectClicked();
          }}
          className={buttonClassName}
        >
          DONE
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            toggleIsSelectClicked();
            setIsSelectionDoneToFalse();
            clearSelectedHubs();
          }}
          className={buttonClassName}
        >
          Select the hubs you want to see
        </button>
      )}
    </div>
  );
}
