// test/integration/driverController.test.js

(async () => {
    // Use dynamic import for all ESM modules
    const chai = (await import('chai')).default;
    const chaiHttp = (await import('chai-http')).default;
    const sinon = (await import('sinon')).default;
    const fs = (await import('fs')).default;
    const { default: app } = await import('../../src/app.js');

    chai.use(chaiHttp);
    const expect = chai.expect;

    describe('DriveController', () => {
        let uploadFileStub;

        before(() => {
            // Example of using Sinon for stubbing a method
            uploadFileStub = sinon.stub().resolves('fake-file-id');
        });

        after(() => {
            // Restore the original function
            uploadFileStub.restore();
        });

        it('deve fazer o upload de um arquivo com sucesso', (done) => {
            chai.request(app)
                .post('/upload')
                .set('Authorization', 'Bearer valid_token') // Simulating a valid token
                .field('equipe', 'EquipeX')
                .field('missao', 1)
                .attach('file', fs.readFileSync('test/files/sample.mp4'), 'sample.mp4') // Attach a sample file
                .end((err, res) => {
                    if (err) done(err);

                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message', 'Upload realizado com sucesso!');
                    expect(res.body).to.have.property('fileId', 'fake-file-id');
                    done();
                });
        });
    });
})();
