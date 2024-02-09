import SelectHubs from './SelectHubs';
import useAssignablePlasticsAndGroupStore, {
  GroupByFilterT,
} from '@/store/useAssignablePlasticsAndGroupStore';

export default function FilterBar() {
  const {
    isAssignablePlasticPresentChecked,
    toggleIsAssignablePlasticPresent,
    setGroupByFilterSelected,
  } = useAssignablePlasticsAndGroupStore();

  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-3 ">
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
      <SelectHubs />
      <select
        onChange={(e) =>
          setGroupByFilterSelected(e.target.value as GroupByFilterT)
        }
      >
        <option value="none">None</option>
        <option value="stage">Stage</option>
        <option value="state">State</option>
      </select>
    </div>
  );
}
