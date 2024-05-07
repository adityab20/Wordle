import { IonReactRouter } from '@ionic/react-router'
import { IonRouterOutlet } from '@ionic/react'
import { Route } from 'react-router-dom'
import { useThemes } from 'src/hooks'
import { Home } from 'src/pages'

const base = import.meta.env.VITE_BASE_URL

function Router() {
  useThemes()

  return (
    <IonReactRouter basename={base}>
      <IonRouterOutlet basePath={base}>
        <Route exact path="/" component={Home} />
      </IonRouterOutlet>
    </IonReactRouter>
  )
}

export default Router
