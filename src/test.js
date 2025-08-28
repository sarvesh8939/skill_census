// import { GoogleGenAI, Type } from "@google/genai";

// const ai = new GoogleGenAI({
//   apiKey: "AIzaSyBGkur6VC5Cd7fOb3SJyBSzFZDj89sFKxs",
// });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents:
//       "List the latest popular posts and news about AI.",
//     config: {
//       responseMimeType: "application/json",
//       responseSchema: {
//         type: Type.ARRAY,
//         items: {
//           type: Type.OBJECT,
//           properties: {
//             post_title: {
//               type: Type.STRING,
//             },
//             post_summary: {
//               type: Type.STRING,
//             },
//             post_upload_date: {
//               type: Type.STRING,
//             },
//             post_source_link: {
//               type: Type.STRING,
//             },
//           },
//           propertyOrdering: [
//             "post_title",
//             "post_summary",
//             "post_upload_date",
//             "post_source_link",
//           ],
//         },
//       },
//     },
//   });

//   console.log(response.text);
// }

// main();

async function search() {
    const url = "https://api.perplexity.ai/chat/completions";
    const req_data = {
      model: "sonar-pro",
      messages: [
        {
          role: "user",
          content:
            "List the latest popular 5 posts and news about AI. Include one line post title,post sample thumbnail picture can use unplash also , two line post summary, post uploaded date and post source link.",
        },
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          schema: {
            type: "object",
            properties: {
              education: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    post_title: { type: "string" },
                    post_thumbnail: { type: "string" },
                    post_summary: { type: "string" },
                    post_upload_date: { type: "string" },
                    post_source_link: { type: "string" },
                  },
                  required: [
                    "post_title",
                    "post_thumbnail",
                    "post_summary",
                    "post_upload_date",
                    "post_source_link",
                  ],
                },
              },
            },
            required: ["education"],
          },
        },
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify(req_data),
    });
    const data = await response.json();
    // setArticles(data);
    console.log(data.choices[0].message.content);
    // console.log(articles);
  }

  // search();


  async function search(selectedValue) {
    const url = `https://newsapi.org/v2/everything?q=${selectedValue}&sortBy=publishedAt&apiKey=0442dbc2127846d78265a93a3edfe509`;
    // 8c15607f61e64f44b4dcef8b0080b02f
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
    // console.log(data.choices[0].message.content);
    // console.log(articles);
  }