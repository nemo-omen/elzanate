import { LitElement, html, css } from 'lit-element';
import { until } from 'lit-html/directives/until.js';
import './post-list-item.js';

class PostList extends LitElement {
  static get properties() {
    return {
      posts: { type: Array }
    }
  }

  constructor() {
    super();
    this.posts = [];
  }

  static get styles() {
    return css`
      h1 {
        color: #0dffe4;
        font-weight: 200;
        font-size: 2rem;
        padding: 0;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
    ${
      until(
        fetch('http://localhost:3000')
          .then(response => response.json())
          .then((data) => { this.posts = [...data] })
          .catch((error) => { console.error(error) }),

        html`
          ${this.posts.map(post => html`
          <post-list-item
            id=${post.postid}
            .postid=${post.postid}
            .headline=${post.headline}
            .byline=${post.byline}
            .dateline=${post.dateline}
            .lastUpdated=${post.lastUpdated}
            .featuredImage=${post.featuredImage}
            .content=${post.content}
          >
          </post-list-item>
        `)}
        `
      )
      }`
  }


}

customElements.define('post-list', PostList);