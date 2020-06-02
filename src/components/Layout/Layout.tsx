import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

import 'wipe.css'
import './root.css'
import './typography.css'

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

const components = { code: CodeBlock } as any

const Layout: React.FC = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export { Layout }
