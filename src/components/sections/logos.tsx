import { Marquee } from "~/components/ui/marquee";
import Image from "next/image";
import a16z from "public/logos/a16z.svg";
import antler from "public/logos/antler.svg";
import bigIdeas from "public/logos/big-ideas.png";
import costanoa from "public/logos/costanoa-vc.svg";
import courtyardVentures from "public/logos/courtyard-ventures.png";
import futurexcapital from "public/logos/futurexcapital.png";
import gumi from "public/logos/gum-logo.png";
import haas from "public/logos/haas_entr.png";
import mercury from "public/logos/mercury.svg";
import microsoft from "public/logos/microsoft.png";
import nfx from "public/logos/nfx.svg";
import openAI from "public/logos/openai.svg";
import pearVC from "public/logos/pearvc.svg";
import skydeck from "public/logos/skydeck.png";
import theHouseFund from "public/logos/the-house-fund.svg";
import unusualVentures from "public/logos/unusual-ventures.svg";
import yCombinator from "public/logos/y-combinator.svg";

export const Logos = () => (
  <section className="border-foreground/10 mt-28 border-b border-dashed pb-6 md:mt-36 lg:mt-24">
    <div className="container">
      <Marquee>
        <Image
          className="h-14 w-auto object-cover brightness-0 invert"
          src={futurexcapital}
          alt="FutureX Capital"
          draggable={false}
        />
        <Image
          className="h-14 w-auto object-cover brightness-0 invert"
          src={pearVC}
          alt="Pear VC"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={a16z}
          alt="a16z"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={openAI}
          alt="OpenAI"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={microsoft}
          alt="Microsoft"
          draggable={false}
        />
        <Image
          className="h-12 w-auto object-cover brightness-0 invert"
          src={nfx}
          alt="NFX"
          draggable={false}
        />
        <Image
          className="h-12 w-auto object-cover brightness-0 invert"
          src={costanoa}
          alt="Costanoa"
          draggable={false}
        />
        <Image
          className="h-12 w-auto object-cover brightness-0 invert"
          src={yCombinator}
          alt="Y Combinator"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={skydeck}
          alt="Skydeck"
          draggable={false}
        />
        <Image
          className="h-12 w-auto object-cover brightness-0 invert"
          src={mercury}
          alt="Mercury"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={unusualVentures}
          alt="Unusual Ventures"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={theHouseFund}
          alt="The House Fund"
          draggable={false}
        />
        <Image
          className="h-12 w-auto object-cover brightness-0 invert"
          src={nfx}
          alt="NFX"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={antler}
          alt="Antler"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={bigIdeas}
          alt="Big Ideas"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={courtyardVentures}
          alt="Courtyard Ventures"
          draggable={false}
        />
        <Image
          className="h-20 w-auto object-cover brightness-0 invert"
          src={gumi}
          alt="Gumi America"
          draggable={false}
        />
        <Image
          className="h-20 w-auto object-cover brightness-0 invert"
          src={haas}
          alt="HAAS Entrepreneurs"
          draggable={false}
        />
      </Marquee>
    </div>
  </section>
);
