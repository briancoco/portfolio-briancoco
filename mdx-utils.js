function CustomH1({ children }) {
  return <h1 className='text-4xl font-bold'>{children}</h1>
}

function CustomH2({ children }) {
  return <h2 className='text-2xl font-bold'>{children}</h2>
}

export const overrideComponents = {
  h1: CustomH1,
  h2: CustomH2
}
