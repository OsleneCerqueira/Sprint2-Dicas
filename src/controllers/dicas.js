import DicaModel from '../models/dicasModels.js'
import bdDicas from '../infra/bd.js';


export const dicas = (app) => {
    app.get('/tips', (req, res) => {
        const dicaAleatoria = bdDicas[Math.floor(Math.random() * bdDicas.length)]
        res.json(dicaAleatoria);
    });

    app.post('/create', (req, res) => {
        const dica = req.body;

        const dadosDica= new DicaModel(...Object.values(dica));
        bdDicas.push(dadosDica);
        res.send(bdDicas);
    });
};