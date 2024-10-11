import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ResearchQueryComponent = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userMessage = { role: "user", content: query };

    // Update the response with the user's message
    setResponse((prevMessages) => [...prevMessages, userMessage]);

    try {
      const apiResponse = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [...response, userMessage],
        },
        {
          headers: {
            Authorization: `Bearer ${"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"}`, // Ensure the key is set correctly
            "Content-Type": "application/json", // Add content type
          },
        }
      );

      const botMessage = {
        role: "assistant",
        content: apiResponse.data.choices[0].message.content,
      };

      // Update the response with the bot's message
      setResponse((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Update the response with an error message
      setResponse((prevMessages) => [
        ...prevMessages,
        {
          role: "error",
          content: "Error occurred while fetching data. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-purple-900 ">
      {" "}
      <Navbar />
      <div className="w-full pt-20"><div className="border mx-auto w-[90%]    flex p-4 flex-col items-center min-h-screen h-auto ">
        <h2 className="text-white text-2xl ">Researcher Ai</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full p-2 mx-auto flex gap-6 md:flex-row flex-col items-center"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter research topic..."
            required
            className="outline-none p-2 rounded-md w-full "
          />
          <button
            type="submit"
            disabled={loading}
            className="border rounded-full p-1 font-bold hover:border-purple-600  w-[20%]"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
        <div className="  items-center flex flex-col justify-center">
          {response.map((message, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                alignSelf: message.role === "user" ? "" : "flex-end",
              }}
            >
              <p style={styles.text}>{message.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div></div>
      
  );
};

const styles = {
  message: {
    display: "flex",
    margin: "10px 0",
  },
  text: {
    padding: "10px",
    borderRadius: "5px",
    border: "2px solid green ",
    backgroundColor: "#f1f1f1",
  },
};

export default ResearchQueryComponent;
