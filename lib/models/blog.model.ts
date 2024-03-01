import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    heading: {type: String, required: true},
    blogbody: {type: String, required: true},
    date: {
		type: Date,
		default: Date.now,
		required: true,
	},
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;