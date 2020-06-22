import { LitElement, html, css } from 'lit-element';

class PostList extends LitElement {

  static get styles() {
    return css`
      h1 {
        color: #0dffe4;
        font-weight: 200;
        font-size: 2rem;
      }
    `;
  }
  render() {
    return html`
      <h1>Posts</h1>
      <p>More stuff here.</p>
    `;
  }
}

customElements.define('post-list', PostList);