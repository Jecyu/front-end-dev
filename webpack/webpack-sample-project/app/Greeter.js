// // 定义一个返回包含问候信息的html元素的函数，并根据CommonJS规范导出这个函数为一个模块
// const config = require('./config.json');
//
// module.exports = function() {
//     var greet =document.createElement('div');
//     greet.textContent = config.;
//     return greet;
// };

import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component {
    render() {
        return(
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter;