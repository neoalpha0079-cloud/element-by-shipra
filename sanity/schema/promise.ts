import { defineField, defineType } from "sanity";

export const promise = defineType({
  name: "promise",
  title: "Promise",
  type: "document",
  fields: [
    defineField({
      name: "number",
      title: "Number",
      type: "string",
      description: "Display number like 01, 02, etc.",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "mobileTitle",
      title: "Mobile Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "stat",
      title: "Stat Value",
      type: "string",
      description: "e.g. 100%, 99.99%, 10+",
    }),
    defineField({
      name: "statLabel",
      title: "Stat Label",
      type: "string",
      description: "e.g. single team, design to reality",
    }),
  ],
  orderings: [
    {
      title: "Number",
      name: "numberAsc",
      by: [{ field: "number", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "number" },
  },
});
