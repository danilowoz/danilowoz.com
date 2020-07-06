declare namespace JSX {
  interface AmpImg {
    alt?: string
    src?: string
    width?: string
    height?: string
    layout?: string
  }
  interface IntrinsicElements {
    'amp-img': AmpImg
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    'amp-analytics': any
  }
}
