import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "SPACES THAT REFLECT YOU",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "text",
      rows: 3,
      initialValue: "We don't just design spaces, we craft experiences.",
    }),
    defineField({
      name: "scriptText",
      title: "Script/Cursive Text",
      type: "string",
      initialValue: "we craft experiences.",
      description: "The cursive/italic part of the headline",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "string",
      initialValue: "Watch Studio Showreel",
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Hero Section" };
    },
  },
});
