import { LitElement, html, css } from 'lit-element';

class PostPage extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      post: { type: Object }
    }
  }

  constructor() {
    super();
    this.post = {};
  }

  async connectedCallback() {
    super.connectedCallback();
    this.id = this.location.params.id;
    this.fetchPost();
  }

  async fetchPost() {
    const response = await fetch(`http://localhost:3000/stories/${this.id}`);
    const jsonResponse = await response.json();
    this.post = { ...jsonResponse };
  }

  render() {
    if (!this.post) {
      return html`Loading...`;
    } else {
      return html`
      <article>
        <h1>${this.post.headline}</h1>
        <div id="featured-image">
          <img src="${this.post.featuredImage}" alt="${this.post.headline}">
        </div>
        <div class="front-matter">
        <span>${this.post.dateline}</span> <a href="#">${this.post.byline}</a>
        </div>
        <p>${this.post.content}</p>
      </article>
      `;
    }
  }

  static get styles() {
    return css`
    article {
      font-family: 'IBM Plex Sans';
      font-size: 16px;
    }
    h1 {
        margin: 0 0 0.5rem 0;
        padding: 0;
        font-weight: 300;
        color: #0dffe4;
        font-size: 2.5rem;
        text-decoration: none;
        transition-property: all;
        transition-duration: 400ms;
        margin: 0 0 1rem 0;
    }
    .front-matter {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 1rem;
      font-weight: 400;
      border-bottom: 2px dotted #ffc200;
      padding: 0.5rem;
      margin: 1rem 0 2rem 0;
    }

    .front-matter a {
      text-decoration: none;
      color: #0dffe4;
    }
    .front-matter a:hover {
      color: #ffc200;
    }
    #featured-image {
    --img-width: 100%;
      max-width: var(--img-width);
      max-height: 400px;
      overflow: hidden;
    }
    img {
      max-width: 100%;
    }
    `
  }
}

customElements.define('post-page', PostPage);