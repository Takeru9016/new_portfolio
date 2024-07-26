import { type SchemaTypeDefinition } from "sanity";

import { experience } from "./experience";
import { projects } from "./projects";
import { resume } from "./resume";
import { services } from "./services";
import { skills } from "./skills";
import { about } from "./about";
import { education } from "./education";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, projects, resume, services, skills, about, education],
};
