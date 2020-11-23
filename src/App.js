import React from 'react';
import './App.css';
import List from './composition/List';

function App(props) {
  const arrayOfLists = props.storeProp.lists.map((list) => {
    const listCards = list.cardIds.map(id => props.storeProp.allCards[id]);
    return <List key={list.id} header={list.header} cards={listCards} />
  });

  return (
    <main className='App'>
       <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {arrayOfLists}
      </div>
    </main>
  );
}

export default App;