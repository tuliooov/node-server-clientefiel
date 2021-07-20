
var encode = require( 'hashcode' ).hashCode; 
const { 
  sincronizarRepresentante,
  indexRepresentante,
  indexsRepresentantes
} = require('./RepresentantesRequest');



module.exports = {
  // async index(request, response) {
  //   return indexContact(request, response)
  // },
  // async indexs(request, response) {
  //   return indexsContacts(request, response)
  // },

  async index(request, response) {
    return indexRepresentante(request, response)
  },

  async indexs(request, response) {
    return indexsRepresentantes(request, response)
  },

  async sincronizar(request, response) {
    const {
      id,
    } = request.body

    const params = {
      TableName: "representantes",
      Key: {
        "id": id,
      },
      UpdateExpression: "set #dt = :dt",
      ExpressionAttributeValues:{
        ':dt': new Date().getTime(),
      },
      ExpressionAttributeNames:{
        "#dt": "dataSincronizacao"
      },
      ReturnValues:"UPDATED_NEW",
    }
    return sincronizarRepresentante(params, response)
  },

  async updates(request, response) {
    const contacts = request.body
    contacts.forEach(contact => {
      const {
        id,
        nome,
        data,
        idRepresentante,
      } = contact
      const params = {
        TableName: "contatos",
        Key: {
          "id": id,
        },
        UpdateExpression: "set nome = :n, #dt = :dt, idRepresentante = :iR",
        ExpressionAttributeValues:{
          ':n': nome,
          ':dt': data,
          ':iR': idRepresentante,
        },
        ExpressionAttributeNames:{
          "#dt": "data"
        },
        ReturnValues:"UPDATED_NEW",
      }
      updateContact(params, response)
    });

    return response.status(200).json({ success: 'contatos enviados para atualização' })
  },

  // async index(request, response) {
  //   const { username } = request.query;
  //   return indexUser(username, response)
  // },

  async create(request, response) {
    const {
      id,
      nome,
      data,
      idRepresentante,
    } = request.body

    console.log('contato', id)
    let contato = await searchIndexContact(id)
    console.log('contato', contato)

    if(contato.error){
      return response.status(200).json({ error: contato.error });
    }else if(contato.Item){
      return response.status(200).json({ error: 'Contato já existe.' });
    }

    const params = {
      TableName: "contatos",
      Item: {
        "id": id,
        "nome": nome,
        "data": data,
        "idRepresentante": idRepresentante,
      }
    }

    return createContact(params, response)
  },

  async creates(request, response) {
    const contatcs = request.body

    console.log('contato', id)
    let contato = await searchIndexContact(id)
    console.log('contato', contato)

    if(contato.error){
      return response.status(200).json({ error: contato.error });
    }else if(contato.Item){
      return response.status(200).json({ error: 'Contato já existe.' });
    }

    const params = {
      TableName: "contatos",
      Item: {
        "id": id,
        "nome": nome,
        "data": data,
        "idRepresentante": idRepresentante,
      }
    }

    return createContact(params, response)
  },

  

  // async confirmeWhatsapp(request, response) {
  //   const {
  //     username,
  //   } = request.body

  //   const params = {
  //     TableName: "users",
  //     Key: {
  //       "username": username,
  //     },
  //     UpdateExpression: "set whatsappConfirme = :w",
  //     ExpressionAttributeValues:{
  //       ':w': true,
  //     },
  //     ReturnValues:"UPDATED_NEW",
  //   }
  //   return updateUser(params, response)
  // },


  // async envioConfirmado(request, response) {
  //   const {
  //     username,
  //     level,
  //     lastSend,
  //   } = request.body

  //   const params = {
  //     TableName: "users",
  //     Key: {
  //       "username": username,
  //     },
  //     UpdateExpression: "set lastSend = :ls, level = ll",
  //     ExpressionAttributeValues:{
  //       ':ls': lastSend,
  //       ':ll': level+1,
  //     },
  //     ReturnValues:"UPDATED_NEW",
  //   }
  //   return updateUser(params, response)
  // }
}
