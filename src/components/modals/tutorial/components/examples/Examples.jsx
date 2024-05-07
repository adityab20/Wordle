import Example from './Example'

function Examples() {
  const examples = ['correct', 'present', 'absent']

  return (
    <>
      {examples.map((example) => (
        <Example key={example} type={example} />
      ))}
    </>
  )
}

export default Examples
