import { links } from "@/lib/data";

export type SectionNameType = (typeof links)[number]["name"];

export type SkillCardType = {
	title: string;
	skills: string[];
};
