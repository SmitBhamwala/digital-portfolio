import { links } from "@/lib/data";
import { SetStateAction } from "react";

export type SectionNameType = (typeof links)[number]["name"];

export type SkillCardType = {
	title: string;
	skills: string[];
};

export type ExperienceElementProps = {
	theme: string;
	item: {
		title: string;
		location: string;
		description: String[];
		icon: React.ReactNode;
		date: string;
	};
};

export type CertificationsElementProps = {
	theme?: string;
	course: {
		id: number;
		title: string;
		tutor: string;
		duration: string;
		description: String[];
		certIMG: string;
		certificateURL: string;
		icon: React.ReactNode;
		date: string;
	};
};

export type CertificationsModalProps = {
	course: {
		id: number;
		title: string;
		tutor: string;
		duration: string;
		description: String[];
		certIMG: string;
		certificateURL: string;
		icon: React.ReactNode;
		date: string;
	};
	// setModalOpen: SetStateAction<Boolean>;
	setModalOpen: any;
};
