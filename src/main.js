import express from 'express';


const app = express()

// Midlware
app.use(express.json());






app.listen(4000, () => {
    console.log(`Exemplo sendo executada na porta ${4000}`)
})