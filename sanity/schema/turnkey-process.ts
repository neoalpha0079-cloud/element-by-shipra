import { defineField, defineType } from "sanity";

export const turnkeyProcess = defineType({
  name: "turnkeyProcess",
  title: "Turnkey Process Section",
  type: "document",
  fields: [
    defineField({
      name: "steps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "number" },
          },
        },
      ],
    }),
    defineField({
      name: "guarantees",
      title: "Guarantee Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Turnkey Process Section" };
    },
  },
});
