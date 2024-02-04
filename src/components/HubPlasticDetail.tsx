import { roundNumbersToOneDigit } from '@/helpers/roundNumbersToOneDigit';

type hubPlasticDetailProps = {
  recoveredData: number;
  unassignedData: number | null;
  unit: string;
};

const gridRowClassName =
  'flex gap-4 items-center xs:justify-between flex-col xs:flex-row ';

export default function HubPlasticDetail({
  recoveredData,
  unassignedData,
  unit,
}: hubPlasticDetailProps) {
  return (
    <div className="col-span-4 row-start-2 grid gap-2 grid-cols-1 xs:min-w-96 lg:col-span-1 lg:row-start-1">
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
