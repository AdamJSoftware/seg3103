import React from 'react'
import ReactDOM from 'react-dom/client'
import SingleModal from "./components/Modal"
import App from './App'
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
        <MantineProvider>
      <ModalsProvider modals={{ single: SingleModal  }}>
      <App />
           </ModalsProvider>
    </MantineProvider>
    </Router>
  </React.StrictMode>
)
