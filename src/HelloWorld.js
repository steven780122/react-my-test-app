import React, { Component } from 'react'

class HelloWorld extends Component {
    render() {
        return <h1>{this.props.text}</h1>      // JSX語法，把HTML中的各種標記，直接混在JavaScript程式碼中來
        //this是這個元件類別所產生的物件實體，props則代表屬性(property)的複數簡寫，也就是有可能有多個屬性，屬性這個東西，其實如果你懂HTML大概就很容易理解，像下面這樣的HTML標記:
        // 這裡是: 要把HelloWorld元件中的text屬性的值，顯示在這個位子上:
    }
}

export default HelloWorld