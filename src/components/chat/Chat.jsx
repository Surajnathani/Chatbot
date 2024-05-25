import { useContext } from "react";
import { GiAirplaneDeparture, GiOpenBook, GiRiceCooker } from "react-icons/gi";
import { GoMortarBoard } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import { Context } from "../../context/context";
import "./chat.css";

const Chat = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <section className="chatContainer">
      <div className="header">
        <h2>ChatBot</h2>
        <img src="./logo.jpg" className="logoImage" />
      </div>
      <div className="chatBox">
        <div className="allChatDetails">
          {!showResult ? (
            <div className="newChatsContainer">
              <div className="newChats">
                <GoMortarBoard className="newChatIcon" />
                <p>Tell Me a Fantasy Adventure Story</p>
              </div>
              <div className="newChats">
                <GiRiceCooker className="newChatIcon" />
                <p>Find a Recipe with My Ingredients</p>
              </div>
              <div className="newChats">
                <GiOpenBook className="newChatIcon" />
                <p>Book Recommendations</p>
              </div>
              <div className="newChats">
                <GiAirplaneDeparture className="newChatIcon" />
                <p>Travel Destination Suggestions</p>
              </div>
            </div>
          ) : (
            <>
              <p className="user">{recentPrompt}</p>
              {loading ? (
                <div className="loading">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="bot"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </>
          )}
        </div>
        <div className="input">
          <button
            className="sendIcon"
            onClick={() => onSent()}
            disabled={loading || input.trim() === ""}
          >
            <IoSend className="icon" />
          </button>
          <input
            contentEditable="true"
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Enter a prompt here"
          />
        </div>
      </div>
    </section>
  );
};

export default Chat;
