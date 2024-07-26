import { defineType, defineField } from "sanity";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Degree Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specialization",
      title: "Specialization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
