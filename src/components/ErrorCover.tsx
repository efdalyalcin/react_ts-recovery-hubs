import {
  errorAndLoadingDivClassName,
  errorAndLoadingPClassName,
} from './LoadingCover';

type Props = {
  error: unknown;
};

export default function ErrorCover({ error }: Props) {
  return (
    <div className={errorAndLoadingDivClassName + ' bg-red-400'}>
      <p className={errorAndLoadingPClassName}>
        Error on the server: <br />
        {`${error}`}
      </p>
    </div>
  );
}
