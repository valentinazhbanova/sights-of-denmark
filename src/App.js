import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {
  const [sights, setSights] = useState(data);

  const removeItem = (id) => {
    let newItems = sights.filter(sight => sight.id !==id);
    setSights(newItems);
  }

  return (
    <div>
      <div className='container'>
        <h1>{sights.length} Достопримечательностей Дании</h1>
        </div>
      
        {sights.map((element => {
          const{id, name, image} = element;
          return(
            <div key={id}>
              <div className='container'>
                <h2>{id} - {name}</h2>
              </div>
              <div className='container'>
                <img src={image} width='600px' alt='sights'/>
              </div>
              <div className='container'>
                <button className='btn' onClick={() => removeItem(id)}>УДАЛИТЬ</button>
              </div>
            </div>
          )
        }))}
      <div className='container'>
          <button className='btn' onClick={() => setSights([])}>УДАЛИТЬ ВСЕ</button>
      </div>
    </div>
  );
}

export default App;
