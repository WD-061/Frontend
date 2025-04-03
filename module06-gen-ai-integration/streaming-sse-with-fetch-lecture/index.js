const form = document.querySelector("form");
const resultsContainer = document.querySelector("#results");
const messages = [
  {
    id: crypto.randomUUID(),
    role: "system",
    content: "You are a software developer student that only speaks in rhymes",
  },
];

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const {
      prompt: { value: promptValue },
      stream: { checked: streamValue },
      submit,
    } = form.elements;

    if (!promptValue) return alert("Please enter a prompt");

    resultsContainer.innerHTML = "";

    submit.disabled = true;
    submit.classList.add(
      "bg-gray-500",
      "hover:bg-gray-500",
      "cursor-not-allowed"
    );
    stream.disabled = true;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: promptValue,
    };

    messages.push(userMessage);

    // console.log("Messages inside request: ", messages);

    const response = await fetch(
      "http://localhost:5050/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "development",
          provider: "open-ai",
        },
        body: JSON.stringify({
          model: "gpt-4o",
          stream: streamValue,
          messages,
        }),
      }
    );

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    if (streamValue) {
      // console.log("Response: ", response);

      const reader = response.body.getReader();
      //   console.log("Reader: ", reader);

      const decoder = new TextDecoder("utf-8");

      let dataResult = "";

      const assistantMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "",
      };

      const p = document.createElement("p");
      resultsContainer.appendChild(p);

      let isDone = false;

      while (!isDone) {
        const result = await reader.read();

        if (result.done) {
          isDone = true;
          break;
        }
        //   console.log("Result: ", result);

        const chunk = decoder.decode(result.value, { stream: true });
        //   console.log("Chunk: ", chunk);

        const lines = chunk.split("\n");
        //   console.log("Lines: ", lines);

        lines.forEach((line) => {
          if (line.startsWith("data:")) {
            const jsonStr = line.replace("data:", "");

            const data = JSON.parse(jsonStr);
            //   console.log("Data: ", data);

            const content = data.choices[0]?.delta?.content;
            //   console.log("Content: ", content);

            if (content) {
              dataResult += content;
              assistantMessage.content += content;

              const messageExists = messages.some(
                (msg) => msg.id === assistantMessage.id
              );

              if (!messageExists) {
                // const updatedMsgs = [...messages, asstMsg];
                messages.push(assistantMessage);
              }

              //   console.log("Data Result: ", dataResult);

              const md = marked.parse(dataResult);

              p.innerHTML = md;

              Prism.highlightAll();
            }
          }
        });
      }
    } else {
      const data = await response.json();

      const assistantMessage = { ...data.message, id: crypto.randomUUID() };
      messages.push(assistantMessage);

      resultsContainer.innerHTML = `<p>${marked.parse(
        data.message?.content
      )}</p>`;

      Prism.highlightAll();
    }
  } catch (error) {
    console.error(error);
  } finally {
    // console.log("Messages after response: ", messages);

    submit.disabled = false;
    submit.classList.remove(
      "bg-gray-500",
      "hover:bg-gray-500",
      "cursor-not-allowed"
    );
    stream.disabled = false;
  }
});
