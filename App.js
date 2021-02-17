import React from "react"
import mainCompoData from "./components/mainCompoData"
import Content from "./components/Content"
import Header from "./components/Header"
import Footer from "./components/Footer"


class App extends React.Component{
    
    constructor(){
        super();
        this.state = {
            contents: mainCompoData,
            counts: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    changeTextSize(){
        document.body.style.fontSize += document.body.style.fontSize + 2;
    }

    changeBackgroundColor(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        document.body.style.background = bgColor;
    }

    clickCount(){
        this.setState(prevState => {
            return{
                counts: prevState.counts + 1
            }
        });
    }

    hideText(){
        if(this.state.contents.isSelected){
            document.body.style.display="hidden";
            this.state.contents.isSelected = !this.state.contents.isSelected;
        }
        document.body.style.display= "block";
    }

    render(){
        const contentItems = this.state.contents.map(item => <Content key={item.id} item={item}/>) 
        return(
            <div>
                <Header/>
                {contentItems}
                <Footer/>
            </div>
        )
    }
}
export default App
