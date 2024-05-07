import { IonRippleEffect } from '@ionic/react'
import classNames from 'classnames'

function Button({ className, disabled, onClick, children }) {
  return (
    <button className={classNames(className, 'ion-activatable ripple-parent')} disabled={disabled} onClick={onClick}>
      <IonRippleEffect />
      {children}
    </button>
  )
}

export default Button
