import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import { NextResponse } from "next/server";
import rehypeStarryNight from "rehype-starry-night";

// Fix for Next.js esbuild ENOENT issue
if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "esbuild.exe",
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild",
  );
}

export async function GET() {
  try {
    // Read the MDX file
    const mdxPath = path.join(process.cwd(), "src", "markdown", "proj2.mdx");
    const mdxSource = fs.readFileSync(mdxPath, "utf8");

    // Bundle the MDX
    const result = await bundleMDX({
      source: mdxSource,
      mdxOptions(options) {
        // Add syntax highlighting plugin
        options.rehypePlugins = [rehypeStarryNight];
        return options;
      },
      esbuildOptions(options) {
        // Configure esbuild options
        options.target = ["es2020", "chrome58", "firefox57", "safari11"];
        return options;
      },
    });

    return NextResponse.json({
      code: result.code,
      frontmatter: result.frontmatter,
    });
  } catch (error) {
    console.error("Error bundling MDX:", error);
    return NextResponse.json(
      { error: "Failed to bundle MDX" },
      { status: 500 },
    );
  }
}
