const app = require("../index.js");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 3131", async () => {
    let res = await request.get("/");

    expect(res.statusCode).toEqual(200);
});

test("Deve retornar um usuário com name igual a Maurício", () => {
    return request.get("/user/1").then(res => expect(res.body.name).toEqual("Maurício"));
});