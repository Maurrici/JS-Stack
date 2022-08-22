let express = require("express");
let MercadoPago = require("mercadopago");
let {v4: uuidv4} = require("uuid");

// Server Config
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

MercadoPago.configure({
    sandbox: true,
    access_token: "TEST-164734493507231-080911-a9d9c25a2b2fb14bd9abb33484d7cbfd-293812077"
});

// Routes
app.get("/", (req, res) => {
    res.send("Mercado Pago app");
});

app.get("/pay", async (req, res) => {
    let id = uuidv4();
    let data = {
        items: [
            item = {
                id,
                title: "Video game com 2 jogos",
                quantity: 1,
                currency_id: 'BRL',
                unit_price: parseFloat(10)
            }
        ],
        payer:{
            email: "mauriciomoura838@gmail.com"
        },
        external_reference: id
    }

    try {
        let payment = await MercadoPago.preferences.create(data);
        return res.redirect(payment.body.init_point);
    } catch (error) {
        console.log(error);
    }
});

app.post("/notification", (req, res) => {
    let id = req.query.id;

    setTimeout(() => {
        let filter = {
            "order.id": id
        }

        MercadoPago.payment.search({qs: filter})
        .then(data => {
            let payment = data.body.results[0];
            if(payment != undefined){
                console.log(payment.external_reference);
                console.log(payment.status);
            }else{
                console.log("Pagamento não existe");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }, 20000);

    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Server is running");
});