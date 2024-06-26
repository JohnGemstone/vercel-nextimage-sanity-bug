import ImageGallery from "@/app/components/ImageGallery";
import imageLibrary from "./images.json";

const NUM_PAGES = 50;

export async function generateStaticParams() {
  const slugs = new Array(NUM_PAGES).fill(0).map((_, i) => `${i}`);
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function Gallery({
  params,
}: {
  params: { slug: string };
}) {
  // choose 10 random images
  const imgSrcs = imageLibrary.sort(() => Math.random() - 0.5).slice(0, 10);

  return (
    <main className="p-5">
      <div>
        <a href={`./${(parseInt(params.slug) - 1) % NUM_PAGES}`}>Previous</a>
        <span> | </span>
        <a href={`./${(parseInt(params.slug) + 1) % NUM_PAGES}`}>Next</a>
      </div>
      <ImageGallery imgSrcs={imgSrcs} />
      <div>
        Anything <span className="font-bold text-pink-500">pink</span> shows image not loaded.
      </div>
    </main>
  );
}
