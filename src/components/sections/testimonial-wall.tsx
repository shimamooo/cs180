"use client";

import { LinkedInPost } from "~/components/ui/linkedin-post";
import dhruvKulkarni from "public/images/stories/dhruv.jpg";
import ethanHouStory2 from "public/images/stories/ethan-hou-story-2.jpg";
import ethanHouStory from "public/images/stories/ethan-hou-story.jpg";
import ethanHou from "public/images/stories/ethan-hou.jpg";
import foundationCapitalLogo from "public/images/stories/foundation_capital_logo.jpg";
import foundationCapitalEvent from "public/images/stories/foundation-capital-event.jpg";
import juliusRitterStory from "public/images/stories/julius-ritter-story.jpg";
import juliusRitter from "public/images/stories/julius-ritter.jpg";
import jyotiRaniStory from "public/images/stories/jyoti-rani-story.jpg";
import jyotiRani from "public/images/stories/jyoti-rani.jpg";
import rohanSontakkeStory from "public/images/stories/rohan-sontakke-story.jpg";
import rohanSontakke from "public/images/stories/rohanSontakke.jpg";
import seanDorjeStory from "public/images/stories/sean-dorje-story.jpg";
import seanDorje from "public/images/stories/sean-dorje.jpg";
import yoonseokYangStory from "public/images/stories/yoonseok-yang-story.jpg";
import yoonseokYang from "public/images/stories/yoonseok-yang.jpg";
import Masonry from "react-masonry-css";

