import fs from "fs"

export default async function route (fastify, opts) {
  fastify.get(`${process.env.API_PATH_NAME}`, async (req, res) => {
    let json = fs.readFileSync(process.env.FILE_PATH, "utf8");
    return res.send(JSON.parse(json));
	});
}