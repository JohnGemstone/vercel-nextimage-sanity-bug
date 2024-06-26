import Image from "next/image";

const ImageGallery = ({ imgSrcs }: { imgSrcs: {url: string, lqip: string}[] }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-5">
        {imgSrcs.map((src, index) => (
          <div className="w-32 h-32 relative">
            <Image
              src={src.url}
              alt={"Demo"}
              blurDataURL={src.lqip}
              placeholder="blur"
              fill
              key={index}
              sizes="128px"
              className="object-cover rounded-lg shadow-lg bg-pink-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
