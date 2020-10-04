import { HeadersListElement } from './src/HeadersListElement';

declare global {
  interface HTMLElementTagNameMap {
    "headers-list": HeadersListElement;
  }
}