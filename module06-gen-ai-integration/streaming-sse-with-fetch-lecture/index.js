const form = document.querySelector("form");
const resultsContainer = document.querySelector("#results");

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
          messages: [
            {
              role: "system",
              content:
                "You are a software developer student that only speaks in rhymes",
            },
            {
              role: "user",
              content: promptValue,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      //   console.log(response);
      const { error } = await response.json();
      throw new Error(error);
    }

    if (streamValue) {
      const reader = response.body.getReader();
      // console.log(response.body);

      const decoder = new TextDecoder("utf-8");

      let dataResult = "";

      const p = document.createElement("p");
      resultsContainer.appendChild(p);

      let isDone = false;

      while (!isDone) {
        const result = await reader.read();

        if (result.done) {
          isDone = true;
          break;
        }
        // console.log(result);

        const chunk = decoder.decode(result.value, { stream: true });
        // console.log(chunk);

        const lines = chunk.split("\n");
        // console.log(lines);

        lines.forEach((line) => {
          if (line.startsWith("data:")) {
            const jsonStr = line.replace("data:", "");

            const data = JSON.parse(jsonStr);
            // console.log(data);

            const content = data.choices[0]?.delta?.content;
            // console.log(content);

            if (content) {
              dataResult += content;

              const md = marked.parse(dataResult);

              p.innerHTML = md;

              Prism.highlightAll();
            }
          }
        });
      }
    } else {
      const dataResult = await response.json();

      resultsContainer.innerHTML = `<p>${marked.parse(
        dataResult.message?.content
      )}</p>`;

      Prism.highlightAll();
    }
  } catch (error) {
    console.error(error);
  } finally {
    submit.disabled = false;
    submit.classList.remove(
      "bg-gray-500",
      "hover:bg-gray-500",
      "cursor-not-allowed"
    );
    stream.disabled = false;
  }
});
