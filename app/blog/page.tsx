import type { Metadata } from "next";
import Image from "next/image";

import { sanityFetch } from "@/sanity/lib";
import { urlFor } from "@/sanity/lib/image";
import { blogPostsQuery } from "@/sanity/lib/queries";
import { SectionHeading } from "@/shared/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on design, materials and living beautifully from the Shipra Designs studio.",
};

interface SanityBlogPost {
  title: string;
  category: string;
  readTime: string;
  image?: unknown;
}

const fallbackPosts = [
  {
    title: "Why a mood board matters more than a floor plan",
    category: "Process",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Five materials that age gracefully in Indian homes",
    category: "Materials",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Designing for vastu without compromising on modern comfort",
    category: "Vastu",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default async function BlogPage() {
  const sanityPosts = await sanityFetch<Array<SanityBlogPost>>(blogPostsQuery);

  const posts = sanityPosts?.length
    ? sanityPosts.map((post) => ({
        title: post.title,
        category: post.category,
        readTime: post.readTime,
        image: post.image ? urlFor(post.image).width(1200).quality(80).url() : fallbackPosts[0].image,
      }))
    : fallbackPosts;

  return (
    <main className="site-container pt-36 pb-24 md:pt-44 md:pb-32">
      <SectionHeading
        eyebrow="The Journal"
        title="Notes on design & living"
        description="Essays from the studio on process, material and the quiet art of making a house a home."
      />

      <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <article key={post.title} className="group flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="text-bronze flex items-center justify-between pt-4 text-[0.62rem] font-medium tracking-[0.24em] uppercase">
              <span>{post.category}</span>
              <span className="text-taupe">{post.readTime}</span>
            </div>
            <h2 className="text-foreground mt-3 font-serif text-2xl leading-snug">
              {String(index + 1).padStart(2, "0")}. {post.title}
            </h2>
          </article>
        ))}
      </div>

      <p className="border-border text-taupe mt-16 border-t pt-8 text-center text-sm font-light">
        Full essays are in progress — the studio is busy shaping spaces. Follow
        us on Instagram for a glimpse in the meantime.
      </p>
    </main>
  );
}
