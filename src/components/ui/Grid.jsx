function Grid({ rows, cols, items, size, gap, w, h, className, children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, ${size ?? '1fr'})`,
        gridTemplateColumns: `repeat(${cols}, ${size ?? '1fr'})`,
        placeItems: items,
        justifyContent: w,
        alignContent: h,
        gap: `${gap}px`
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default Grid
