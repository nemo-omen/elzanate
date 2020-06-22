import { LitElement, html, css } from 'lit-element';
import './post-list-item.js';

const dummyPosts = [
  {
    postid: '1',
    headline: 'Post one headline: Important things afoot at City Council',
    byline: 'El Zanate Staff',
    dateline: 'June 21, 2020, 9:35 p.m.',
    lastUpdated: 'June 21, 2020, 9:35 p.m.',
    featuredImage: '/assets/images/Great-tailed_Grackle_67332870.jpg',
    content: 'Something really big and important happened at 9:30 this evening, Sunday, June 21, 2020.'
  }
];

class PostList extends LitElement {
  static get properties() {
    return {
      posts: { type: Array }
    }
  }

  constructor() {
    super();
    this.posts = [...dummyPosts];
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
      a {
        text-decoration: none;
        color: inherit;
      }
    `;
  }

  render() {
    return html`
      ${this.posts.map(post => html`
      <a href="/">
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
        </a>
      `)}
    `
  }

}

customElements.define('post-list', PostList);