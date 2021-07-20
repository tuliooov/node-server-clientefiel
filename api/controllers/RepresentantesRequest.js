const connection = require('../database/connection');

module.exports = {

  async indexRepresentante(request, response){
    const id = request.query.id;
    await connection.get({
      TableName: "representantes",
      Key:{
        "id": id,
      }
    }).promise().then(function(data){
      if(!data.Item){
        return response.status(200).json({error: 'Representante não existe.'});
      }else{
        return response.status(200).json(data.Item);
      }
      
    }).catch(function(err){
      console.log('err', err.message)
      return response.status(400).json({ error: err.message });
    })
  },

  async indexsRepresentantes(request, response){
    // /v1/getAllContacts
    const idRepresentante = request.query.idRepresentante;
    let params = {
      TableName: "representantes",
    }

    await connection.scan(params).promise().then(function(data){
      return response.status(200).json(data.Items);
    }).catch(function(err){
      console.log('err', err.message)
      return response.status(400).json({ error: err.message });
    })
  },

  async sincronizarRepresentante(params, response){
    await connection.update(params).promise().then(function(data){
      console.log('data', data)
      return response.status(200).json(data);
    }).catch(function(err){
      console.log('err', err.message)
      return response.status(400).json({ error: err.message });
    })
  }
}