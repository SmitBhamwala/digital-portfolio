import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

export type SkillCardType = {
	title: string;
	skills: string[];
};
