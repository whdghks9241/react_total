import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import imgSample from './img/img2.png';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>리액트 부트스트랩 사이트</h1>
      </header>
      <main className='container mt-2'>
      <section className='md-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img className='img-fluid' src={imgSample}/>
            </div>
            <div className='col-md-6'>
             <h2>about</h2>
             <p>이미지 설명입니다</p>
            </div>
          </div>
        </section>
        <section className='md-5'>
          <div className='row'>
            <div className='col-md-6'>
             <h2>about</h2>
             <p>이미지 설명입니다</p>
            </div>
            <div className='col-md-6'>
              <img className='img-fluid' src={imgSample}/>
            </div>
          </div>
        </section>
        <section className='mb-5'>
          <h2 className='md-4'>세션2</h2>
          <div className='row'>
            <div className='col-md-4 md-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>카드1</h5>
                  <p className='card-text'>안녕하세요. 카드1.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 md-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>카드2</h5>
                  <p className='card-text'>안녕하세요. 카드2.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 md-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>카드3</h5>
                  <p className='card-text'>안녕하세요. 카드3.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className='text-center mb-4'> Contact Us</h2>
          <form>
            <div className='md-5'>
              <label className='form-label'>Name</label>
              <imput ></imput>
            </div>
          </form>
        </section>
      </main>
      <footer className='bg-dark text-light text-center py-3'>
        <p>&copy; 2023 My React Site</p>
      </footer>
    </div>
  );
}

export default App;