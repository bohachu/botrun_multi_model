import React from "react"

export default function index() {
  return (
    <div className="panel-container">
      <div className="form-container">
        <div className="form-item">
          <div className="field">選擇比較模型</div>
          <div className="value">
            <select name="" id="module-colet" className="collection">
              <option value="0">自選</option>
              <option value="1+2">組合 - SQL 語法分組</option>
              <option value="3+4">組合 - 寫程式碼組合</option>
              <option value="6+7">組合 - 文件推論組合</option>
            </select>

            <select name="" id="module-left">
              <option value="1">Qwen1.5-72b chat</option>
              <option value="2">Mixtral-8x7b</option>
              <option value="3">sqlcoder</option>
              <option value="4">codellama:34b-instruct</option>
              <option value="5">codellama:34b-python</option>
              <option value="6">llama2:70b-chat</option>
              <option value="7">llama2:13b-chat</option>
              <option value="8">vicuna:13b-16kt</option>
            </select>
            <select name="" id="module-right">
              <option value="1">Qwen1.5-72b chat</option>
              <option value="2">Mixtral-8x7b</option>
              <option value="3">sqlcoder</option>
              <option value="4">codellama:34b-instruct</option>
              <option value="5">codellama:34b-python</option>
              <option value="6">llama2:70b-chat</option>
              <option value="7">llama2:13b-chat</option>
              <option value="8">vicuna:13b-16kt</option>
            </select>
          </div>
        </div>
        <div className="form-item">
          <div className="field">提問</div>
          <div className="value">
            <textarea name="" id="" cols={30} rows={10}>
              我要寫一段vertica的語法 欄位請模型自定義，並請用繁體中文回答教學
              執行動機：了解住宅的屋齡分布狀況，產製2023年的次數分配表。
              1.串連地所代碼、段小段及建號，篩選出不重複的房屋 2.依房屋用途分類，篩選出住宅
              3.屋齡按十年分組，分類0-10年、11-20年…及50年以上和不詳
            </textarea>
          </div>
        </div>
      </div>
      <div className="fn-area">
        <button className="br-btn large full obvious">
          <span>提問</span>
        </button>
      </div>
    </div>
  )
}
