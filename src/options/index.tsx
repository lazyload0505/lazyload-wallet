import { useState } from "react"

function IndexOptions() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
      Welcome to <a href="chrome-extension://ajiigbpbofnkaobdliioieaifacedian/tabs/home.html" target="_blank">{ process.env.PLASMO_PUBLIC_NAME }</a> Extension. 
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <footer>Crafted by @lazyloadbox</footer>
    </div>
  )
}

export default IndexOptions
