
# Sistema de Criptografia de Arquivos com Node.js e Worker Threads

## Visão Geral

Este projeto demonstra a capacidade do Node.js de executar operações intensivas de CPU, como a criptografia de arquivos, de forma eficiente e escalável utilizando `worker_threads`. Através de uma interface web simples, os usuários podem selecionar arquivos para serem criptografados, os quais são processados em paralelo por workers, maximizando o uso dos núcleos do CPU disponíveis.

## Motivação

Operações de criptografia podem ser computacionalmente intensivas e, em um ambiente de produção, podem impactar significativamente o desempenho de aplicações single-threaded como o Node.js. Utilizando o módulo `worker_threads`, este projeto visa demonstrar uma abordagem eficaz para paralelizar tais tarefas, distribuindo a carga de trabalho através de múltiplos threads para melhorar o throughput e a eficiência.

## Tecnologias Utilizadas

- **Node.js**: Como ambiente de execução back-end.
- **Worker Threads**: Para paralelizar o processamento de criptografia, permitindo a execução de múltiplas instâncias de criptografia em paralelo.
- **Express.js**: Framework web utilizado para criar a API REST e servir a página HTML para upload de arquivos.
- **Crypto**: Módulo nativo do Node.js utilizado para implementar a lógica de criptografia de arquivos.

## Funcionamento

1. **Upload de Arquivos**: Usuários acessam uma página web servida pelo Express.js, onde podem selecionar um ou mais arquivos para criptografia.
2. **Processamento Paralelo**: Cada arquivo enviado é processado em um `worker_thread` separado, utilizando o módulo `crypto` para criptografar os dados.
3. **Download de Arquivos Criptografados**: Após a criptografia, os usuários podem baixar os arquivos criptografados diretamente através da interface web.

## Como Executar

Instruções detalhadas sobre como configurar e executar o projeto em seu ambiente local, incluindo a instalação de dependências, configuração de variáveis de ambiente e comandos para iniciar o servidor.



1. Clone o repositório:

```bash
   git clone <https://github.com/EduardoGrangeiro2002/Worker-Threads>
```
2. Instale as dependências e rode o projeto:

```bash
    npm install

    npm start
```

## Contribuições

Contribuições são sempre bem-vindas! Se você tem uma sugestão para melhorar este projeto, sinta-se à vontade para fazer um fork do repositório, realizar alterações e submeter um pull request.



