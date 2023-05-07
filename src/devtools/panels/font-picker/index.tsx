import { createRoot } from "react-dom/client"

const FontPicker = () => {
  return (
    <>
      <h2>Font Picker</h2>
      <p>HELLO WORLD</p>
      <div>Welcome to <a href="chrome-extension://ajiigbpbofnkaobdliioieaifacedian/tabs/home.html" target="_blank">{ process.env.PLASMO_PUBLIC_NAME }</a> Extension. </div>
    </>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<FontPicker />)