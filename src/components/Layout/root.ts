import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    /**
   * Typography config
   */
    --font-size-base: 16px;
    --font-family-base: "Inter", BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    --font-line-height-base: 1.7;

    /**
   * Colors
   */
    --color-background: 255,255,255;
    --color-foreground: 0,0,0;
    --color-main-heading: hsl(201, 10%, 60%);
    --color-grey-1: hsl(201, 20%, 45%);
    --color-grey-2: hsl(201, 30%, 20%);
    --color-cta: hsl(201, 100%, 35%);

    /**
   * Grid config
   */
    --grid-width: 60rem;
    --grid-column: 1;
    --grid-gutter: 1.25rem;
  }

  /**
 * > small
 */
  @media (min-width: 576px) {
    :root {
      /* Grid */
      --grid-column: 6;
    }
  }

  /**
 * > Medium
 */
  @media (min-width: 769px) {
    :root {
      /* Grid */
      --grid-column: 12;
    }
  }

  body {
    padding-left: calc(var(--grid-gutter) / 2);
    padding-right: calc(var(--grid-gutter) / 2);

    margin-left: auto;
    margin-right: auto;

    width: 100%;
    max-width: var(--grid-width);
    overflow-x: hidden;
  }
`
