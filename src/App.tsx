import { Routes, Route } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import { useRecoilValue } from "recoil"
import { userAuthState } from "@utils/atoms"
import Compare from "@components/index"
import Login from "@components/Login"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  const user = useRecoilValue(userAuthState)

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {user !== null ? (
          <Route path="/" element={<Compare />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </QueryClientProvider>
  )
}

export default App
