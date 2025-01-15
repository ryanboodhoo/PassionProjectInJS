module.exports = (req, res) => {

    if (req.url === "/api/library") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.library));
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ title : "error" , message : "Not Found" }));
    }
};
