type Props = {
  closeModal: () => void;
  photoSrc: string;
};

export default function HubImageModal({ closeModal, photoSrc }: Props) {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur z-99"
      onClick={closeModal}
    >
      <div className="relative top-10vh h-40vh min-w-300px flex flex-col justify-center items-center object-contain mt-8 ">
        <button
          type="button"
          onClick={closeModal}
          className="text-lg mb-2 py-2 px-8 border border-red-500 bg-red-300 rounded"
        >
          Close
        </button>
        <img src={photoSrc} className="w-4/5" />
      </div>
    </div>
  );
}