export const TestimonialWall = () => (
  <div className="relative">
    <Masonry
      className="masonry-grid"
      columnClassName="masonry-grid-column"
      breakpointCols={{ default: 4, 1280: 3, 1024: 2, 540: 1 }}
    >
      <LinkedInPost
        url="https://www.linkedin.com/posts/foundation-capital_did-you-go-to-cal-are-you-a-founder-or-activity-7353828853850509312-Wilh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Foundation Capital"
        profilePicture={foundationCapitalLogo}
        datePublished="Jul 23, 2025"
        photo={foundationCapitalEvent}
      >
        Did you go to Cal? Are you a founder, or thinking of becoming one? We're
        teaming up with{" "}
        <a
          href="https://www.linkedin.com/company/aientrepreneurs/"
          target="_blank"
        >
          AI Entrepreneurs at Berkeley
        </a>{" "}
        to welcome Cal Founders and future founders back to campus with a Cal
        Founder Summer Social.
      </LinkedInPost>
      <LinkedInPost
        url="https://www.linkedin.com/posts/ethan-hou10_at-the-start-of-the-year-martin-yc-s23-activity-7345878418900557825-qOfW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Ethan Hou"
        headline="Cofounder, CTO @ Martin (YC S23)"
        profilePicture={ethanHou}
        datePublished="Jul 1, 2025"
        photo={ethanHouStory}
      >
        At the start of the year,{" "}
        <a
          href="https://www.linkedin.com/company/martin-voiceai/"
          target="_blank"
        >
          Martin (YC S23)
        </a>
        's annual revenue was $100k. Half a year later, we're at $100k in
        monthly revenue, growing 65% every month. 🤯
        <br />
        And we're still only 2 people. There's not enough time to finish the 101
        things that need to get done, so we're looking to bring on our first
        founding engineer.
      </LinkedInPost>
      <LinkedInPost
        url="https://www.linkedin.com/posts/dhruv-kulkarni_in-the-last-9-months-weve-worked-with-10-activity-7342966642500431872-Voiy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Dhruv Kulkarni"
        headline="Founder of DocuBridge"
        profilePicture={dhruvKulkarni}
        datePublished="Jun 23, 2025"
      >
        In the last 9 months, we've worked with 10+ growth equity funds, ranging
        from $100M to $2B AUM. We hear lots of funny (and horrifying) war
        stories. Here are some highlights: <br />
        <br />
        ** Anonymized for confidentiality ** <br />• A VP accidentally sent
        their brutally honest IC memo to the target company's entire management
        team in a reply-all. The memo included "CEO gets defensive about churn
        metrics" and "CTO seems overwhelmed." They lost the deal and now their
        banker jokes about it every time they chat.
      </LinkedInPost>
      <LinkedInPost
        url="https://www.linkedin.com/posts/rohan-sontakke-rss_yc-ai-startupschool-activity-7340769035497721856-o9Th?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Rohan Sontakke"
        headline="@Berkeley | ML @ BAIR | e3"
        profilePicture={rohanSontakke}
        datePublished="Jun 17, 2025"
        photo={rohanSontakkeStory}
      >
        Day 1 at{" "}
        <a href="https://www.linkedin.com/school/y-combinator/" target="_blank">
          Y Combinator
        </a>
        's AI Startup School → mind blown.
        <br />
        <br />
        In 24 hours I met founders who ship faster than most teams brainstorm
        and soaked up lessons from the people actually pushing the frontier.
        Five takeaways worth sharing:
        <br /> <br />
        1. Ambition is the only ceiling. Garry Tan opened with a clear reminder:
        AI turns individual effort into outsized leverage. The bottleneck now is
        how big you’re willing to think.
        <br />
        2. “Impossible” ages quickly. Sam Altman skipped the AGI quest because
        it sounded absurd. Five years later it feels inevitable. Bet on the
        future you want.
        <br />
        3. Naive questions build new rules.{" "}
        <a
          href="https://www.linkedin.com/in/jared-kaplan-645843213/"
          target="_blank"
        >
          Jared Kaplan
        </a>{" "}
        kept asking “But how much data, exactly?” That curiosity produced
        today’s scaling laws. Simple questions still hide giant answers.
      </LinkedInPost>
      <LinkedInPost
        url="https://www.linkedin.com/posts/yoonseok-yang_im-excited-to-announce-pensieves-collaboration-activity-7313688815842275328-LFTE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Yoonseok (Yoon) Yang"
        headline="CEO @ Pensieve"
        profilePicture={yoonseokYang}
        datePublished="Apr 3, 2025"
        photo={yoonseokYangStory}
      >
        I’m excited to announce{" "}
        <a href="https://www.linkedin.com/company/pensieveinc/" target="_blank">
          Pensieve
        </a>
        's collaboration with{" "}
        <a
          href="https://www.linkedin.com/company/anthropicresearch/"
          target="_blank"
        >
          Anthropic
        </a>
        ! Pensieve TA has been helping instructors at top higher ed institutions
        like{" "}
        <a
          href="https://www.linkedin.com/company/columbia-university/"
          target="_blank"
        >
          Columbia University
        </a>
        ,{" "}
        <a href="https://www.linkedin.com/company/uc-berkeley/" target="_blank">
          University of California, Berkeley
        </a>
        , and{" "}
        <a
          href="https://www.linkedin.com/company/harvey-mudd-college/"
          target="_blank"
        >
          Harvey Mudd College
        </a>{" "}
        by reducing grading time and providing personalized tutoring to
        students.
      </LinkedInPost>
      <LinkedInPost
        url="https://www.linkedin.com/posts/rohan-sontakke-rss_lightspeed-venture-partners-thinking-machines-activity-7321628270247010304-sGOd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Rohan Sontakke"
        headline="@Berkeley | ML @ BAIR | e3"
        profilePicture={rohanSontakke}
        datePublished="Apr 25, 2025"
      >
        Calling all founders, builders, researchers, and AI enthusiasts!
        <br /> <br />
        <a
          href="https://www.linkedin.com/company/lightspeed-venture-partners/"
          target="_blank"
        >
          Lightspeed
        </a>{" "}
        Venture Partners and{" "}
        <a
          href="https://www.linkedin.com/company/aientrepreneurs/"
          target="_blank"
        >
          AI Entrepreneurs at Berkeley
        </a>{" "}
        are holding a panel to discuss the future of RL fine-tuning - with the
        founding team of{" "}
        <a href="https://www.linkedin.com/company/unsloth/" target="_blank">
          Unsloth
        </a>{" "}
        AI and researchers from{" "}
        <a
          href="https://www.linkedin.com/company/thinkingmachinesai/"
          target="_blank"
        >
          Thinking Machines Lab
        </a>
        .<br /> <br />
        Come out to learn about new trends in language research and fine-tuning,
        and how you can apply them in research and entrepreneurship contexts!
        Network with partners at some top VCs, high-growth founders, and
        incredible researchers at moonshot startups over food and drink. The
        event is open to anyone interested in AI and entrepreneurship.
      </LinkedInPost>
      <LinkedInPost
        url="https://www.linkedin.com/posts/jyotiinar_i-just-moderated-partners-konstantine-buhler-activity-7325598986080268289-Qarj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Jyoti Rani"
        headline="eng @ synthpop.ai"
        profilePicture={jyotiRani}
        datePublished="May 6, 2025"
        photo={jyotiRaniStory}
      >
        I just moderated partners{" "}
        <a
          href="https://www.linkedin.com/in/konstantinebuhler/"
          target="_blank"
        >
          Konstantine Buhler
        </a>{" "}
        &{" "}
        <a
          href="https://www.linkedin.com/in/charlie-curnin-002560138/"
          target="_blank"
        >
          Charlie Curnin
        </a>{" "}
        at{" "}
        <a href="https://www.linkedin.com/company/sequoia/" target="_blank">
          Sequoia Capital
        </a>{" "}
        famous for investing $100M+ into{" "}
        <a href="https://www.linkedin.com/company/xbow/" target="_blank">
          XBOW
        </a>
        ,{" "}
        <a href="https://www.linkedin.com/company/harvey-ai/" target="_blank">
          Harvey
        </a>
        , and{" "}
        <a href="https://www.linkedin.com/company/listenlabss/" target="_blank">
          Listen Labs
        </a>
        .<br /> <br />
        <div className="hidden lg:block">
          Fun fact I learned:{" "}
          <a
            href="https://www.linkedin.com/school/uc-berkeley/"
            target="_blank"
          >
            University of California, Berkeley
          </a>{" "}
          started as a merger. The 1868 deal became the flagship for an entire
          state university system. This history trivia points to a critical
          lesson in company building.
        </div>
      </LinkedInPost>
      <LinkedInPost
        url="https://www.linkedin.com/posts/juliusritter_here-we-go-33-cold-dm-hacks-that-got-me-activity-7319091889327034369-xrTH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Julius Ritter"
        headline="Founder. Unlocking Human Potential | Superpower, Basis, McKinsey"
        profilePicture={juliusRitter}
        datePublished="Apr 18, 2025"
        photo={juliusRitterStory}
      >
        Here we go: 33 Cold-DM hacks that got me to fly across the country,
        speak at conferences and meet interesting people per popular request
        from my post from yesterday:
        <br /> <br />
        Full notion page in first comment
        <br /> <br />
        Some of my fave's:
        <br /> <br />
        1. Send them a pitch deck to pitch yourself. Write the copy yourself and
        use{" "}
        <a href="https://www.gamma.ai/" target="_blank">
          gamma.ai
        </a>{" "}
        for visualization
      </LinkedInPost>
      <LinkedInPost
        url="https://www.linkedin.com/posts/seandorje_sanfrancisco-startup-ycombinator-activity-7332458565892263937-F1ox?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Sean Dorje"
        headline="Co-Founder & CEO, Relixir (YC X25)"
        profilePicture={seanDorje}
        datePublished="May 25, 2025"
        photo={seanDorjeStory}
      >
        new office in sf. we're in high demand. shipping 10x faster now. <br />
        <br />
        <a
          href="https://www.linkedin.com/search/results/all/?keywords=%23sanfrancisco&origin=HASH_TAG_FROM_FEED"
          target="_blank"
        >
          #sanfrancisco
        </a>{" "}
        <a
          href="https://www.linkedin.com/search/results/all/?keywords=%23startup&origin=HASH_TAG_FROM_FEED"
          target="_blank"
        >
          #startup
        </a>{" "}
        <a
          href="https://www.linkedin.com/search/results/all/?keywords=%23ycombinator&origin=HASH_TAG_FROM_FEED"
          target="_blank"
        >
          #ycombinator
        </a>
      </LinkedInPost>
      <LinkedInPost
        url="https://www.linkedin.com/posts/jyotiinar_youre-a-product-of-your-environment-i-activity-7290930546879148033-_2Ll?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Jyoti Rani"
        headline="eng @ synthpop.ai | Berkeley MET"
        profilePicture={jyotiRani}
        datePublished="Jan 30, 2025"
        className="lg:hidden xl:block"
      >
        You're a product of your environment. <br /> <br />
        I’m sure you’ve heard the cliche. But it’s hard to actually find
        like-minded people. That’s exactly why we started AI Entrepreneurs at
        Berkeley <br /> <br />
        Here’s what Berkeley’s premier AI incubator is about: <br /> <br />
        - Traction over intention. - Creating space for founders to thrive. -
        Meeting phenomenal operators & building solutions that matter <br />{" "}
        <br />
        Here’s how we've been doing that: <br /> <br />
        - $100M+ in valuation. $20M+ raised. 2 acquisitions. All in just 24
        months. - 40+ weekly hacking sessions. Retreats. Dinners. Resources
        galore – from incorporation support to cloud compute. <br /> <br />- A
        builder’s run club. 3,000+ founders, investors, builders, at our events.
        Come sprint with AIEB's Builders Run group. Or scale with us in AIEB's
        incubator. Or help build the most incredible AI founder community on the
        operational team. Or, of course, all of the above.
      </LinkedInPost>
      <LinkedInPost
        url="https://www.linkedin.com/posts/ethan-hou10_im-excited-to-announce-that-martin-yc-s23-activity-7292225542970347520--8tM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Ethan Hou"
        headline="Cofounder, CTO @ Martin (YC S23)"
        profilePicture={ethanHou}
        datePublished="Feb 3, 2025"
        photo={ethanHouStory2}
      >
        Excited to announce Martin’s $2M seed round to build JARVIS in real
        life! We’ve been moving at light speed for the last 6 months and excited
        to keep accelerating!
        <div className="hidden lg:block">
          Super grateful to{" "}
          <a
            href="https://www.linkedin.com/in/dawson-chen-martin/"
            target="_blank"
          >
            Dawson Chen
          </a>{" "}
          for being an incredible cofounder and friend. He’s an ultimate
          competitor and I wouldn’t rather be building this with anyone else!{" "}
          <br />
          Huge thanks also to our investors and early users for all of the great
          feedback and support.
          <br />
          Check us out at{" "}
          <a href="https://trymartin.com" target="_blank">
            https://trymartin.com
          </a>
        </div>
      </LinkedInPost>
      <div className="hidden lg:block xl:hidden" />
      <div className="hidden lg:block xl:hidden" />
      <div className="hidden lg:block xl:hidden" />
      <LinkedInPost
        url="https://www.linkedin.com/posts/jyotiinar_youre-a-product-of-your-environment-i-activity-7290930546879148033-_2Ll?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmiNnQBsoEwlsCg2JLFXMhE7XPYPQwIknU"
        name="Jyoti Rani"
        headline="eng @ synthpop.ai | Berkeley MET"
        profilePicture={jyotiRani}
        datePublished="Jan 30, 2025"
        className="hidden lg:block xl:hidden"
      >
        You're a product of your environment. <br /> <br />
        I’m sure you’ve heard the cliche. But it’s hard to actually find
        like-minded people. That’s exactly why we started AI Entrepreneurs at
        Berkeley <br /> <br />
        Here’s what Berkeley’s premier AI incubator is about: <br /> <br />
        - Traction over intention. - Creating space for founders to thrive. -
        Meeting phenomenal operators & building solutions that matter <br />{" "}
        <br />
        Here’s how we've been doing that: <br /> <br />- $100M+ in valuation.
        $20M+ raised. 2 acquisitions. All in just 24 months. - 40+ weekly
        hacking sessions. Retreats. Dinners. Resources galore – from
        incorporation support to cloud compute.
      </LinkedInPost>
    </Masonry>
    <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 mb-24 h-[300px] bg-gradient-to-t to-transparent"></div>
  </div>
);
