const BgRoute = "\x1b[45m\x1b[1m%s\x1b[0m";
const FgYellow = "\x1b[33m\x1b[1m";
const BgBlue = "\x1b[44m\x1b[1m\x1b[37m";
const star =()=>console.log(FgYellow,'*'.repeat(50));
const line =(obj)=>console.log(BgBlue,'-'.repeat(50),{obj});
const loc = (str) => {console.log(BgRoute,"hit "+ str); star();}

//  REMEMBER TO TURN ON {context: 'query'} FOR UPDATES USING NPM UNIQUE VALIDATOR
const { Pet } = require('./models')



module.exports = {
    allPets: (req,res)   => Pet.find({}).sort( {type:1} )
            .then(  result  => loc('all get success')     || res.json( result ))
            .catch( error   => loc('all get error',error) || res.json( error  ))
    ,
    newPet: (req,res)    => Pet.create(req.body)
            .then(  result  => loc('create success')     || res.json( result ))
            .catch( error   => loc('create error',error) || res.json( error  ))
    ,
    removePet: (req,res) => Pet.findByIdAndRemove(req.params.petid)
            .then(  result  => loc('remove success')      || res.json( result ))
            .catch( error   => loc('remove error', error) || res.json( error  ))
    ,
    showPet: (req,res)   => Pet.findById(req.params.petid)
            .then(  result  => loc('show success')      || res.json( result ))
            .catch( error   => loc('show error', error) || res.json( error ))
    ,  
    updatePet: (req,res) => Pet.findByIdAndUpdate(req.params.petid, req.body, { new:true, runValidators:true, context: 'query' } )
            .then(  result  => loc('update success')       || res.json( result ))
            .catch( error   => loc('update error', error)  || res.json( error ))
    ,
    
    
    // newQuote: (req,res)    => Pet.findByIdAndUpdate(req.body.petid, {$push:{quotes:req.body}}, { new:true, runValidators:true, context: 'query' } )
    //     .then(   result    => loc('create quote success')      || res.json( result ))
    //     .catch(   error    => loc('create quote error', error) || res.json( error ))
    // ,   
    // deleteQuote: (req,res) => Pet.findOneAndUpdate( {'quotes._id':req.params.quoteid} , { $pull:{quotes:{_id:req.params.quoteid} }}, {new:true, runValidators:true})
    //     .then(   result    => loc('delete quote success')      || res.json( result ))
    //     .catch(   error    => loc('delete quote error', error) || res.json( error ))
    // ,
    vote: (req,res)   => Pet.findByIdAndUpdate( req.params.petid, { $inc:{"votes":req.body.votes}}, {new:true, runValidators:true})
        .then(   result         => loc('increment quote success')      || res.json( result ))
        .catch(   error         => loc('increment quote error', error) || res.json( error ))
    ,


    
    // newRating: (req,res)    => Pet.findByIdAndUpdate(req.params.petid, { $push: { ratings: req.body } }, { new:true, runValidators:true } )
    //         .then(  result  => loc('update success')       || res.json( result ))
    //         .catch( error   => loc('update error', error)  || res.json( error ))
}

