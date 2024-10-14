"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, Home, Mail, Star, Play } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ticketOptions = [
  { tickets: 1, price: 5 },
  { tickets: 3, price: 10 },
  { tickets: 6, price: 20 },
  { tickets: 15, price: 50 },
];

const TicketCard = ({ tickets, price, isMonthly }: any) => (
  <div className="relative w-full aspect-square max-w-[300px] mx-auto">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0C8.95431 0 0 8.95431 0 20V135C11.0457 135 20 143.954 20 155C20 166.046 11.0457 175 0 175V280C0 291.046 8.95431 300 20 300H280C291.046 300 300 291.046 300 280V175C288.954 175 280 166.046 280 155C280 143.954 288.954 135 300 135V20C300 8.95431 291.046 0 280 0H20Z"
        fill="white"
      />
    </svg>
    <div className="absolute inset-0 flex flex-col justify-between p-6 text-sky-900">
      <div className="text-center">
        <h3 className="text-2xl font-bold">
          {tickets} ticket{tickets > 1 ? "s" : ""}
        </h3>
        <div className="w-full h-px bg-gray-300 my-4"></div>
        <p className="text-6xl font-bold mt-4">£{price}</p>
      </div>
      <div className="text-center space-y-4">
        <p className="text-sm text-blue-700">
          {isMonthly ? "per month" : "one-time purchase"}
        </p>
        <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-4">
          Enter Draw
        </Button>
      </div>
    </div>
  </div>
);

