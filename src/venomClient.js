// src/venomClient.js
require('dotenv').config() // Carrega as variáveis do .env
const venom = require('venom-bot')

// Recupera o número autorizado do arquivo .env
const allowedNumber = process.env.ALLOWED_NUMBER

// Função para inicializar a Venom API
function initializeVenom() {
  return venom
    .create({
      session: 'loucos', // Nome da sessão (pode ser personalizado)
      multidevice: true, // Habilita o suporte a multi-dispositivo
    })
    .then((client) => start(client))
    .catch((error) => {
      console.error('Erro ao iniciar a Venom API:', error)
    })
}

// Função principal que será chamada quando a Venom API estiver pronta
function start(client) {
  client.onAnyMessage(async (message) => {
    // Verifica se a mensagem é de um número específico (no caso, seu próprio número)
    if (message.from === `${allowedNumber}@c.us`) {
      console.log('Mensagem recebida do número autorizado:', message.from)

      // Verifica se a mensagem é uma mídia (vídeo ou imagem) e se tem legenda
      if (
        (message.type === 'video' || message.type === 'image') &&
        message.caption
      ) {
        console.log('Mídia recebida:', message)

        // URL para download da mídia
        const mediaUrl = await client.decryptFile(message)
        const caption = message.caption

        // Processar a mídia (download e upload) e a legenda aqui
        handleMedia(mediaUrl, caption)
      } else {
        console.log('Mensagem recebida não é uma mídia ou não contém legenda.')
      }
    } else {
      console.log('Mensagem de um número não autorizado:', message.from)
    }
  })
}

// Função para lidar com a mídia e a legenda
async function handleMedia(mediaUrl, caption) {
  try {
    console.log('Processando mídia com legenda:', caption)

    // Implementar a lógica para download da mídia usando a URL (mediaUrl)
    // e upload para o Google Drive ou processamento conforme necessário.
    // ...
  } catch (error) {
    console.error('Erro ao processar a mídia:', error)
  }
}

module.exports = {
  initializeVenom,
}
