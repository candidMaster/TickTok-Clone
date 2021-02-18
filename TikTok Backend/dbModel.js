import mongoose from 'mongoose';

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: Number,
    messages: Number,
    description: String,
    shares: Number,
});
// Collection inside the database
export default mongoose.model('tiktokVideos',tiktokSchema);