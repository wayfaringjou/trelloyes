import React from 'react';
import './App.css';
import List from './composition/List';

class App extends React.Component {
  static defaultProps = {
    storeProp: {
      allCards: [],
      lists:[],
    },
  };

  arrayOfLists = this.props.storeProp.lists.map((list) => {
    const listCards = list.cardIds.map(id => this.props.storeProp.allCards[id]);
    return <List key={list.id} header={list.header} cards={listCards} />
  });
  render() {
    return (
      <main className='App'>
         <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
        {this.arrayOfLists}
        </div>
      </main>
    );
  }
}

export default App;