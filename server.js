const app = require("./app");
const config = require("./app/config").default;

const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Server is running on post ${PORT}.`);
});

