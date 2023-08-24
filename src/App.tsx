import { ChatProvider } from "./modules/Home/context/ChatProvider";
import { router } from "./shared/routes/index.routes";
import { RouterProvider } from "react-router-dom";

function App() {

  return (
    <>
		<ChatProvider>
      <RouterProvider router={router} />
		</ChatProvider>
    </>
  )
}

export default App
