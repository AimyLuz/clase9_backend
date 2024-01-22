import express from 'express';


const router = express.Router();

const users =[
    {
        name: 'Ayelén',
        last_name: 'Anca',
        edad: 30,
        correo: 'ayelen.anca@gmail.com',
        telefono:1550370964,
        role:'admin'

    },
    {
        name: 'Matias',
        last_name: 'Mejuto',
        edad: 28,
        correo: 'matias.mejuto.96@gmail.com',
        telefono:1130679984,
        role:'admin'
    },
    {
        name: 'Oliver',
        last_name: 'Queen',
        edad: 29,
        correo: 'oliver.queen@gmail.com',
        telefono:1112584826,
        role:'user'
    },
    {
        name: 'John',
        last_name: 'Digle',
        edad: 32,
        correo: 'john@gmail.com',
        telefono:1155558852,
        role:'user'
    },
    {
        name: 'Felicity',
        last_name: 'Smoak',
        edad: 25,
        correo: 'felicity@gmail.com',
        telefono:1154865158,
        role:'user'
    }
];

const food = [
    { name: 'homburguesa', price: 4000},
    { name: 'pizza', price: 5000},
    { name: 'papas', price: 3600},
    { name: 'gaseosa', price: 1500},
    { name: 'torta', price: 2500}
]

router.get('/', (req, res)=> {
    const azar = Math.floor(Math.random() * users.length);


    res.render('index', {
        user: users[azar],
        style: 'index.css',
        isAdmin: users[azar].role === 'admin',
food }
    );
});
router.get('/register',(req, res)=> {
    console.log(users)
    res.render('register')
});
router.post('/user', (req,res)=>{
    const {name, email, pass} = req.body;
    console.log({name, email, pass});
    users.push({name, email, pass});
    res.render('register', {registroExitoso: true})
});

export default router;