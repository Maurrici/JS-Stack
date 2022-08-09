let app = require("../src/index.js");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 3030", () => {
    return request.get("/").then(res => {
        expect(res.statusCode).toEqual(200);
    }).catch(error => {
        fail(error);
    });
});