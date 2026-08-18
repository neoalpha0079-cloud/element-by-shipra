import { defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "About Shipra",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "text",
      rows: 2,
      initialValue: "The Vision Behind Every Beautiful Space.",
    }),
    defineField({
      name: "founderBio",
      title: "Founder Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "founderName",
      title: "Founder Name",
      type: "string",
      initialValue: "Shipra",
    }),
    defineField({
      name: "founderTitle",
      title: "Founder Title",
      type: "string",
      initialValue: "Founder & Lead Designer",
    }),
    defineField({
      name: "founderImage",
      title: "Founder Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "mobileTitle",
              title: "Mobile Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Section" };
    },
  },
});
