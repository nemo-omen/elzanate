import { LitElement, html, css } from 'lit-element';

class PostListItem extends LitElement {
  static get properties() {
    return {
      postid: { type: String },
      headline: { type: String },
      byline: { type: String },
      dateline: { type: String },
      lastUpdated: { type: String },
      featuredImage: { type: String },
      content: { type: String },
      slug: { type: String },
      permalink: { type: String }
    }
  }

  static get styles() {
    return css`
      :host {
        cursor: pointer;
      }
      article {
        font-family: 'IBM Plex Sans';
        display: flex;
        flex-direction: row;
        padding: 0 1rem 0 0;
        margin: 0 0 2rem 0;
        background-color: #1f2329;
        transition-property: all;
        transition-duration: 400ms;
      }
      article:hover h2 {
        text-decoration: underline;
      }
      article:hover h3, article:hover p {
        color: #fafafa;
      }
      img {
        max-width: 300px;
      }
      .main-section {
        margin: 0 0 0 1rem;
        padding: 0;
        flex-grow: 1;
      }
      header {
        border-bottom: 1px dotted #ffc200;
        display: flex;
        flex-direction: column;
      }
      .subheadline-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 1px dotted #ffc200;
        padding: 0.25rem 0;
      }
      h2 {
        margin: 0 0 0.5rem 0;
        padding: 0;
        font-weight: 300;
        font-size: 1.75rem;
        color: #0dffe4;
        text-decoration: none;
        transition-property: all;
        transition-duration: 400ms;
      }
      h3 {
        padding: 0;
        margin: 0;
        font-weight: 400;
        font-size: 1rem;
      }
    `;
  }

  render() {
    return html`
    <article>
        <img src=${this.featuredImage} alt="${this.headline}">
      <section class="main-section">
        <header>
          <h2>${this.headline}</h2>
          <section class="subheadline-section">
            <h3>by ${this.byline}</h3>
            <h3>${this.dateline}</h3>
          </section>
        </header>
        <section class="content-section">
          <p>${this.content}</p>
        </section>
      </section>
    </article>
    `;
  }
}

customElements.define('post-list-item', PostListItem);