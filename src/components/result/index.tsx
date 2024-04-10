import React from "react"

export default function index() {
  return (
    <div className="result-container">
      <ul id="tabs-nav" className="tabs-nav">
        <li className="tab-nav --active">
          <span>Qwen1.5-72b chat</span>
          <div className="close-tab-btn">
            <i></i>
          </div>
        </li>
        <li className="tab-nav">
          <span>Mixtral-8x7b </span>
          <div className="close-tab-btn">
            <i></i>
          </div>
        </li>
      </ul>
      <div id="tabs-content" className="tabs-content">
        <div className="tab-content">
          <div className="br-chat-display">
            <div className="br-chat-item">
              <div className="avatar-block">
                <div className="name">
                  提問 <strong>1</strong>
                </div>
              </div>
              <div className="br-chat-block">
                <div className="markdown-wrapper">
                  <p>
                    我要寫一段vertica的語法 <br />
                    欄位請模型自定義，並請用繁體中文回答教學 <br />
                    執行動機：了解住宅的屋齡分布狀況，產製2023年的次數分配表。 <br />
                    1.串連地所代碼、段小段及建號，篩選出不重複的房屋 <br />
                    2.依房屋用途分類，篩選出住宅 <br />
                    3.屋齡按十年分組，分類0-10年、11-20年…及50年以上和不詳 <br />
                  </p>
                </div>
              </div>
              <div className="br-chatfn-block">
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-26"></i>
                </button>
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-30"></i>
                </button>
              </div>
            </div>

            <div className="br-chat-item">
              <div className="avatar-block">
                <div className="name">
                  回答 <strong>1</strong>
                </div>
              </div>
              <div className="br-chat-block">
                <div>
                  <div className="code-style-container">
                    <div className="code-style-top">
                      <strong>sql</strong>
                      <div className="fn">
                        <button className="br-btn icon-only square no-border">
                          <i className="icon icon-26"></i>
                        </button>
                      </div>
                    </div>
                    <div className="code-style-body">
                      <pre>
                        <code>
                          Vertica的查詢語法可以這樣寫: sql -- Step 1:篩選不重複的房屋 WITH
                          unique_houses AS ( SELECT DISTINCT 地所代碼 ||段小段||建號AS unique_code
                          FROM 房屋資料表 ) -- Step 2: 依房屋用途篩選住宅 SELECT 房屋用途 FROM
                          房屋資料表 WHERE 房屋用途=‘住宅’ -- Step 3:將屋齡分組 SELECT CASE WHEN
                          屋齡 BETWEEN 0 AND 10 THEN'0-10年' WHEN 屋龄 BETWEEN 11 AND 20
                          THEN'11-20年’ WHEN 屋齡 BETWEEN 21 AND 30 THEN'21-30年’ WHEN 屋龄 BETWEEN
                          31 AND 40 THEN'31-40年’ WHEN 屋龄 BETWEEN 41 AND 50 THEN'41-50年’ WHEN
                          屋龄&gt;50 THEN'50年以上 ELSE'不詳' END AS 屋齡組別, COUNT(*) AS 次數 FROM
                          unique_houses JOIN 房屋資料表ON
                          unique_houses.unique_code=房屋資料表.地所代碼||段小段||建號 WHERE
                          房屋用途=‘住宅’
                        </code>
                      </pre>
                    </div>
                    <div className="code-style-bottom">Boosted by Botrun.ai</div>
                  </div>
                </div>
              </div>
              <div className="br-chatfn-block">
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-26"></i>
                </button>
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-30"></i>
                </button>
              </div>
            </div>

            <div className="br-chat-item system">
              <div className="avatar-block">
                <div className="name">系統</div>
              </div>
              <div className="br-chat-block">
                <div className="markdown-wrapper">
                  <p>第1段問答結束</p>
                </div>
              </div>
            </div>

            <div className="br-chat-item">
              <div className="avatar-block">
                <div className="name">
                  提問 <strong>2</strong>
                </div>
              </div>
              <div className="br-chat-block">
                <div className="markdown-wrapper">
                  <p>
                    如何做出CSS漸變從左側的黑色（#000）到右側的50%處開始變為白色（#fff），然後從50%到100%仍然是白色。這樣就創造了一個分割為黑色和白色的背景效果。請注意，height:
                    100vh;
                    代表視窗(viewport)的100%高度。你可以根據需要調整這個高度值以適應你的頁面或元件的實際需求。
                  </p>
                </div>
              </div>
              <div className="br-chatfn-block">
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-26"></i>
                </button>
              </div>
            </div>
            <div className="br-chat-item">
              <div className="avatar-block">
                <div className="name">
                  回答 <strong>2</strong>
                </div>
              </div>
              <div className="br-chat-block">
                <div className="br-init">
                  <div className="loader-container">
                    <span className="loader"></span>
                  </div>
                  <span className="bling">
                    <strong>Qwen1.5-72b chat</strong> 回答中
                  </span>
                </div>
              </div>
              <div className="br-chatfn-block">
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-26"></i>
                </button>
              </div>
            </div>

            <div className="br-chat-item system">
              <div className="avatar-block">
                <div className="name">系統</div>
              </div>
              <div className="br-chat-block">
                <div className="markdown-wrapper">
                  <p>第2段問答結束</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="br-chat-display">
            <div className="br-chat-item">
              <div className="avatar-block">
                <div className="name">
                  提問 <strong>1</strong>
                </div>
              </div>
              <div className="br-chat-block">
                <div className="markdown-wrapper">
                  <p>
                    我要寫一段vertica的語法 <br />
                    欄位請模型自定義，並請用繁體中文回答教學 <br />
                    執行動機：了解住宅的屋齡分布狀況，產製2023年的次數分配表。 <br />
                    1.串連地所代碼、段小段及建號，篩選出不重複的房屋 <br />
                    2.依房屋用途分類，篩選出住宅 <br />
                    3.屋齡按十年分組，分類0-10年、11-20年…及50年以上和不詳 <br />
                  </p>
                </div>
              </div>
              <div className="br-chatfn-block">
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-26"></i>
                </button>
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-24"></i>
                </button>
              </div>
            </div>

            <div className="br-chat-item">
              <div className="avatar-block">
                <div className="name">
                  回答 <strong>1</strong>
                </div>
              </div>
              <div className="br-chat-block">
                <div>
                  <div className="code-style-container">
                    <div className="code-style-top">
                      <strong>sql</strong>
                      <div className="fn">
                        <button className="br-btn icon-only square no-border">
                          <i className="icon icon-26"></i>
                        </button>
                      </div>
                    </div>
                    <div className="code-style-body">
                      <pre>
                        <code>
                          Vertica的查詢語法可以這樣寫: sql -- Step 1:篩選不重複的房屋 WITH
                          unique_houses AS ( SELECT DISTINCT 地所代碼 ||段小段||建號AS unique_code
                          FROM 房屋資料表 ) -- Step 2: 依房屋用途篩選住宅 SELECT 房屋用途 FROM
                          房屋資料表 WHERE 房屋用途=‘住宅’
                        </code>
                      </pre>
                    </div>
                    <div className="code-style-bottom">Boosted by Botrun.ai</div>
                  </div>
                </div>
              </div>
              <div className="br-chatfn-block">
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-26"></i>
                </button>
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-30"></i>
                </button>
              </div>
            </div>

            <div className="br-chat-item system">
              <div className="avatar-block">
                <div className="name">系統</div>
              </div>
              <div className="br-chat-block">
                <div className="markdown-wrapper">
                  <p>第1段問答結束</p>
                </div>
              </div>
            </div>

            <div className="br-chat-item">
              <div className="avatar-block">
                <div className="name">
                  提問 <strong>2</strong>
                </div>
              </div>
              <div className="br-chat-block">
                <div className="markdown-wrapper">
                  <p>
                    如何做出CSS漸變從左側的黑色（#000）到右側的50%處開始變為白色（#fff），然後從50%到100%仍然是白色。這樣就創造了一個分割為黑色和白色的背景效果。請注意，height:
                    100vh;
                    代表視窗(viewport)的100%高度。你可以根據需要調整這個高度值以適應你的頁面或元件的實際需求。
                  </p>
                </div>
              </div>
              <div className="br-chatfn-block">
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-26"></i>
                </button>
              </div>
            </div>
            <div className="br-chat-item">
              <div className="avatar-block">
                <div className="name">
                  回答 <strong>2</strong>
                </div>
              </div>
              <div className="br-chat-block">
                <div className="br-init">
                  <div className="loader-container">
                    <span className="loader"></span>
                  </div>
                  <span className="bling">
                    <strong>Mixtral-8x7b</strong> 回答中
                  </span>
                </div>
              </div>
              <div className="br-chatfn-block">
                <button className="br-btn icon-only square no-border">
                  <i className="icon icon-26"></i>
                </button>
              </div>
            </div>
            <div className="br-chat-item system">
              <div className="avatar-block">
                <div className="name">系統</div>
              </div>
              <div className="br-chat-block">
                <div className="markdown-wrapper">
                  <p>第2段問答結束</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fn-bar">
        <button id="btn-save" className="br-btn large">
          <i className="icon icon-31"></i>
          <span>下載CSV</span>
        </button>
      </div>
    </div>
  )
}
