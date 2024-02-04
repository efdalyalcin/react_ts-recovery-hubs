import useHubSelectionStore from '@/store/useHubSelectionStore';
import cn from 'classnames';

const buttonClassName = 'w-60 rounded transition-colors text-slate-200';

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
          className={cn(buttonClassName, 'bg-green-700 ')}
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
          className={cn(buttonClassName, 'bg-slate-400 hover:bg-slate-700')}
        >
          Select the hubs you want to see
        </button>
      )}
    </div>
  );
}
