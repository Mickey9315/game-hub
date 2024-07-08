import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import "./index.css"
import { ColorModeScript } from "@chakra-ui/react"
import theme from "./theme"
import * as React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { RouterProvider } from "react-router-dom"
import router from "./routes"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)
