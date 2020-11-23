import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

it('renders the UI as expected', () => {
  const testCards = [
    { id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'c', title: 'Third card', content: 'lorem ipsum' },
  ]
  const tree = renderer
    .create(<List header="Test Header" cards={testCards} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});