/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'
import { useAmp } from 'next/amp'

const CodeBlock = ({
  children,
  className = 'js',
}: {
  children: string
  className: string
}) => {
  const language = className.replace(/language-/, '') as Language

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Image = (props: any) => {
  const isAmp = useAmp()

  return isAmp ? (
    <amp-img
      layout="responsive"
      src={props.src}
      alt={props.alt}
      height={props.height}
      width={props.width}
    />
  ) : (
    <img {...props} />
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components = { code: CodeBlock, img: Image } as any

const MDXContext: React.FC = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}

export { MDXContext }
