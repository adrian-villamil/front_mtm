
import ReactDom from "react-dom/client";
import 'semantic-ui-css/semantic.min.css';
import './scss/global.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';

import { App } from './App';

ReactDom.createRoot(document.getElementById('root')).render(
  <App />
)