export function PageComponent() {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-['DM_Sans',sans-serif]">
      <div className="bg-blue-700 text-white px-4 py-2 text-center">
        <p className="flex items-center justify-center text-sm font-medium">
          <AlertCircle className="h-4 w-4 mr-2" />
          This prize draw closes on 21st October at 23:59pm
        </p>
      </div>

      <header className="bg-white text-sky-900 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c8bdc032-a035-4bb4-aa20-c8ff86abcb51-bill-xaeANzIW9R8SHmabDvbTLRAhHVz4aX.png"
                alt="Billericay Town F.C. logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">
                Billericay Town FC Women
              </span>
            </div>
            <Button
              size="sm"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full"
            >
              Enter Draw
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-sky-100 text-sky-900">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BTFC%20Women-6bY6rLjo8zkpkvDMFZADakGPGdQiaw.png"
                  alt="Billericay Town FC Women's team huddled together"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-12 space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c8bdc032-a035-4bb4-aa20-c8ff86abcb51-bill-xaeANzIW9R8SHmabDvbTLRAhHVz4aX.png"
                    alt="Billericay Town F.C. logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Win Cash Prizes in the Billericay Town FC Women Prize Draw
                </h1>
                <p className="text-lg md:text-xl">
                  Support women's football and get a chance to win{" "}
                  <strong>50% of the proceeds</strong> in our monthly prize
                  draw. Your participation helps fund and empower the 275
                  players and 25 teams across our club.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full"
                >
                  Enter Draw
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h5 className="text-xl md:text-2xl font-bold text-center mb-4 uppercase">
                Win 50% of the draw proceeds, every month
              </h5>
              <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Enter the Billericay Town FC Women Prize Draw
              </h3>
              <p className="text-center text-xl mb-8">
                Unlock greater chances to win with bigger ticket bundles!
              </p>

              <div className="flex justify-center items-center space-x-4 mb-8">
                <span
                  className={`text-lg ${
                    !isMonthly ? "font-bold" : ""
                  } text-white`}
                >
                  Single Purchase
                </span>
                <Switch
                  checked={isMonthly}
                  onCheckedChange={setIsMonthly}
                  className="data-[state=checked]:bg-white data-[state=unchecked]:bg-black"
                />
                <span
                  className={`text-lg ${
                    isMonthly ? "font-bold" : ""
                  } text-white`}
                >
                  Monthly Purchase
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ticketOptions.map(({ tickets, price }) => (
                  <TicketCard
                    key={tickets}
                    tickets={tickets}
                    price={price}
                    isMonthly={isMonthly}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-sky-900 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              How it works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Play%20icon-jisCWWcgfCWP3LzyfYeBHneDsN6Myq.png"
                    alt="Play icon"
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">play</h3>
                <p>The Billericay Town F.C. Monthly Draw</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fund%20icon-2yilqL90KBpv27GN6C9vkgiE9PLhG2.png"
                    alt="Fund icon"
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">fund</h3>
                <p>
                  Fund a good cause with 100% net proceeds of all entry fees
                  directly to Billericay Town F.C.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Win%20icon-0zEbCj27ozplSkq8PIH43L4Z7UmgZ3.png"
                    alt="Win icon"
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">win</h3>
                <p>Win 50% of the draw proceeds, every month</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sky-100 text-sky-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Billericay Town FC Women
              </h2>
              <div className="text-lg mb-8 space-y-4">
                <p>
                  Billericay Town Women and Girls Fc is a club comprising 25
                  teams, over 275 players (aged from 5 to adults), numerous
                  coaching staff, volunteers, parents and supporters. Our aim is
                  obviously to win football matches but to do so by playing in
                  the right way.
                </p>
                <p>
                  To see our players smile and enjoy the games. We strive to be
                  an ambassador for women's and girl's sport in Essex and
                  beyond. We want to provide a safe and inclusive environment
                  where we can empower our players to be the best that they can
                  be both in and outside of sport. Inevitably, the cost of being
                  ambitious is an increasing cost and funds that need to be
                  raised.
                </p>
                <p>
                  This prize draw is one aspect of that fundraising. We thank
                  each, and every, single person who enters the draw. Times are
                  hard and there are many calls on people's hard-earned money.
                  However, every contribution will be used to make a difference
                  to the women and girls within our club. Also, there will be
                  decent cash prizes each month.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full"
              >
                Enter Draw
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-white text-sky-900 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Is there a limit to the number of draws I can participate
                    in?
                  </AccordionTrigger>
                  <AccordionContent>
                    You are free to participate in as many prize draws as you
                    want to. However, we urge you to play responsibly and within
                    your means.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How do you make sure prize draws are fair and transparent?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our winners are computed and selected completely at random.
                    Of course, your chances of winning will statistically
                    increase if you have a greater number of entries in the
                    draw.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Are there any age restrictions for participants?
                  </AccordionTrigger>
                  <AccordionContent>
                    You must be aged 18 years or over to participate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can I gift my winnings or tickets to someone else?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all entries and prizes alike can be gifted to friends,
                    family, colleagues etc.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How is my privacy protected?
                  </AccordionTrigger>
                  <AccordionContent>
                    All of our communications with you comply with the UK's Data
                    Protection regulations defined by GDPR. All finances are
                    processed by Stripe, a world leader in payment processing
                    who also holds PCI-DDS compliance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="bg-sky-100 text-sky-900 py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Want to fundraise for your Community Cause?
            </h2>
            <p className="text-center text-xl mb-8 max-w-3xl mx-auto">
              Any good cause can host a Play Fund Win draw, raising money for
              themselves or an associated good cause they support - click below
              for more information
            </p>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full"
              >
                Start a Draw
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 transform translate-y-1/4">
            <Star className="text-yellow-300 w-16 h-16 opacity-50" />
          </div>
          <div className="absolute bottom-0 right-0 transform translate-x-1/4">
            <Play className="text-white w-32 h-32 opacity-25" />
          </div>
        </section>
      </main>

      <footer className="bg-white text-gray-600 py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-sky-900">About Us</h3>
              <p className="text-sm">
                Billericay Town F.C. Prize Draw is operated by Play Fund Win.
              </p>
              <div className="flex items-start space-x-2">
                <Home className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  PFW Holdings Ltd Suite#300, 4 Blenheim Court, Peppercorn
                  Close, Peterborough, PE1 2DU
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:hello@playfundwin.com"
                  className="text-sm hover:text-sky-600"
                >
                  hello@playfundwin.com
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-sky-900">Legal</h3>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-sky-600">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-sky-600">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="border-t pt-8 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Play Fund Win, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
