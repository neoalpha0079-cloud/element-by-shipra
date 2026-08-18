import { defineField, defineType } from "sanity";

export const consultation = defineType({
  name: "consultation",
  title: "Consultation Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Book a Consultation",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "serviceOptions",
      title: "Service Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "budgetRanges",
      title: "Budget Ranges",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Consultation Section" };
    },
  },
});
