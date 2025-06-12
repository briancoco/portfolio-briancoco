export function useMDXComponents(components) {
  //we can modify markdown styles here
  return {
    h1: ({ children }) => (
      <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>
    ),
    ...components,
  }
}