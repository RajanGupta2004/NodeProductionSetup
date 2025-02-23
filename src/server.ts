import app from "./app";
import config from "./config/config";


const server = app.listen(config.PORT);

     ;(() => {
        try {
            // database connection
            console.info("Application stated", {
                meta: {
                    PORT: config.PORT,
                    SERVER_URL: config.SERVER_URL,
                    DBURL: config.DB_URL
                }
            })

        } catch (error) {
            console.error("APPLICATION ERROR", { meta: { error } })
            server.close((error) => {
                if (error) {
                    console.error("APPICATION ERROR", { meta: { error } })
                }
            })

            process.exit(1)

        }
    })()