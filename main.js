const express = require('express')
 const noteRouter = require('./routers/notesRouter')
 const cors = require('cors')  
 
 const app = express()
 


 app.use(cors());

 app.use(express.json());
 
 require('./configs/database');
 
 app.use('/api/notes', noteRouter);
 
 app.listen(8000);
 