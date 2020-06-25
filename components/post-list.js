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
  },
  {
    postid: '2',
    headline: 'What do the improvements to the Lake Nasworthy area mean for you?',
    byline: 'El Zanate Staff',
    dateline: 'June 21, 2020, 11:40 p.m.',
    lastUpdated: 'June 21, 2020, 11:40 p.m.',
    featuredImage: '/assets/images/Great-tailed_Grackle_National_Butterfly_Center_Mission_TX_2018-02-28_15-40-11_(38852714480).jpg',
    content: 'Do the improvements to the residential areas of Lake Nasworthy mean anything for you if you live in Blackshear?'
  },
  {
    postid: '3',
    headline: "The largest property owner in Downtown San Angelo doesn't pay property taxes",
    byline: 'Jeff Caldwell',
    dateline: 'June 22, 2020, 9:09 p.m.',
    lastUpdated: 'June 22, 2020, 9:09 p.m.',
    featuredImage: '/assets/images/Great-tailed_Grackle_From_The_Crossley_ID_Guide_Eastern_Birds.jpg',
    content: 'How the city loses out on millions in revenue from one of its largest property owners.'
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
    `;
  }

  render() {
    return html`
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
  }

}

customElements.define('post-list', PostList);