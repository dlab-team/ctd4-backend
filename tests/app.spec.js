const request = require('supertest');

const app = require('..');

describe('Demo test', () => {
  it('should respond to ping', (done) => {
    request(app)
      .get('/ping')
      .end((err, res) => {
        expect(err).toBeNull();
        expect(res.status).toBe(200);
        expect(res.text).toBe('pong');
        done();
      });
  });

  it('should respond to index route', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(err).toBeNull();
        expect(res.status).toBe(200);
        expect(res.text).toEqual(expect.stringContaining('NodeJS + ExpressJS boilerplate'));
        done();
      });
  });
});

