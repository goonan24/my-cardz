import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCardz extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--my-cardz-background-color);
    }

    .btn-wrapper header{
      font-size: 35px; 
      color: Blue;
      margin: 1px;
    }
    
    .btn-wrapper {
      margin: 24px auto;
      padding: 20px;
      border: 30px solid black; 
    }
    /*
    .btn-wrapper button {
      font-size: 15px;
      color: white;
      background-color: blue;
      margin-left: 1px;
      margin-top: 1px;
      padding: 1px;
      position: relative;
      top: 20px;
      left: -400px;
    }
    */

    .btn-wrapper QBB{
      font-size: 15px;
      color: white;
      background-color: blue;
      margin-left: 1px;
      margin-top: 1px;
      padding: 1px;
      position: relative;
      top: 20px;
      left: 1000px;
    }
    .btn-wrapper MLBB{
      font-size: 15px;
      color: white;
      background-color: blue;
      margin-left: 1px;
      margin-top: 1px;
      padding: 1px;
      position: relative;
      top: 20px;
      left: 500px;
    }
    
    .btn-wrapper textarea{
      color: white;
      font-size: 14px;
      margin-left: 1px;
      margin-top: 0px;
      background-color: blue;
      height: 175px;
      width: 250px;
    }
    .btn-wrapper QB Pic{
      margin-left: 1px;
      margin-top: 1px;
      padding-top: 1px;
      height: 50px;
      width: 25px;
      
    }
    .btn-wrapper Linebacker Pic{
      margin-left: 1px;
      margin-top: 50px;
      padding-top: 100px;
    }
    @media only screen and (max-width: 800px) {
      body {
        background-color: lightblue;
      }
    }
    @media only screen and (max-width: 500px) {
      body {
        scale: button; 
        scale: Linebacker Pic;
        scale: QB Pic;
      }
    }

    .QB{
      height: 150px;
      width: 200px;
      
    }
    .LB{
      height: 200px;
      width: 200px;
    }
  ;`

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="btn-wrapper">
          <header id="header">Penn State Football</header>
          <textarea>these buttons will send you to the personal page for the starting quarterback and main linebacker for the Penn State Football team. The Quarter back is the top image and the Middle Line Backer is the bottom Image. Click on the botton now to find out more information.</textarea>
          <img class="QB" src="https://www.statecollege.com/wp-content/uploads/2023/09/BURDICK-Delaware-Allar-throw-1st-half-scaled.jpg" alt="QB Pic"></img>
          <img class="LB" src="https://media.gettyimages.com/id/1244435446/es/foto/penn-state-linebacker-abdul-carter-reads-the-play-during-the-ohio-state-buckeyes-versus-penn.jpg?s=1024x1024&w=gi&k=20&c=FMTrLWUDVFD4tlL3lTye07SIdHsFU_05SXkmsJFTwIM=" alt="Linebacker Pic"></img>
          <a href="https://gopsusports.com/sports/football/roster/drew-allar/13992">
            <button id="QBB">Quarterbackdetails</button>
          </a>
          <a href="https://gopsusports.com/sports/football/roster/abdul-carter/13999">
          <button id="MLBB">Middle Line Backer</button>
          </a>
        </div>

        <div class="duplicate-card">
          <button id="dup"> duplicate</button>
          <script>
            document.querySelector("#dup").addEventListener("click", (e) => {
              let p = document.getElementById("btn-wrapper");
              let d = p.cloneNode(true);
              document.body.appendChild(d);
          });
          </script>
        </div>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('my-cardz', MyCardz);