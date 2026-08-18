import { defineField, defineType } from "sanity";

export const testimonialStats = defineType({
  name: "testimonialStats",
  title: "Testimonials Stats",
  type: "document",
  fields: [
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
  ],
  preview: {
    prepare() {
      return { title: "Testimonials Stats" };
    },
  },
});
