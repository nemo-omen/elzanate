import { LitElement, html, css } from 'lit-element';
import './components/ez-app.js';
import './components/post-list.js';

const content = document.querySelector('#content');

const ezApp = document.createElement('ez-app');

content.appendChild(ezApp);

// const postList = document.createElement('post-list');

// content.appendChild(postList);