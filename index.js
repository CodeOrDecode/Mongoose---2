const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    author: { type: String, require: true },
    title: String,
    createdat: Date,
    content: String,
    tags: [String]
})

const Blogmodel = mongoose.model("blog", BlogSchema);

async function main() {
    const connection = await mongoose.connect('mongodb://localhost:27017/website');
    console.log("connected");
    const datablog = new Blogmodel({
        author: "UUUUU",
        title: "jjjjj",
        createdat: new Date(),
        content: "lets see",
        tags: ["check", "connect"]
    })
    await datablog.save();

    connection.disconnect();
}


main()