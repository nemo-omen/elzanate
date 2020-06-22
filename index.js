import { LitElement, html, css } from 'lit-element';
import './components/post-list.js';

const content = document.querySelector('#content');

const postList = document.createElement('post-list');

content.appendChild(postList);