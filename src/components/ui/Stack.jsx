function Stack({ row, col, x, y, gap, className, children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: (row && 'row') || (col && 'column'),
        justifyContent: x,
        alignItems: y,
        gap: `${gap}px`
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default Stack
