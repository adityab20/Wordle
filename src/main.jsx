import { createRoot } from 'react-dom/client'
import { setupIonicReact, IonApp } from '@ionic/react'
import Router from 'src/routes/Router'
import 'src/locales'
import 'src/assets/styles'

setupIonicReact({ mode: 'md' })

const rootElem = document.getElementById('root')
const root = createRoot(rootElem)

root.render(
  <IonApp>
    <Router />
  </IonApp>
)
