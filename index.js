import { LitElement, html, css } from 'lit-element';
import './components/ez-app.js';
import './components/post-list.js';

const main = document.querySelector('main');

const ezApp = document.createElement('ez-app');

main.appendChild(ezApp);

// const postList = document.createElement('post-list');

// content.appendChild(postList);