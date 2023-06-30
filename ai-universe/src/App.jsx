import React from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

const App = () => {
  
  return (
    <div>
       <Header></Header>
       <Button>Sort By Date</Button>
       <Card></Card>
       <Button>See More</Button>
    </div>
  );
};

export default App;