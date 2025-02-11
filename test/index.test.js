const request = require('supertest');
const app = require('../index');

describe('API Tests',()=>{
    let server;

    beforeAll((done)=>{
        server = app.listen(0,()=>{ done();});
    });

    afterAll((done)=>{
        server.close(done);
    })
    
    it('GET / should return "Hello, DevOps"',async () =>{
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, DevOps!');
    });

    it('GET /api/add should return correct sum',async () => {
        const res = await request(app).get('/api/add?a=1&b=2');
        expect(res.statusCode).toBe(200);
        expect(res.body.sum).toBe(3);
    })

    it('GET /api/greet should return a greeting', async () => {
        const res = await request(app).get('/api/greet?name=Hrishikesh');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, Hrishikesh!');

    });

    it('GET /new-route', async ()=>{
        const res = await request(app).get('/new-route');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('This is a new route!');
    });

    it('GET /deploy', async ()=>{
        const res = await request(app).get('/deploy');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('EC2 Deployment Working Successfully');
    });

    it('GET /caching', async ()=>{
        const res = await request(app).get('/caching');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Caching enabled');
    });

    it('GET /testing-speed', async ()=>{
        const res = await request(app).get('/testing-speed');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('See the time taken for the pipeline');
    });
})