const Notes = require('./datamodel') 

const getallnotes = () =>
{
    return new Promise((resolve,reject) =>
    {
        Notes.find({}, function(err, data)
        {
            if(err)
            {
               reject(err)
            }
            else
            {
                 resolve(data);
            }
        })
    })
} 

const addnote = (obj) => 
{
    return new Promise((resolve, reject)=>
    {
        let note = new Notes({
            title : obj.title,  
            body : obj.body 
        }) 
        
        note.save(function(err)
        {
          if(err)
          {
              reject(err)
          } 
          else
          {
              resolve("Created")
          }
        })
    })
} 

const updatenote = (obj, id)=>
{
    return new Promise((resolve,reject) =>
    {

        Notes.findByIdAndUpdate(id,{
            title : obj.title ,
            body : obj.body
        }, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Updated!');
            }
        });
        
      
    })
} 

const deleteMovie = (id) =>
{
    return new Promise((resolve,reject) =>
    {

        Notes.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Deleted!');
            }
        });
    })
}


module.exports = {getallnotes,addnote, updatenote,deleteMovie}