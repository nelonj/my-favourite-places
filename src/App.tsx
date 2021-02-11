import React from 'react';
import logo from './logo.svg';
import './App.css';
import Place from './components/place';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> My Favourite Places </h1>
      </header>
      <main className="App-body">
        <Place
          title= 'Palazzo Te'
          place= 'Mantova'
          country= 'Italy'
          image= 'https://pbs.twimg.com/media/D5oj-ceW0AAQi0Q.jpg'
          location = 'https://goo.gl/maps/7JCbyEnykrthXnij9'
          bio = "A palace built by the duke d'Este for his lover Isabella."
        />
        
        <Place 
          title= "Colosso dell'Appennino"
          place = 'Firenze'
          country= 'Italy'
          image= 'https://cultura.ilfilo.net/wp-content/uploads/2019/08/Colosso-dellAppennino-opera-del-Giambologna-1024x682.jpg'
          location = 'https://goo.gl/maps/1KEngPncVbkmhx2CA'
          bio = 'A sculpture in grotesque style depicting the Appenine mountains'
        />
      </main>
      <footer className="App-footer">
        <h1> Footer stuff here </h1>
      </footer>
    </div>
  );
}

export default App;
