/**
 * @Author: Jecyu
 * @Date: 2017-11-02 9:04:46 am 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-11-02 9:09:50 am 
 */

'use strict';

// 引入全局对象
import g from '../../global'

// 引入html模版,会被作为字符串引入
import template from './index.html'

// 引入css，会生成<style>块插入到<head>头中
import './style.css'

// 导出类
export default class {
    mount(container) {
        document.title = 'foo';
        container.innerHTML = template;
        container.querySelector('.foo_gobar').addEventListener('click', () => {
            // 调用router.go方法加载 /bar页面
            g.router.go('/bar');
        })
    }
}