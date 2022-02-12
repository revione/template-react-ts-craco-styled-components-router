export function printVersionApp() {
  const fonts = [
    "Zapfino",
    "Trebuchet MS",
    "Rockwell",
    "Phosphate",
    "Herculanum",
    "Chalkduster",
  ]

  const randomFont = fonts[Math.floor(Math.random() * fonts.length)]

  console.log(
    `%c app version ${process.env.NEXT_PUBLIC_APP_VERSION} `,
    `color:#a5cdff; font:700 12px ${randomFont} ,san-serif;`
  )
}
