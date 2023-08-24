import { useContext } from "react"
import { ChatContext } from "./chatContext"

const useChatContext = () => {
	return useContext(ChatContext);
}

export { useChatContext };
