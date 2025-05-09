import { links } from "@/lib/data";

export type SectionNameType = (typeof links)[number]["name"];

export type SkillCardType = {
  title: string;
  skills: {
    name: string;
    icon: string;
  }[];
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

export interface TestimonialType {
  _id?: string;
  LinkedInId: string;
  name: string;
  email: string;
  image: string;
  rating: number;
  review: string;
}
