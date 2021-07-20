
var encode = require( 'hashcode' ).hashCode; 
const { 
  indexsContacts, 
  updateContact,
  searchIndexContact,
  createContact,
  indexContact,
} = require('./ContactsRequest');



module.exports = {
  async index(request, response) {
    return indexContact(request, response)
  },
  async indexs(request, response) {
    return indexsContacts(request, response)
  },

  async update(request, response) {
    var {
      id,
      nome,
      data,
      idRepresentante,
      cidades,
    } = request.body

    let contato = await searchIndexContact(id)
    console.log('searchIndexContact',id, contato)
    if(contato?.Item){
      if(!contato.Item.idRepresentante.includes(idRepresentante)){
        idRepresentante += `;${contato.Item.idRepresentante}`
      }else{
        idRepresentante = contato.Item.idRepresentante
      }
      if(!contato.Item.cidades.includes(cidades)){
        cidades += `;${contato.Item.cidades}`
      }else{
        cidades = contato.Item.cidades
      }
    }
    const params = {
      TableName: "contatos",
      Key: {
        "id": id,
      },
      UpdateExpression: "set nome = :n, #dt = :dt, idRepresentante = :iR, cidades = :cd",
      ExpressionAttributeValues:{
        ':n': nome,
        ':dt': data,
        ':iR': idRepresentante,
        ':cd': cidades,
      },
      ExpressionAttributeNames:{
        "#dt": "data"
      },
      ReturnValues:"UPDATED_NEW",
    }
    return updateContact(params, response)
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
    console.log('request', request)
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
