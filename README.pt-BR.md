# RagnaIdle Hub

[English](README.md) | Português brasileiro

Aplicativo desktop não oficial para organizar até quatro contas do RagnaIdle em uma única interface.

O projeto utiliza Electron e possui identidade visual preta e amarela, com diferentes formas de organizar as telas do jogo.

> Em desenvolvimento. Os recursos descritos no planejamento ainda não estão disponíveis.

## Objetivo

Disponibilizar um instalador Windows para que o usuário possa instalar e utilizar o RagnaIdle Hub sem precisar configurar um ambiente de desenvolvimento ou executar comandos no terminal.

A experiência desejada é:

1. Baixar o instalador.
2. Instalar o aplicativo.
3. Abrir o RagnaIdle Hub.
4. Entrar nas contas e jogar.

## Estado atual

A versão inicial inclui:

- Quatro sessões de navegação separadas e persistentes.
- Visualização individual, em grade 2 × 2 ou em quatro colunas.
- Seleção, recarregamento e expansão das telas.
- Nomes de contas configurados manualmente.
- Preferências de visualização salvas localmente.
- Painel com status de carregamento das páginas.
- Notificação de teste.
- Estrutura de navegação para futuras funcionalidades.
- Configuração de compilação de um instalador Windows.

O status de carregamento não confirma que a conta está autenticada ou que o personagem está ativo.

A configuração do instalador está no projeto. Ela não significa, por si só, que existe uma versão compilada, testada e publicada para download.

## Planejamento

### Distribuição

- [ ] Gerar e testar o instalador Windows.
- [ ] Validar a instalação em um computador sem ambiente de desenvolvimento.
- [ ] Publicar o instalador para download.
- [ ] Documentar o processo de instalação e atualização.

### Interface

- [ ] Reduzir a altura do menu superior.
- [ ] Priorizar o espaço disponível para as telas do jogo.
- [ ] Remover as configurações de aparência.
- [ ] Manter o tema preto e amarelo como identidade visual fixa.

### Contas

- [ ] Ler automaticamente o nome da conta na interface do jogo.
- [ ] Exibir o nome identificado nas abas e no painel.
- [ ] Distinguir carregamento da página de autenticação da conta.

### Atualizações

- [ ] Definir o fluxo de publicação de novas versões.
- [ ] Adicionar o botão “Verificar atualizações”.
- [ ] Informar a versão instalada e a disponibilidade de uma nova versão.
- [ ] Implementar o fluxo de download e instalação das atualizações.
- [ ] Exibir mensagens de progresso, conclusão e erro.

### Integrações futuras

- [ ] Ler personagens e níveis.
- [ ] Notificar quando um personagem atingir o nível máximo.
- [ ] Implementar a área de lives de parceiros.
- [ ] Implementar o acompanhamento de votos.
- [ ] Definir e implementar as rotinas da aba Automações.

## Navegação

- Painel
- Jogo
- Automações
- Lives
- Votos
- Configurações

Algumas páginas são apenas estruturas visuais nesta etapa.

## Para usuários

O objetivo é distribuir o aplicativo por um instalador Windows.

Enquanto não houver uma versão publicada, as instruções abaixo se destinam ao desenvolvimento e à compilação local.

## Para desenvolvedores

### Tecnologias

- Electron
- JavaScript
- HTML e CSS
- Node.js e npm
- electron-builder
- NSIS

### Executar o projeto

Com Git e Node.js LTS instalados:

```bash
git clone [https://github.com/sxlvadev/RagnaIdleHub.git](https://github.com/sxlvadev/RagnaIdleHub.git)
cd RagnaIdleHub
npm install
npm start
```

Se o PowerShell bloquear o arquivo `npm.ps1`, utilize:

```powershell
npm.cmd install
npm.cmd start
```

### Gerar o instalador

No Windows, com as dependências instaladas:

```bash
npm run dist
```

A configuração atual gera o instalador Windows x64 na pasta `dist`.

O instalador ainda precisa ser validado antes de ser disponibilizado como uma versão pronta para uso.

## Dados locais e segurança

As quatro sessões utilizam identificadores persistentes separados:

```text
persist:conta1
persist:conta2
persist:conta3
persist:conta4
```

Não publique senhas, cookies, tokens ou pastas com dados das sessões.

Clonar o repositório não transfere os logins de outro computador.

As pastas `node_modules` e `dist` não devem ser incluídas nos commits.

## Limitações atuais

- Nomes das contas ainda são definidos manualmente.
- Não há leitura de personagens ou níveis.
- A notificação de nível máximo não está implementada.
- Lives, votos e automações ainda não possuem integração funcional.
- A atualização pelo aplicativo ainda não está implementada.
- Fluxos de autenticação e janelas externas precisam de validação.
- A instalação e o funcionamento em outros computadores ainda precisam ser testados.

## Uso responsável

Utilize o aplicativo conforme as regras do RagnaIdle e dos serviços externos acessados.

## Aviso

Projeto independente e não oficial, sem vínculo com os responsáveis pelo RagnaIdle.

Nomes, marcas e conteúdos de terceiros pertencem aos respectivos titulares.