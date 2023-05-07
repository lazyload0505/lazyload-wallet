import { createRoot } from "react-dom/client"

const FontProperties = () => {
  return (
    <div>
      <h2>Font Properties</h2>
      <div>Welcome to <a href="chrome-extension://ajiigbpbofnkaobdliioieaifacedian/tabs/home.html" target="_blank">{ process.env.PLASMO_PUBLIC_NAME }</a> Extension. </div>
    </div>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<FontProperties />)