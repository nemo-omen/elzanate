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

  connectedCallback() {
    super.connectedCallback();
    this.fetchPosts();
  }

  async fetchPosts() {
    const response = await fetch('http://localhost:3000');
    const jsonResponse = await response.json();
    this.posts = jsonResponse;
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
      ${this.posts.map(post => html`
        <post-list-item
          id=${post.postid}
          ._id=${post._id}
          .headline=${post.headline}
          .byline=${post.byline}
          .dateline=${post.dateline}
          .lastUpdated=${post.lastUpdated}
          .featuredImage=${post.featuredImage}
          .content=${post.content}
        >
        </post-list-item>
      `
    )}
    `
  }


}

customElements.define('post-list', PostList);