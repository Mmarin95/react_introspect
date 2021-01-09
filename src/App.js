import logo from './logo.svg';
import './App.css';
import React from 'react';

// O ferho en els metodos de la clase Header aixina va tot junt?
function Logo(props) {
  return (
    <a href="#" class="logo">introspect</a>
  );
}

function Nav(props) {
  return (
    <nav id="nav">
      <a href="#">HOME</a>
      <a href="#">GENERICS</a>
      <a href="#">ELEMENTS</a>
    </nav>
  );
}

class Header extends React.Component {

  // renderLogo() {
  //   return (
  //     <Logo />
  //   );
  // }

  // renderNav() {
  //   return (
  //     <Nav />
  //   );
  // }

  // render() {
  //   return (
  //     <section>
  //       <div>{this.renderLogo()}</div>
  //       <div>{this.renderNav()}</div>
  //     </section>
  //   );
  // }

  render() {
    return (
      <header id="header">
        <div class="inner">
          <Logo />
          <Nav />
        </div>
      </header>
    );
  }
}


class Banner extends React.Component {
  render() {
    return (
      <section className="banner">
        <div className="inner">
          <h1>
            Try 1:
              <span>
              Estic probant a maquetar
                  <br />
                esta web que he trobat.
              </span>
          </h1>
          <ul className="actions">
            <li>
              <a href="#" className="button">Get Started</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

class SectionOne extends React.Component {
  render() {
    return (
      <section className="section1">
        <div className="inner">
          <header>
            <h2>First section</h2>
          </header>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque incidunt reprehenderit eligendi veniam
          nesciunt dignissimos repellendus, eius atque accusamus quis vel unde eum officia sed debitis sint
          dolorum dicta consequuntur!
            </p>
          <ul className="actions">
            <li>
              <a href="#">LEARN MORE</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

function Article(props) {
  return (
    <article>
      <div class="content">
        <header>
          <h3>{props.header}</h3>
        </header>
        <div class="img"><img src="#" alt="" /></div>
        <p>{props.text}</p>
      </div>
    </article>
  );
}

class SectionTwo extends React.Component {

  articles = [
    {
      header: "Header 1",
      text: "Text 1"
    },
    {
      header: "Header 2",
      text: "Text 2"
    },
  ]

  // renderArticle(header, text) {
  //   return (
  //     // <Article header={header} text={text} />
  //     <Article header="Hola" text="hola" />
  //   );
  // }

  renderArticles(articles) {
    return (
      articles.forEach(article => {
        // <Article header={header} text={text} />
        <Article header="Hola" text="hola" />
      })
    );
  }

  render() {

    const renderArticles = this.renderArticles;
    const articlesToShow = this.articles;

    return (
      <section class="section2">
        <div class="inner">
          {/* {
            articlesToShow.forEach(article => {
              renderArticle(article.header, article.text);
            })
          } */}

          {
            renderArticles(articlesToShow)
          }


        </div>
      </section>
    );
  }
}




function App() {
  return (
    <div>
      <Header />
      <Banner />
      <SectionOne />
      <SectionTwo />
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
