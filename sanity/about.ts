import { defineType, defineField } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "info",
      title: "Personal Info",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "fieldName", title: "Field Name", type: "string", validation: (Rule) => Rule.required() },
            { name: "fieldValue", title: "Field Value", type: "string", validation: (Rule) => Rule.required() },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});