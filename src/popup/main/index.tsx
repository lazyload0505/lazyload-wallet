import { useState } from "react"

import './style.scss'

function MainView() {
  const [data, setData] = useState("")
  //TODO: get the extension id. 
  const runtimeID = chrome.runtime.id
  const alink = "chrome-extension://" + runtimeID + "/tabs/home.html"
  return (
    <div className="content">
      <h1>
        Main: Welcome to <a href={alink} target="_blank">{ process.env.PLASMO_PUBLIC_NAME }</a> Extension. 
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <footer>Crafted by @lazyloadbox.</footer>
    </div>
  )
}

export default MainView
