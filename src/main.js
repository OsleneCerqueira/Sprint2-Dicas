import express from 'express';


const app = express()

// Midlware
app.use(express.json());



import { dicas } from './controllers/dicas.js'


dicas(app);


app.listen(4000, () => {
    console.log(`Exemplo sendo executada na porta ${4000}`)
})