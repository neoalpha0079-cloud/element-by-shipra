import { defineField, defineType } from "sanity";

export const transformation = defineType({
  name: "transformation",
  title: "Transformation Section",
  type: "document",
  fields: [
    defineField({
      name: "beforeImage",
      title: "Before Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "afterImage",
      title: "After Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "beforeLabel",
      title: "Before Label",
      type: "string",
      initialValue: "Before",
    }),
    defineField({
      name: "afterLabel",
      title: "After Label",
      type: "string",
      initialValue: "After",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Transformation Section" };
    },
  },
});
