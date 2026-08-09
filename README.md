# 🧮 Math Training

Um aplicativo desktop interativo desenvolvido para praticar e aprimorar habilidades matemáticas em diferentes níveis de dificuldade.

---

## 🚀 Sobre o Projeto

O **Math Training** é uma aplicação desktop construída com tecnologias web e Electron. O objetivo é oferecer uma interface simples, rápida e focada para treinamento matemático diário (níveis Easy, Medium e Hard).

---

## 🛠️ Tecnologias Utilizadas

- **[Electron](https://www.electronjs.org/)** — Framework para criação de aplicações desktop com JS/HTML/CSS
- **Node.js** — Execução do ambiente e gerenciamento de arquivos
- **HTML5 & CSS3** — Interface e estilização da aplicação

---

## 📋 Pré-requisitos

Para rodar o projeto em modo de desenvolvimento na sua máquina, você vai precisar de:

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
* `npm` (gerenciador de pacotes incluso no Node.js)

---

## 🔧 Como Baixar e Executar

Siga os passos abaixo no terminal do seu sistema operacional:

### 1. Clonar o repositório
```bash
git clone [https://github.com/SEU-USUARIO/MATH-TRAINING.git](https://github.com/SEU-USUARIO/MATH-TRAINING.git)
```

## 2. Passo

> cd MATH-TRAINING

## 3. Instalar as dependências

> npm install

## 4. Executar a aplicação

> npm run dev

## Configuração de Menu do Linux (Opcional)

### Crie o arquivo .desktop no diretório de aplicações locais:

```bash
nano ~/.local/share/applications/math-training.desktop
```

### Cole o conteúdo abaixo (ajustando o caminho absoluto para o local onde você clonou o projeto):

```bash 
[Desktop Entry]
Version=1.0
Type=Application
Name=Math Training
Comment=App para Treinamento de Matemática
Exec=/SEU_CAMINHO/MATH-TRAINING/node_modules/.bin/electron /SEU_CAMINHO/MATH-TRAINING
Icon=/SEU_CAMINHO/MATH-TRAINING/assets/img/calculator.png
Terminal=false
StartupWMClass=math-training
Categories=Education;Development;
```

### Dê permissão e atualize o banco de atalhos:

```bash
chmod +x ~/.local/share/applications/math-training.desktop
update-desktop-database ~/.local/share/applications/
```