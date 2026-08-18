import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Site Name",
      type: "string",
      initialValue: "SHIPRA DESIGNS",
    }),
    defineField({
      name: "shortName",
      title: "Short Name",
      type: "string",
      initialValue: "Shipra",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Interior Design Studio",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "heroStatement",
      title: "Hero Statement",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroSupport",
      title: "Hero Support Text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "brandStatement",
      title: "Brand Statement",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "workingHours",
      title: "Working Hours",
      type: "string",
      initialValue: "Mon – Sat: 10:00 AM – 7:00 PM",
    }),
    defineField({
      name: "trustFootnote",
      title: "Trust Footnote",
      type: "string",
      initialValue: "Complimentary 45-minute spatial consultation & estimate.",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "facebook", title: "Facebook", type: "url" }),
        defineField({ name: "pinterest", title: "Pinterest", type: "url" }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
