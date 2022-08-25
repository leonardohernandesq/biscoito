import React, { Component } from 'react'  



import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {textSentence: ''};
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = [
      'A persistência é o caminho do êxito.',
      'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
      'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.',
      'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
      'No meio da dificuldade encontra-se a oportunidade.',
      'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
      'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.',
      'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
      'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
      'É parte da cura o desejo de ser curado.',
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'O que me preocupa não é o grito dos maus. É o silêncio dos bons.',
      'Imagine uma nova história para sua vida e acredite nela.',
      'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.',
      'Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.',
      'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
    ];
  }
  
  quebraBiscoito(){
    let state = this.state
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textSentence = '" ' + this.frases[numeroAleatorio] + ' "'
    this.setState(state);
  }


  render() {
    return (
      <div className='container'>
        <img src={require('./assets/biscoito.png')} alt='Biscoito' className='img' />
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className='textSentence'>{this.state.textSentence}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn} className='botao'> {this.props.nome}</button>
      </div>
    )
  }
}

export default App;