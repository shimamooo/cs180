import Proj0 from "~/markdown/proj0.mdx";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Main content container */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Back navigation */}
        <div className="mb-12">
          <Link
            href="/"
            className="group inline-flex items-center space-x-2 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            <svg
              className="h-4 w-4 transform transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to home</span>
          </Link>
        </div>

        {/* Header section */}
        <div className="mb-16">
          <h1 className="mb-4 text-4xl font-light text-white">Project 0</h1>
          <div className="h-px w-16 bg-neutral-800" />
        </div>

        {/* Blog content */}
        <div className="prose prose-invert prose-lg prose-headings:text-white prose-headings:font-light prose-h1:text-3xl prose-h1:font-light prose-h1:mb-8 prose-h1:mt-12 prose-h2:text-2xl prose-h2:font-light prose-h2:mb-6 prose-h2:mt-12 prose-h3:text-xl prose-h3:font-light prose-h3:mb-4 prose-h3:mt-8 prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:font-light prose-strong:text-white prose-strong:font-normal prose-em:text-neutral-200 prose-em:italic prose-em:font-light prose-ul:space-y-3 prose-ul:mb-8 prose-li:text-neutral-300 prose-li:marker:text-neutral-600 prose-li:font-light prose-blockquote:border-l prose-blockquote:border-neutral-800 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-400 prose-blockquote:font-light prose-code:bg-neutral-900 prose-code:text-neutral-200 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:font-light prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800 prose-pre:rounded-lg prose-pre:p-6 prose-pre:font-light prose-a:text-white prose-a:no-underline prose-a:border-b prose-a:border-neutral-700 hover:prose-a:border-white prose-a:font-light prose-hr:border-neutral-800 prose-hr:my-12 prose-img:max-w-md prose-img:mx-auto prose-img:rounded-lg prose-img:shadow-lg max-w-none transition-colors">
          <Proj0 />
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-neutral-800 pt-8">
          <div className="text-center">
            <p className="text-sm font-light text-neutral-500">^^</p>
          </div>
        </div>
      </div>
    </div>
  );
}
