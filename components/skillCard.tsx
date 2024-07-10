import { SkillCardType } from "@/lib/types";
import { HiBadgeCheck } from "react-icons/hi";

import "@/components/skills.css";

export default function SkillCard({ title, skills }: SkillCardType) {
	return (
		<div className="borderBlack rounded-xl p-4 bg-white dark:bg-white/10">
			<h3 className="text-center text-xl mb-8 font-medium text-gray-800 dark:text-white/80">
				{title}
			</h3>
			<div className="skills__group">
				{skills.map((skill, index) => (
					<div
						key={index}
						className="flex justify-start items-center gap-2 w-[100%]">
						<div className="text-[15px] text-gray-800 dark:text-white/80">
							<HiBadgeCheck />
						</div>
						<h4
							className="font-normal text-[1rem] lg:text-[0.87rem] text-gray-800 dark:text-white/80"
							key={index}>
							{skill}
						</h4>
					</div>
				))}
			</div>
		</div>
	);
}
