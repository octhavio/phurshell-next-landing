import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import ServicosApps from './pages/ServicosApps'
import Insights from './pages/Insights'
import InsightPost from './pages/InsightPost'
import Cases from './pages/Cases'
import CasePsiapp from './pages/CasePsiapp'
import Contato from './pages/Contato'
import ContatoSucesso from './pages/ContatoSucesso'
import Sobre from './pages/Sobre'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'servicos', element: <Servicos /> },
      { path: 'servicos/desenvolvimento-de-apps', element: <ServicosApps /> },
      { path: 'insights', element: <Insights /> },
      { path: 'insights/:slug', element: <InsightPost /> },
      { path: 'cases', element: <Cases /> },
      { path: 'cases/psiapp', element: <CasePsiapp /> },
      { path: 'contato', element: <Contato /> },
      { path: 'contato/sucesso', element: <ContatoSucesso /> },
      { path: 'sobre', element: <Sobre /> },

      // Redirects SEO (client-side)
      { path: 'desenvolvimento-de-aplicativos', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'desenvolvimento-de-app', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'desenvolvimento-de-apps', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'desenvolvimento-mobile', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'desenvolvimento-de-aplicativo', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'desenvolvimento-de-aplicativo-mobile', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'fabrica-de-aplicativos', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'fabrica-de-apps', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'empresa-de-aplicativos', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'empresa-de-desenvolvimento-de-aplicativos', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'empresa-de-desenvolvimento-de-app', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'criar-aplicativo', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'criar-app', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'criar-aplicativo-empresa', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'software-sob-medida', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'desenvolvimento-de-software-sob-medida', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },
      { path: 'desenvolvimento-de-aplicativos-brasil', element: <Navigate to="/servicos/desenvolvimento-de-apps" replace /> },

      { path: '*', element: <NotFound /> },
    ],
  },
])
