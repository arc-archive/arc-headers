import { HeadersEditorElement } from './src/HeadersEditorElement';

declare global {
  interface HTMLElementTagNameMap {
    "headers-editor": HeadersEditorElement;
  }
}