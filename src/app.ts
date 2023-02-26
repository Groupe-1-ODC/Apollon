import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hellow world");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
})