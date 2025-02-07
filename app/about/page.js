import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import Link from "next/link";

export default function page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            The Wild Oasis is an exclusive retreat designed to provide guests
            with a seamless blend of modern comfort and nature&apos;s
            tranquility. Nestled in the heart of the Italian Dolomites, our
            property offers an unparalleled experience for those seeking a
            harmonious escape from the ordinary.
          </p>
          <p>
            With 8 meticulously designed luxury cabins, guests can enjoy a
            unique combination of privacy and connection to nature. Whether you
            wish to explore the breathtaking mountain landscapes, relax in the
            warmth of a hot tub, or stargaze by a cozy campfire, The Wild Oasis
            offers the perfect setting for every occasion.
          </p>
          <p>
            Our mission is to deliver exceptional experiences by creating a
            serene environment where guests can unwind, reconnect, and create
            lasting memories. Discover the essence of nature combined with
            thoughtful hospitality at The Wild Oasis.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src={image2}
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          A Legacy of Excellence Since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Established in 1962, The Wild Oasis has built a reputation as a
            premier destination for relaxation and rejuvenation. With decades of
            experience, we have consistently evolved to meet the needs of our
            guests while maintaining a strong commitment to quality and
            sustainability.
          </p>
          <p>
            Our team is dedicated to delivering personalized service and
            ensuring that every guest enjoys an unforgettable stay. From the
            natural beauty of the Dolomites to the luxurious amenities in each
            cabin, The Wild Oasis stands as a testament to excellence in
            hospitality and eco-conscious tourism.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
