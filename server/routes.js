const api = require('./api');
const bp = require('body-parser');

module.exports = (app)=>{
    app.use(bp.json()); 
 
    app.get('/api/pets', api.allPets)
    app.get('/api/pets/:petid', api.showPet)
    app.post('/api/pets', api.newPet)
    app.delete('/api/pets/:petid', api.removePet)
    app.put('/api/pets/:petid', api.updatePet)

    app.patch('/api/quotes/:petid',api.vote)


    // app.post('/api/quotes', api.newQuote)
    // app.delete('/api/quotes/:quoteid', api.deleteQuote)
    // app.patch('/api/quotes/:quoteid', api.incrementQuote)
    // app.put('/api/pets/ratings/:petid', api.newRating)
    
    
    return app;
}