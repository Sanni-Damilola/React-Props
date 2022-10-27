import React from "react";
import Card from "./Component/Card";
import Hero_page from "./Component/Hero_page";
import bg from "./asset/pexels-aleksandar-pasaric-2603464.jpg";
import Our_service from "./Our_service";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Hero_page />
      <Card
        but=""
        fd=""
        but_col=""
        br=""
        Hover_bg="value"
        button_text="No Love"
        bc="value"
        col=""
        text="trust the process"
        h1_text="All we have to decide is what to do with the time that is given us"
        p_text="It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all, in which case you have failed by default."
      />

      <Card
        bc=""
        but_col=""
        but=""
        br="value"
        Hover_bg=""
        button_text="Be Humble"
        fd="value"
        col="value"
        text="Fall seven times, stand up eight."
        h1_text="With the new day comes new strength and new thoughts."
        p_text="Do what you feel in your heart to be right, for you'll be criticized anyway. You'll be damned if you do and damned if you don't."
      />
      <Our_service />
      <Card
        but_col="value"
        but="value"
        bc=""
        br=""
        Hover_bg=""
        button_text="Play Dumb"
        fd="value"
        col="value"
        text="That man is richest whose pleasures are cheapest."
        h1_text="The successful warrior is the average man, with laser-like focus."
        p_text="Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
      />
      <Footer />
    </div>
  );
}

export default App;
