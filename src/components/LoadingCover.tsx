export const errorAndLoadingDivClassName = 'absolute inset-0 bg-gray-400 z-50';
export const errorAndLoadingPClassName =
  'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-dark text-center text-3xl';

export default function LoadingCover() {
  return (
    <div className={errorAndLoadingDivClassName}>
      <p className={errorAndLoadingPClassName}>Loading...</p>
    </div>
  );
}
