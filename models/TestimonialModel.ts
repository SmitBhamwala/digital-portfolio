import { TestimonialType } from "@/lib/types";
import mongoose, { Schema, model } from "mongoose";

const TestimonialSchema = new Schema<TestimonialType>(
	{
		name: {
			type: String,
			required: [true, "Name is required"]
		},
		email: {
			type: String,
			unique: true,
			required: [true, "Email is required"],
			match: [
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
				"Email is invalid"
			]
		},
		image: {
			type: String,
			required: [true, "Profile picture is required"]
		},
		rating: {
			type: Number,
			required: [true, "Rating is required"]
		},
		testimonial: {
			type: String,
			required: [true, "Testimonial is required"]
		}
	},
	{
		timestamps: true
	}
);

const TestimonialModel =
	mongoose.models?.testimonial ||
	model<TestimonialType>("testimonial", TestimonialSchema);

export default TestimonialModel;
