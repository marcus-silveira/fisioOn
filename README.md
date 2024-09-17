# FisioOn

## Descrição

O **FisioOn** é um aplicativo desenvolvido em React Native com Expo, focado em facilitar o controle e gerenciamento de pacientes por profissionais de fisioterapia.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Tecnologias](#tecnologias)
- [EAS Build](#eas-build)

## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) >= 14.x
- [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado globalmente

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/marcus-silveira/fisioOn.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd fisioOn
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o projeto com Expo:

   ```bash
   npx expo start
   ```

## Uso

Após instalar as dependências e iniciar o projeto, você pode escanear o QR Code exibido no terminal usando o aplicativo Expo Go (disponível para iOS e Android) para testar a aplicação em seu dispositivo físico ou emulador.

## Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)

## EAS Build

Este projeto utiliza o EAS (Expo Application Services) para builds de produção. Para criar uma nova build:

```bash
npm install -g eas-cli
```

```bash
eas login
```

```bash
eas build:configure
```

ou

```bash
eas build -p android --profile preview
```
