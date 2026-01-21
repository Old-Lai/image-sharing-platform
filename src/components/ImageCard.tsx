import {
  HandThumbUpIcon,
  ChatBubbleBottomCenterIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

type ImageCard = {
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  description?: string;
};

export default function ImageCard(props: ImageCard) {
  const {
    className = "",
    imgSrc,
    imgAlt,
    description = "No description",
  } = props;
  return (
    <div className={`${className} mb-10 w-full p-3`}>
      <div className="w-full overflow-hidden rounded-t">
        {imgSrc ? (
          <img className="w-full" src={imgSrc} alt={imgAlt} />
        ) : (
          <h2 className="h-80 font-bold italic">Image not found</h2>
        )}
      </div>
      <div className="flex w-full flex-col items-center justify-between rounded-b bg-[#474A51] px-5 pt-2 pb-4 text-sm shadow-xl">
        <div className="mb-3 min-h-5">{description}</div>
        <div className="flex w-full items-center justify-between">
          <div>
            <button className="flex items-center gap-2">
              <HandThumbUpIcon className="w-5" />
              <p>99</p>
            </button>
          </div>
          <div>
            <button className="flex items-center gap-2">
              <ChatBubbleBottomCenterIcon className="w-5" />
              <p>99</p>
            </button>
          </div>
          <div>
            <button className="flex items-center gap-2">
              <EyeIcon className="w-5" />
              <p>99</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
