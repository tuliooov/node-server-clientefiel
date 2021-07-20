const connection = require('../database/connection');

module.exports = {
  async indexContactUpdate(id){
    await connection.get({
      TableName: "contatos",
      Key:{
        "id": id,
      }
    }).promise().then(function(data){
      if(!data.Item){
        console.log('contato nao existe')
      }else{
        console.log(data.Item)
      }
    })
  },
  async indexContact(request, response){
    const id = request.query.id;
    await connection.get({
      TableName: "contatos",
      Key:{
        "id": id,
      }
    }).promise().then(function(data){
      if(!data.Item){
        return response.status(200).json({error: 'Contato não existe.'});
      }else{
        return response.status(200).json(data.Item);
      }
      
    }).catch(function(err){
      console.log('err', err.message)
      return response.status(400).json({ error: err.message });
    })
  },

  async searchIndexContact(id){
    return await connection.get({
      TableName: "contatos",
      Key:{
        "id": id,
      }
    }).promise().then(function(data){
      return data
    }).catch(function(err){
      return { error: err.message }
    })
  },



  async indexsContacts(request, response){
    // /v1/getAllContacts
    const idRepresentante = request.query.idRepresentante;
    let params = {
      TableName: "contatos",
    }

    if(idRepresentante){
      // /v1/getAllContacts?idRepresentante=37988031061
      params.ExpressionAttributeValues = {
        ':idRepresentante' : idRepresentante
      }
      params.FilterExpression = 'contains (idRepresentante, :idRepresentante)'
    }

    await connection.scan(params).promise().then(function(data){
      return response.status(200).json(data.Items);
    }).catch(function(err){
      console.log('err', err.message)
      return response.status(400).json({ error: err.message });
    })
  },

  async createContact(params, response){
    await connection.put(params).promise().then(function(data){
      return response.status(200).json(data);
    }).catch(function(err){
      console.log('err', err.message)
      return response.status(400).json({ error: err.message });
    })
  },

  async updateContact(params, response){
    await connection.update(params).promise().then(function(data){
      console.log('data', data)
      return response.status(200).json(data);
    }).catch(function(err){
      console.log('err', err.message)
      return response.status(400).json({ error: err.message });
    })
  }
}