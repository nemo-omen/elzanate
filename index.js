import { LitElement, html, css } from 'lit-element';
import { router } from 'lit-element-router';
import './components/main-app.js';
import './components/post-list.js';

const content = document.querySelector('#content');

const mainApp = document.createElement('main-app');

content.appendChild(mainApp);

// const postList = document.createElement('post-list');

// content.appendChild(postList);