import { CountUp } from "~/components/ui/count-up";
import { Badge } from "~/components/ui/primitives/badge";
import { Button } from "~/components/ui/primitives/button";
import { Card } from "~/components/ui/primitives/card";
import { ArrowRight, Award, Target, Users, Zap } from "lucide-react";
import Link from "next/link";

export const IncubatorIntro = () => (
  <section className="relative py-24 sm:py-28 md:py-32">
    <div className="bg-stripe-gradient absolute top-0 -z-10 h-full w-full scale-y-[200%]" />
    <div className="container">
      <div className="mx-auto max-w-4xl text-center">
        <Badge variant="secondary" className="mb-6">
          <Zap className="mr-2 h-4 w-4" />
          Premier AI Incubator
        </Badge>
        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          The Future of AI{` `}
          <br className="hidden sm:block" />
          Entrepreneurship
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Join the most selective AI incubator in the Bay Area. We're building
          the next generation of AI founders through intensive mentorship,
          strategic partnerships, and direct access to Silicon Valley's top
          investors.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            <CountUp to={12} />
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Teams per Cohort
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            <CountUp to={10} />
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Week Program
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            <CountUp to={95} />
            <span className="text-lg">%</span>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Funding Rate
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            $<CountUp to={15} />
            <span className="text-lg">M+</span>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Total Raised
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:from-blue-950/50 dark:to-indigo-950/50">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Expert Mentorship</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Direct access to AI researchers, successful founders, and industry
              leaders from companies like OpenAI, Anthropic, and leading VCs.
            </p>
          </div>
        </Card>

        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:from-purple-950/50 dark:to-pink-950/50">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50">
              <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Strategic Focus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Intensive curriculum focused on AI product development,
              go-to-market strategy, and fundraising with hands-on workshops and
              real-world applications.
            </p>
          </div>
        </Card>

        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:from-green-950/50 dark:to-emerald-950/50">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/50">
              <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Proven Results</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our alumni have raised millions in funding and built successful AI
              companies. Join a network of founders who are shaping the future
              of AI.
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-20">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Program Structure
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Our 10-week intensive program is designed to accelerate your AI
            startup from concept to funding.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
              1
            </div>
            <h4 className="mb-2 text-lg font-semibold">Foundation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI fundamentals, market validation, and team building
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl font-bold text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
              2
            </div>
            <h4 className="mb-2 text-lg font-semibold">Development</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Product development, technical architecture, and MVP building
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600 dark:bg-green-900/50 dark:text-green-400">
              3
            </div>
            <h4 className="mb-2 text-lg font-semibold">Go-to-Market</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Customer acquisition, growth strategies, and market penetration
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-bold text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
              4
            </div>
            <h4 className="mb-2 text-lg font-semibold">Fundraising</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pitch preparation, investor meetings, and closing deals
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white md:p-12">
        <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
          Ready to Build the Future?
        </h3>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
          Applications for our Spring 2025 cohort are now open. Join the most
          selective AI incubator and accelerate your startup's growth.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/apply">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            <Link href="/program">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
