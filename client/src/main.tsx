import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

const { AUTH0_DOMAIN: domain, AUTH0_CLIENT_ID: clientId } = import.meta.env;
const redirectUri = window.location.origin + "/home"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      clientId={clientId}
      domain={domain}
      authorizationParams={{
        redirect_uri: redirectUri
      }}>
      <App />

    </Auth0Provider>

  </React.StrictMode>,
)
