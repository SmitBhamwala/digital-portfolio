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

export type ExperienceModalProps = {
	item: {
		title: string;
		location: string;
		description: String[];
		icon: React.ReactNode;
		date: string;
	};
	// setExperienceModalOpen: SetStateAction<Boolean>;
	setExperienceModalOpen: any;
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

export type CertificationModalProps = {
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
	// setCertificationModalOpen: SetStateAction<Boolean>;
	setCertificationModalOpen: any;
};

export type TestimonialCardProps = {
	name: string;
	linkedInProfilePicSrc: string;
	testimonial: string;
	rating: number;
}
