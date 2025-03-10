import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { EyeSlashIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";
import TextExpander from "../../_components/TextExpander";
import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "../../_lib/data-service";

export const revalidate = 86400;

// Metadata function
export async function generateMetadata({ params }) {
  let Params = await params;
  const cabin = await getCabin(Params.cabinId);
  return {
    title: `Cabin ${cabin.name}`,
  };
}

export default async function Page({ params }) {
  let Params = await params;
  const cabin = await getCabin(Params.cabinId);

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-l-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3 h-96">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            className="object-cover"
            alt={`Cabin ${name}`}
          />
        </div>
        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>
          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UserIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to{" "}
                <span className="font-bold">{maxCapacity} guests</span>
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites, Italy</span>
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve today. Pay on Arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
