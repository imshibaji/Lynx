const supertest = require("supertest");
const app = require('../app');

test('Application Init', async ()=>{
    const response = await supertest(app).get('/');
    expect(response.statusCode).toBe(200);
});

test('Product List Test', async ()=>{
    const response = await supertest(app).get('/products');
    expect(response.statusCode).toBe(200);
});

test('Single Product Test', async ()=>{
    const response = await supertest(app).get('/products/5');
    expect(response.statusCode).toBe(200);
});