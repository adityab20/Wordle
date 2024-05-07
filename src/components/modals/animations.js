import { createAnimation } from '@ionic/react'

export const enterAnimation = (baseEl) => {
  const root = baseEl.shadowRoot

  const backdropAnimation = createAnimation()
    .addElement(root?.querySelector('ion-backdrop'))
    .fromTo('opacity', '0.1', '0.8')

  const wrapperAnimation = createAnimation()
    .addElement(root?.querySelector('.modal-wrapper'))
    .keyframes([
      { offset: 0, opacity: '0', transform: 'scale(0.8)' },
      { offset: 0.65, opacity: '0.65', transform: 'scale(1.03)' },
      { offset: 1, opacity: '1', transform: 'scale(1)' }
    ])

  return createAnimation()
    .addElement(baseEl)
    .easing('linear')
    .duration(350)
    .addAnimation([backdropAnimation, wrapperAnimation])
}

export const leaveAnimation = (baseEl) => {
  return enterAnimation(baseEl).direction('reverse')
}
