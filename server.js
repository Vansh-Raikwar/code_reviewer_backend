const app = require("./src/app.js");
const aiRoutes = require("./src/routes/ai.routes.js");


app.listen(8080,()=>{
    console.log(`Server is running on port 8080 `);
})

app.use("/ai",aiRoutes);
