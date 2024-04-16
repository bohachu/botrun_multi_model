export const models = {
  list: [
    "Qwen1.5-72b chat",
    "Mixtral-8x7b",
    "sqlcoder",
    "codellama:34b-instruct",
    "codellama:34b-python",
    "llama2:70b-chat",
    "llama2:13b-chat",
    "vicuna:13b-16kt",
  ],
  pairs: [
    {
      name: "組合 - SQL 語法分組",
      models: {
        model1: "Qwen1.5-72b chat",
        model2: "Mixtral-8x7b",
      },
    },
    {
      name: "組合 - 寫程式碼組合",
      models: {
        model1: "sqlcoder",
        model2: "codellama:34b-instruct",
      },
    },
    {
      name: "組合 - 文件推論組合",
      models: {
        model1: "llama2:70b-chat",
        model2: "vicuna:13b-16kt",
      },
    },
  ],
}
