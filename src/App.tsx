import { Routes, Route } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import { useRecoilValue } from "recoil"
import { authUserState } from "@utils/atoms"
import Compare from "@components/index"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  const user = useRecoilValue(authUserState)

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {user !== null ? (
          <Route path="/" element={<Compare />} />
        ) : (
          <Route path="*" element={<div>Login</div>} />
        )}
      </Routes>
    </QueryClientProvider>
  )
}

export default App
