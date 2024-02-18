import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
const blog = import.meta.glob("../blog/*.md");

export async function getStaticPaths() {
  const values = Object.values(blog);
  const params = [];

  for (let item of values) {
    const { frontmatter, url } = await item();

    params.push({
      params: { slug: url.replace("/blog/", "") },
      props: frontmatter,
    });
  }

  return params;
}

export const get: APIRoute = async function get({ params, request, props }) {
  const interData = await fetch(
    "https://fonts.cdnfonts.com/s/19795/Inter-Regular.woff"
  );
  const merriData = await fetch(
    "https://fonts.cdnfonts.com/s/12231/Merriweather-Regular.woff"
  );
  const inter = await interData.arrayBuffer();
  const merri = await merriData.arrayBuffer();

  const svg = await satori(
    {
      type: "div",
      props: {
        children: [
          {
            type: "img",
            props: {
              style: { position: "absolute", left: "1.3em", top: "4em" },
              width: 30,
              src: "data:image/png;base64,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",
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 64,
                width: "100%",
                fontFamily: "Merriweather",
              },
              children: props.title,
            },
          },
          {
            type: "div",
            props: {
              style: {
                color: "rgb(83, 83, 83)",
                width: "80%",
                lineHeight: 1.4,
              },
              children: props.tagline,
            },
          },

          {
            type: "div",
            props: {
              style: {
                color: "rgb(83, 83, 83)",
                width: "100%",
                position: "absolute",
                bottom: "2em",
                left: "4em",
              },
              children: "danilowoz.com",
            },
          },
        ],
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          fontSize: 32,
          padding: "4em 2em 2em 4em",
          gap: "1em",
          fontFamily: "Inter",
        },
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: inter,
          weight: 400,
          style: "normal",
        },
        {
          name: "Merriweather",
          data: merri,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
