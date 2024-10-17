# Projeto: Chatbot de Upload de Vídeos para Google Drive

Este projeto é um sistema que integra um chatbot de WhatsApp com a API do Google Drive para capturar vídeos enviados pelos usuários e armazená-los automaticamente em uma pasta específica do Google Drive, aplicando uma lógica de nomeação personalizada.

## 📋 Funcionalidades

- Captura de vídeos via API do WhatsApp (ex.: Twilio, Zenvia).
- Validação e nomeação de arquivos com base em regras predefinidas.
- Upload automático dos vídeos para uma pasta específica no Google Drive.
- Tratamento de erros centralizado para garantir uma resposta padronizada aos usuários.

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js
- **API de Mensagens**: Venom API
- **API de Armazenamento**: Google Drive API
- **Banco de Dados** (opcional): MongoDB ou PostgreSQL

---

## 📅 Roadmap do Projeto

O desenvolvimento do projeto é dividido em fases para garantir um fluxo incremental e validado em cada etapa.

### **Fase 1: Planejamento e Preparação**

1. **Definir os Requisitos do Projeto**
   - Especificar funcionalidades essenciais e cenários de uso.
   - Identificar fluxos alternativos e possíveis erros.

2. **Escolher Ferramentas e Tecnologias**
   - Definir as tecnologias para backend, API de mensagens, e API de armazenamento.

3. **Configuração do Ambiente de Desenvolvimento**
   - Configurar Node.js e dependências iniciais.
   - Criar repositório no GitHub e configurar scripts de inicialização.

### **Fase 2: Implementação Inicial da Integração com o WhatsApp**

4. **Configurar a API do WhatsApp**
   - Registrar conta e configurar webhook para receber mensagens.

5. **Implementar o Handler de Webhook (`webhookHandler.js`)**
   - Desenvolver lógica para identificar e extrair vídeos recebidos.

6. **Testar o Handler Localmente**
   - Usar Postman para simular requisições e validar o fluxo.

### **Fase 3: Implementação da Integração com o Google Drive**

7. **Configurar a API do Google Drive**
   - Ativar API no Google Cloud Console e configurar credenciais OAuth.

8. **Desenvolver o Módulo de Drive Client (`driveClient.js`)**
   - Implementar funções de autenticação e upload de arquivos.

9. **Testar a Integração com o Google Drive**
   - Fazer upload manual de arquivos de exemplo para garantir que tudo funciona.

### **Fase 4: Lógica de Nomeação e Validação de Arquivos**

10. **Implementar o Serviço de Nomeação (`namingService.js`)**
    - Adaptar a lógica de nomeação do Python para o Node.js.

11. **Implementar o Serviço de Validação (`validationService.js`)**
    - Criar funções para validar nomes de arquivos usando expressões regulares.

12. **Integrar o Serviço de Nomeação e Validação no Controller (`driveController.js`)**
    - Validar nomes de arquivos antes de realizar o upload.

### **Fase 5: Middlewares e Tratamento de Erros**

13. **Desenvolver o Middleware de Autenticação (`authMiddleware.js`)**
    - Implementar lógica para proteger rotas e validar tokens.

14. **Implementar o Middleware de Tratamento de Erros (`errorMiddleware.js`)**
    - Centralizar a formatação e resposta a erros.

### **Fase 6: Testes e Validação**

15. **Escrever Testes Unitários e de Integração**
    - Testar individualmente serviços e a integração completa.

16. **Testar Cenários Reais com o WhatsApp**
    - Validar o fluxo de ponta a ponta em ambiente controlado.

### **Fase 7: Deploy e Monitoramento**

17. **Configurar o Ambiente de Produção**
    - Escolher plataforma de hospedagem (ex.: AWS, Heroku) e configurar variáveis.

18. **Configurar Logs e Monitoramento**
    - Implementar sistema de logs para monitorar eventos e erros.

19. **Deploy da Aplicação**
    - Configurar CI/CD para automatizar deploy e garantir atualizações contínuas.

20. **Testar em Produção**
    - Validar o funcionamento completo em ambiente real.

### **Fase 8: Manutenção e Escalabilidade**

21. **Documentar o Projeto**
    - Atualizar o `README.md` com instruções claras e documentação detalhada.

22. **Ajustes e Melhorias Contínuas**
    - Monitorar logs e métricas para identificar e aplicar melhorias.

---

## 🧪 Testes

- **Unitários**: Testes para validar serviços e módulos isoladamente.
- **Integração**: Testes para garantir o funcionamento correto do sistema completo, do recebimento da mensagem até o upload do arquivo.

---

## 🚀 Deploy e CI/CD

- **Hospedagem**: AWS, Heroku, ou DigitalOcean.
- **Automação**: Configuração de pipelines de CI/CD para automatizar deploy e garantir atualizações contínuas e seguras.

---

## 📚 Documentação

Para mais detalhes sobre a arquitetura, configuração e uso, consulte a [documentação completa](docs/README.md).

---

## 📈 Monitoramento e Logs

- Logs são gerados automaticamente e monitorados para identificar e resolver problemas rapidamente. 
- Integrado com sistemas de monitoramento como DataDog (opcional) para melhor observabilidade.

---

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

**Loucos Por Gincana.**
