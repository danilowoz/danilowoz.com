import React from 'react'
import styled, { css } from 'styled-components'

import removeEmoji from '../../utils/removeEmoji'
import * as T from '../typography'

const Container = styled.div`
  height: 0;
  position: sticky;
  top: 6em;
  display: none;
  max-width: 300px;

  @media (min-width: 1200px) {
    display: block;
    opacity: 0;
    transition: var(--transitionEase);

    ${({ show }) =>
      show &&
      css`
        opacity: 1;
      `}
  }
`
const Wrapper = styled.div`
  border-left: 1px solid var(--background);
  margin-left: 20px;
  position: relative;
`

const Progress = styled.div`
  width: 1px;
  background: var(--foreground);
  position: absolute;
  top: 0;
  left: 0;
  transition: var(--transitionCubic);
`

const Divisor = styled.div`
  margin-left: 20px;
`

const Link = styled.a`
  ${T.labelStyle}
  margin-bottom: 0.5em;

  &:hover {
    color: var(--main);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--main);
    `}
`

const WINDOW_HEIGHT = window.innerHeight

const Item = React.memo(({ item, activeItems }) => {
  const isActive =
    activeItems.findIndex(e => e === item.url.replace('#', '')) !== -1

  return (
    <Divisor>
      <Link isActive={isActive} href={item.url}>
        {item.title}
      </Link>
      {item.items &&
        item.items.map(subItems => (
          <Item item={subItems} activeItems={activeItems} />
        ))}
    </Divisor>
  )
})

const TableOfContents = React.memo(({ tableOfContents }) => {
  // refs
  const [blogHeaderSelector, setBlogHeaderSelector] = React.useState()
  const [tableOfContentsRefs, setTableOfContentsRefs] = React.useState()

  // states
  const [show, setShow] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [activeItems, setActiveItems] = React.useState([])

  const handleMenuActive = menuRefs => {
    const onlyActiveItems = menuRefs
      .filter(item => item.getBoundingClientRect().top < WINDOW_HEIGHT / 2)
      .map(e => e.id)

    setActiveItems(onlyActiveItems)
    setProgress(29.3 * onlyActiveItems.length)
  }

  const handleShow = header => {
    const { top, height } = header.getBoundingClientRect()

    setShow(document.documentElement.scrollTop > top + height)
  }

  const checkScroll = () => {
    if (blogHeaderSelector && tableOfContentsRefs) {
      handleShow(blogHeaderSelector)
      handleMenuActive(tableOfContentsRefs)
    }
  }

  React.useEffect(() => {
    const refs = tableOfContents.items
      .reduce((prev, curr) => {
        prev.push(curr.url)

        if (Array.isArray(curr.items)) {
          curr.items.forEach(e => {
            prev.push(e.url)
          })
        }

        return prev
      }, [])
      .map(slug => {
        return document.querySelector(slug)
      })

    setTableOfContentsRefs(refs)
    setBlogHeaderSelector(document.querySelector('#blog-header'))
  }, [tableOfContents.items, tableOfContentsRefs])

  React.useEffect(() => {
    document.addEventListener('scroll', checkScroll)

    return () => document.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

  const renderProgressAndItems = React.useMemo(() => {
    return (
      <>
        <Progress style={{ height: `${progress}px` }} />
        {tableOfContents.items.map(item => (
          <Item item={item} activeItems={activeItems} />
        ))}
      </>
    )
  }, [progress, tableOfContents.items, activeItems])

  return (
    <Container show={show}>
      <Wrapper>{renderProgressAndItems}</Wrapper>
    </Container>
  )
})

export default TableOfContents
