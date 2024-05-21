import { createRoot } from "react-dom/client"
import React from "react"

const root = createRoot(document.querySelector('#react-app'))

const h1 = <h1>Hello from React</h1>

root.render(h1)