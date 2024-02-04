import useAssignablePlasticsStore from '@/store/useAssignablePlasticsStore';

export default function FilterBar() {
  const {
    isAssignablePlasticPresentChecked,
    toggleIsAssignablePlasticPresent,
  } = useAssignablePlasticsStore();

  return (
    <div className="mb-8 flex justify-around">
      <div className="flex gap-4 items-center">
        <label
          htmlFor="plasticAssign"
          className={
            isAssignablePlasticPresentChecked
              ? 'text-black transition-colors'
              : 'text-slate-400 transition-colors'
          }
        >
          Hubs with unassigned plastic
        </label>
        <input
          type="checkbox"
          name="plastic assignable"
          id="plasticAssign"
          checked={isAssignablePlasticPresentChecked}
          onChange={toggleIsAssignablePlasticPresent}
        />
      </div>
      <div>Select the hubs you want to see</div>
    </div>
  );
}
