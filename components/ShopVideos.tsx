import { shopVideos } from "@/lib/media";

const ShopVideos = () => {
  return (
    <section className="bg-brand-ink py-12 text-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        <h2 className="font-display text-4xl sm:text-5xl">Shop videos</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Real clips from Juneja Trading Corporation. Play on your phone or computer.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {shopVideos.map((clip) => (
            <figure key={clip.src} className="border border-white/20 bg-black">
              <video
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
              >
                <source src={clip.src} type="video/mp4" />
              </video>
              <figcaption className="px-3 py-2 text-sm text-white/80">{clip.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopVideos;
