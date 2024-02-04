import { roundNumbersToOneDigit } from '@/helpers/roundNumbersToOneDigit';

type hubPlasticDetailProps = {
  recoveredData: number;
  unassignedData: number | null;
  unit: string;
};

const gridRowClassName = 'flex justify-between gap-4';

export default function HubPlasticDetail({
  recoveredData,
  unassignedData,
  unit,
}: hubPlasticDetailProps) {
  return (
    <div className="grid gap-2 grid-cols-1 min-w-96">
      <div className={gridRowClassName}>
        <p>Amount of total recovered plastic: </p>
        <p className="font-semibold">{`${roundNumbersToOneDigit(
          recoveredData
        )} ${unit}`}</p>
      </div>
      <div className={gridRowClassName}>
        <p>Amount of total unassigned plastic: </p>
        <p>{`${roundNumbersToOneDigit(unassignedData)} ${unit}`}</p>
      </div>
    </div>
  );
}
