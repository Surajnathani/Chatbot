import { useContext } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Context } from "../../context/context";
import "./sidebar.css";

const Sidebar = () => {
  const {
    onSent,
    prevPrompts,
    setRecentPrompt,
    newChat,
    showSidebar,
    setShowSidebar,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <>
      <RiMenu2Fill
        onClick={() => setShowSidebar((prev) => !prev)}
        className="icon menuIcon"
      />
      {showSidebar ? (
        <section className="menuContainer">
          <main className="menu">
            <div onClick={() => newChat()} className="newChat">
              <IoAddOutline className="icon addIcon" />
              <p>New Chat</p>
            </div>
            <div className="allChats">
              <p>Recent</p>
              {prevPrompts?.map((prompt, index) => (
                <div
                  className="chats"
                  key={index}
                  onClick={() => loadPrompt(prompt)}
                >
                  <FiMessageSquare />
                  <p>{prompt.slice(0, 25)}</p>
                </div>
              ))}
            </div>
          </main>
        </section>
      ) : null}
    </>
  );
};

export default Sidebar;
