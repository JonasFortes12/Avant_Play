import express from 'express';
import routes from './routers/index.js';


const app = express();
const PORT = process.env.PORT || 3000;

// Configuration to analyse JSON requisitions body
app.use(express.json())


app.use(routes);

app.listen(PORT, () => {
    console.log(`Server up on ${PORT} port`)
})
