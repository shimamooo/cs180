import Image from "next/image";
import Link from "next/link";

export const Showcase = () => (
  <section className="relative my-24">
    <div className="bg-stripe-gradient-asc absolute top-0 mt-20 h-full w-full scale-y-[300%]" />
    <div className="relative container grid grid-cols-1 grid-rows-4 gap-7 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3">
      <Link
        className="after:bg-darken-image after:shadow-border relative row-span-2 after:absolute after:inset-0 after:h-full after:w-full after:rounded-lg after:transition-opacity after:duration-300 after:content-[''] hover:after:opacity-95 sm:col-span-1 md:col-span-2"
        href="/apply"
      >
        <figure className="relative flex h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/images/FALL 2023 RECRUITING.png"
            alt="FALL 2023 RECRUITING"
            fill
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 z-30 p-6">
            <p className="text-3xl font-semibold text-gray-50">
              Fall 2025 Applications now open &rarr;
            </p>
            <p className="mt-6 text-gray-400">
              Join the next cohort of the 12 best AI teams in Berkeley, with an
              extensive advisor and VC network to get your startup funded today.
            </p>
          </div>
        </figure>
      </Link>
      <Link
        href="/portfolio"
        className="after:bg-darken-image after:shadow-border relative after:absolute after:inset-0 after:h-full after:w-full after:rounded-lg after:content-['']"
      >
        <figure className="relative flex h-full overflow-hidden rounded-xl">
          <Image
            src="/images/pedro.jpg"
            alt="Pedro"
            fill
            className="h-full w-full object-cover brightness-[0.6]"
          />
          <div className="absolute bottom-0 left-0 z-30 p-6">
            <p className="text-xl font-semibold text-gray-50">
              AIEB Success Stories
            </p>
            <p className="mt-4 text-sm text-gray-400">
              In our first semester, 3 AI teams in the S23 cohort received
              funding from firms like Pear VC and Skydeck.
            </p>
          </div>
        </figure>
      </Link>
      <Link
        className="after:bg-darken-image after:shadow-border relative after:absolute after:inset-0 after:h-full after:w-full after:rounded-lg after:transition-opacity after:duration-300 after:content-[''] hover:after:opacity-95"
        href="/team"
      >
        <figure className="relative flex h-full overflow-hidden rounded-xl">
          <Image
            src="/images/AI Entrepreneurs at Berkeley Meet-Up.jpg"
            alt="AI Entrepreneurs at Berkeley Meet-Up"
            fill
            className="h-full w-full object-cover brightness-[0.6]"
          />
        </figure>
        <div className="absolute bottom-0 left-0 z-30 p-6">
          <p className="text-xl font-semibold text-gray-50">
            Team and Advisors &rarr;
          </p>
          <p className="mt-4 text-sm text-gray-400">
            See our network of industry professionals and professors who offer
            expertise across domains.
          </p>
        </div>
      </Link>
    </div>
  </section>
);
