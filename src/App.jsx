import "./App.css";

function App() {
  return (
    <div>

<div className="title">Трикотажное платье в полоску</div>
    <div className="wrapper">
      
      <div className="image">
        <img
          src="https://i.pinimg.com/originals/fe/2b/42/fe2b429708018191d585bc74c187ad24.jpg"
          alt=""
          style={{width:"200px", borderRadius: "10px"}}
        />
      </div>
      <div className="descriptions">
        <div>
          <div className="colors-container">
            <p>Цвета в наличии</p>
            <div className="colors">
              <div style={{backgroundColor: "beige", width: "20px", height: "20px"}}></div>
              <div style={{backgroundColor: "pink", width: "20px", height: "20px", marginLeft: "15px"}}></div>
              <div style={{backgroundColor: "blue", width: "20px", height: "20px", marginLeft: "15px"}}></div>
              <div style={{backgroundColor: "black", width: "20px", height: "20px", marginLeft: "15px"}}></div>
            </div>
          </div>

          <div className="sizes">
            <p>Размеры в наличии</p>
            <p>XXS, XS, S, M, L, XL, XXL</p>
          </div>
        </div>
      </div>
    </div>



    <div className="title">Платье</div>
    <div className="wrapper">
      <div className="image">
        <img
          src="https://cdn.laredoute.com/cdn-cgi/image/width=1200,height=1200,fit=pad,dpr=1/products/d/d/3/dd37f11a2a7efc346d72025810f2c4e2.jpg"
          alt=""
          style={{width:"200px", height: "250px", borderRadius: "10px", objectFit: "cover"}}
        />
      </div>
      <div className="descriptions">
        <div>
          <div className="colors-container">
            <p>Цвета в наличии</p>
            <div className="colors">
              <div style={{backgroundColor: "beige", width: "20px", height: "20px"}}></div>
              <div style={{backgroundColor: "teal", width: "20px", height: "20px", marginLeft: "15px"}}></div>
              <div style={{backgroundColor: "yellow", width: "20px", height: "20px", marginLeft: "15px"}}></div>
              <div style={{backgroundColor: "gray", width: "20px", height: "20px", marginLeft: "15px"}}></div>
            </div>
          </div>

          <div className="sizes">
            <p>Размеры в наличии</p>
            <p>XXS, XS, S, M, L, XL, XXL</p>
          </div>
        </div>
      </div>
    </div>


    <div className="title">Вязанный топ</div>
    <div className="wrapper">
      <div className="image">
        <img
          src="https://i.pinimg.com/736x/97/eb/18/97eb1825cbf31aa43110ca0cec82e1da--top-knitting-summer-knitting.jpg"
          alt=""
          style={{width:"200px", borderRadius: "10px", objectFit: "cover"}}
        />
      </div>
      <div className="descriptions">
        <div>
          <div className="colors-container">
            <p>Цвета в наличии</p>
            <div className="colors">
              <div style={{backgroundColor: "red", width: "20px", height: "20px"}}></div>
              <div style={{backgroundColor: "blue", width: "20px", height: "20px", marginLeft: "15px"}}></div>
              <div style={{backgroundColor: "skyblue", width: "20px", height: "20px", marginLeft: "15px"}}></div>
              <div style={{backgroundColor: "gray", width: "20px", height: "20px", marginLeft: "15px"}}></div>
            </div>
          </div>

          <div className="sizes">
            <p>Размеры в наличии</p>
            <p>XXS, XS, S, M, L, XL, XXL</p>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}

export default App;