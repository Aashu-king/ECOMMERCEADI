import express from 'express';
import cors from 'cors';
import router from './routes/allapi.route';
import sequelize from './database/models';


const app = express()


app.use(cors());
app.use(express.json())
app.use('admin/v1',router)

sequelize.authenticate().then(async () => {
    await sequelize.sync()
    app.listen(3000,() => {
        console.log("app is running on 3000",__dirname + '/models');
    })
}).catch((error) => {
    console.log("🚀 ~ sequelize.authenticate ~ error:", error)
})


