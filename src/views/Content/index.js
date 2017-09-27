import React from 'react';
import Helmet from 'react-helmet';
import style from './index.css'

const Home = () => (
  <section>
    <Helmet title={'CONTENT'}/>
    <div className={style.content}>
      <div className="inner topic">
        <div className="topic_content">
          <div className="markdown-text">
            <p><img src="//dn-cnode.qbox.me/FlwW5i2h_UuKpnBXXvD3AqyrwjHP" alt="untitled4.png"/></p>
            <h1>饿了么大前端 Node.js 进阶教程</h1>
            <p>因为 2016 年面试了很多做 Node.js 的同学，发现大部分做 Node 的同学都是前端转过来的，对后端的知识大多一片空白。所以很难招到比较好的 Node.js 服务端程序员（注意，不是全栈）。</p>
            <p>于是出于我们一贯的开源与分享精神，我们筹备了这个名字叫《如何通过饿了么 Node.js 面试》的开源的 Node.js 进阶教程。</p>
            <p>github 仓库地址：<a href="https://github.com/ElemeFE/node-interview" target="_blank">https://github.com/ElemeFE/node-interview</a>
            </p>
            <h3>导读</h3>
            <p>本教程包含 2~3 年经验的 Node.js 服务端需要知道的知识点。</p>
            <p>需要注意的是, 并不适用于零基础的同学, 你需要有一定的 JavaScript/Node.js 基础, 并且有一定的工作经验. 另外本教程的重点更准确的说是服务端基础中 Node.js
              程序员需要了解的部分.</p>
            <p>稳重将一些常见的问题划分归类, 每类标明涵盖的一些<code>覆盖点</code>, 并且列举几个<code>常见问题</code>, 通常这些问题都是 2~3 年工作经验需要了解或者面对的.
              如果你对某类问题感兴趣, 或者想知道其中列举问题的答案, 可以通过该类下方的 <code>阅读更多</code> 查看更多的内容.</p>
            <p>整体上大纲列举的并不是很全面, 细节上覆盖率不高, 很多讨论只是点到即止, 希望大家带着问题去思考.</p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/js-basic.md"
                   target="_blank">Js 基础问题</a></h2>
            <blockquote>
              <p>与前端 Js 不同, 后端是直面服务器的, 更加偏向内存方面.</p>
            </blockquote>
            <ul>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/js-basic.md#%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD"
                target="_blank"><code>[Basic]</code> 类型判断</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/js-basic.md#%E4%BD%9C%E7%94%A8%E5%9F%9F"
                target="_blank"><code>[Basic]</code> 作用域</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/js-basic.md#%E5%BC%95%E7%94%A8%E4%BC%A0%E9%80%92"
                target="_blank"><code>[Basic]</code> 引用传递</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/js-basic.md#%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE"
                target="_blank"><code>[Basic]</code> 内存释放</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/js-basic.md#es6-%E6%96%B0%E7%89%B9%E6%80%A7"
                target="_blank"><code>[Basic]</code> ES6 新特性</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>js 中什么类型是引用传递, 什么类型是值传递? 如何将值类型的变量以引用的方式传递? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/js-basic.md#q-value"
                target="_blank">[more]</a></li>
              <li>js 中， 0.1 + 0.2 === 0.3 是否为 true ? 在不知道浮点数位数时应该怎样判断两个浮点数之和与第三数是否相等？</li>
              <li>const 定义的 Array 中间元素能否被修改? 如果可以, 那 const 的意义是? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/js-basic.md#q-const"
                target="_blank">[more]</a></li>
              <li>JavaScript 中不同类型以及不同环境下变量的内存都是何时释放? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/js-basic.md#q-mem"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/js-basic.md"
                  target="_blank">阅读更多</a></p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/module.md"
                   target="_blank">模块</a></h2>
            <ul>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/module.md#%E6%A8%A1%E5%9D%97%E6%9C%BA%E5%88%B6"
                target="_blank"><code>[Basic]</code> 模块机制</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/module.md#%E7%83%AD%E6%9B%B4%E6%96%B0"
                target="_blank"><code>[Basic]</code> 热更新</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/module.md#%E4%B8%8A%E4%B8%8B%E6%96%87"
                target="_blank"><code>[Basic]</code> 上下文</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>a.js 和 b.js 两个文件互相 require 是否会死循环? 双方是否能导出变量? 如何从设计上避免这种问题? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/module.md#q-loop"
                target="_blank">[more]</a></li>
              <li>如果 a.js require 了 b.js, 那么在 b 中定义全局变量 <code>t = 111</code> 能否在 a 中直接打印出来? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/module.md#q-global"
                target="_blank">[more]</a></li>
              <li>如何在不重启 node 进程的情况下热更新一个 js/json 文件? 这个问题本身是否有问题? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/module.md#q-hot"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/module.md" target="_blank">阅读更多</a>
            </p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md"
                   target="_blank">事件/异步</a></h2>
            <ul>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#promise"
                     target="_blank"><code>[Basic]</code> Promise</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#events"
                     target="_blank"><code>[Doc]</code> Events (事件)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#timers"
                     target="_blank"><code>[Doc]</code> Timers (定时器)</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#%E9%98%BB%E5%A1%9E%E5%BC%82%E6%AD%A5"
                target="_blank"><code>[Point]</code> 阻塞/异步</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#%E5%B9%B6%E8%A1%8C%E5%B9%B6%E5%8F%91"
                target="_blank"><code>[Point]</code> 并行/并发</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>Promise 中 .then 的第二参数与 .catch 有什么区别? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#q-1"
                target="_blank">[more]</a></li>
              <li>Eventemitter 的 emit 是同步还是异步? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#q-2"
                target="_blank">[more]</a></li>
              <li>如何判断接口是否异步? 是否只要有回调函数就是异步? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#q-3"
                target="_blank">[more]</a></li>
              <li>nextTick, setTimeout 以及 setImmediate 三者有什么区别? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#q-4"
                target="_blank">[more]</a></li>
              <li>如何实现一个 sleep 函数? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#q-5"
                target="_blank">[more]</a></li>
              <li>如何实现一个异步的 reduce? (注:不是异步完了之后同步 reduce) <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md#q-6"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md"
                  target="_blank">阅读更多</a></p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md"
                   target="_blank">进程</a></h2>
            <ul>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#process"
                     target="_blank"><code>[Doc]</code> Process (进程)</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#child-process"
                target="_blank"><code>[Doc]</code> Child Processes (子进程)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#cluster"
                     target="_blank"><code>[Doc]</code> Cluster (集群)</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1"
                target="_blank"><code>[Basic]</code> 进程间通信</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B"
                target="_blank"><code>[Basic]</code> 守护进程</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>进程的当前工作目录是什么? 有什么作用? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#q-cwd"
                target="_blank">[more]</a></li>
              <li>child_process.fork 与 POSIX 的 fork 有什么区别? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#q-fork"
                target="_blank">[more]</a></li>
              <li>父进程或子进程的死亡是否会影响对方? 什么是孤儿进程? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#q-child"
                target="_blank">[more]</a></li>
              <li>cluster 是如何保证负载均衡的? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#how-it-works"
                target="_blank">[more]</a></li>
              <li>什么是守护进程? 如何实现守护进程? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md"
                  target="_blank">阅读更多</a></p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md"
                   target="_blank">IO</a></h2>
            <ul>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#buffer"
                     target="_blank"><code>[Doc]</code> Buffer</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#string-decoder"
                     target="_blank"><code>[Doc]</code> String Decoder (字符串解码)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#stream"
                     target="_blank"><code>[Doc]</code> Stream (流)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#console"
                     target="_blank"><code>[Doc]</code> Console (控制台)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#file"
                     target="_blank"><code>[Doc]</code> File System (文件系统)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#readline"
                     target="_blank"><code>[Doc]</code> Readline</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#repl"
                     target="_blank"><code>[Doc]</code> REPL</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>Buffer 一般用于处理什么数据? 其长度能否动态变化? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#buffer"
                target="_blank">[more]</a></li>
              <li>Stream 的 highWaterMark 与 drain 事件是什么? 二者之间的关系是? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#%E7%BC%93%E5%86%B2%E5%8C%BA"
                target="_blank">[more]</a></li>
              <li>Stream 的 pipe 的作用是? 在 pipe 的过程中数据是引用传递还是拷贝传递? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#pipe" target="_blank">[more]</a>
              </li>
              <li>什么是文件描述符? 输入流/输出流/错误流是什么? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#file" target="_blank">[more]</a>
              </li>
              <li>console.log 是同步还是异步? 如何实现一个 console.log? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#console"
                target="_blank">[more]</a></li>
              <li>如何同步的获取用户的输入? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#%E5%A6%82%E4%BD%95%E5%90%8C%E6%AD%A5%E7%9A%84%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E7%9A%84%E8%BE%93%E5%85%A5"
                target="_blank">[more]</a></li>
              <li>Readline 是如何实现的? (有思路即可) <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md#readline"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/io.md"
                  target="_blank">阅读更多</a></p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md"
                   target="_blank">Network</a></h2>
            <ul>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#net"
                     target="_blank"><code>[Doc]</code> Net (网络)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#udp"
                     target="_blank"><code>[Doc]</code> UDP/Datagram</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#http"
                     target="_blank"><code>[Doc]</code> HTTP</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#dns"
                     target="_blank"><code>[Doc]</code> DNS (域名服务器)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#zlib"
                     target="_blank"><code>[Doc]</code> ZLIB (压缩)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#rpc"
                     target="_blank"><code>[Point]</code> RPC</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>cookie 与 session 的区别? 服务端如何清除 cookie? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#q-cookie-session"
                target="_blank">[more]</a></li>
              <li>HTTP 协议中的 POST 和 PUT 有什么区别? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#q-post-put"
                target="_blank">[more]</a></li>
              <li>什么是跨域请求? 如何允许跨域? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#q-cors"
                target="_blank">[more]</a></li>
              <li>TCP/UDP 的区别? TCP 粘包是怎么回事，如何处理? UDP 有粘包吗? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#q-tcp-udp"
                target="_blank">[more]</a></li>
              <li><code>TIME_WAIT</code> 是什么情况? 出现过多的 <code>TIME_WAIT</code> 可能是什么原因? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#q-time-wait"
                target="_blank">[more]</a></li>
              <li>ECONNRESET 是什么错误? 如何复现这个错误?</li>
              <li>socket hang up 是什么意思? 可能在什么情况下出现? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#socket-hang-up"
                target="_blank">[more]</a></li>
              <li>hosts 文件是什么? 什么叫 DNS 本地解析?</li>
              <li>列举几个提高网络传输速度的办法?</li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md"
                  target="_blank">阅读更多</a></p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md"
                   target="_blank">OS</a></h2>
            <ul>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md#tty"
                     target="_blank"><code>[Doc]</code> TTY</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md#os"
                     target="_blank"><code>[Doc]</code> OS (操作系统)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md#path"
                     target="_blank"><code>[Doc]</code> Path</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0"
                target="_blank"><code>[Doc]</code> 命令行参数</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md#%E8%B4%9F%E8%BD%BD"
                target="_blank"><code>[Basic]</code> 负载</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md#checklist"
                     target="_blank"><code>[Point]</code> CheckList</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>什么是 TTY? 如何判断是否处于 TTY 环境? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md#tty" target="_blank">[more]</a>
              </li>
              <li>不同操作系统的换行符 (EOL) 有什么区别? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md#os" target="_blank">[more]</a>
              </li>
              <li>服务器负载是什么概念? 如何查看负载? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md#%E8%B4%9F%E8%BD%BD"
                target="_blank">[more]</a></li>
              <li>ulimit 是用来干什么的? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md#ulimit"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/os.md"
                  target="_blank">阅读更多</a></p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md" target="_blank">错误处理/调试/优化</a>
            </h2>
            <ul>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#errors"
                     target="_blank"><code>[Doc]</code> Errors (异常)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#domain"
                     target="_blank"><code>[Doc]</code> Domain (域)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#debugger"
                     target="_blank"><code>[Doc]</code> Debugger (调试器)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#c-c++-addon"
                     target="_blank"><code>[Doc]</code> C/C++ 插件</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#v8"
                     target="_blank"><code>[Doc]</code> V8</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#%E5%86%85%E5%AD%98%E5%BF%AB%E7%85%A7"
                target="_blank"><code>[Point]</code> 内存快照</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#cpu-profiling"
                     target="_blank"><code>[Point]</code> CPU profiling</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>怎么处理未预料的出错? 用 try/catch ，domains 还是其它什么? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#q-handle-error"
                target="_blank">[more]</a></li>
              <li>什么是 <code>uncaughtException</code> 事件? 一般在什么情况下使用该事件? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#uncaughtexception"
                target="_blank">[more]</a></li>
              <li>domain 的原理是? 为什么要弃用 domain? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#domain"
                target="_blank">[more]</a></li>
              <li>什么是防御性编程? 与其相对的 let it crash 又是什么?</li>
              <li>为什么要在 cb 的第一参数传 error? 为什么有的 cb 第一个参数不是 error, 例如 http.createServer?</li>
              <li>为什么有些异常没法根据报错信息定位到代码调用? 如何准确的定位一个异常? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#%E9%94%99%E8%AF%AF%E6%A0%88%E4%B8%A2%E5%A4%B1"
                target="_blank">[more]</a></li>
              <li>内存泄漏通常由哪些原因导致? 如何分析以及定位内存泄漏? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md#%E5%86%85%E5%AD%98%E5%BF%AB%E7%85%A7"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/error.md" target="_blank">阅读更多</a>
            </p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md" target="_blank">测试</a>
            </h2>
            <ul>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md#%E6%B5%8B%E8%AF%95%E6%96%B9%E6%B3%95"
                target="_blank"><code>[Basic]</code> 测试方法</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95"
                target="_blank"><code>[Basic]</code> 单元测试</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md#%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95"
                target="_blank"><code>[Basic]</code> 集成测试</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md#%E5%9F%BA%E5%87%86%E6%B5%8B%E8%AF%95"
                target="_blank"><code>[Basic]</code> 基准测试</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md#%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95"
                target="_blank"><code>[Basic]</code> 压力测试</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md#assert"
                     target="_blank"><code>[Doc]</code> Assert (断言)</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>为什么要写测试? 写测试是否会拖累开发进度?<a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md#q-why-write-test"
                target="_blank">[more]</a></li>
              <li>单元测试的单元是指什么? 什么是覆盖率?<a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95"
                target="_blank">[more]</a></li>
              <li>测试是如何保证业务逻辑中不会出现死循环的?<a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md#q-death-loop"
                target="_blank">[more]</a></li>
              <li>mock 是什么? 一般在什么情况下 mock?<a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md#mock"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/test.md" target="_blank">阅读更多</a>
            </p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/util.md" target="_blank">util</a>
            </h2>
            <ul>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/util.md#url"
                     target="_blank"><code>[Doc]</code> URL</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/util.md#query-strings"
                     target="_blank"><code>[Doc]</code> Query Strings (查询字符串)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/util.md#util-1"
                     target="_blank"><code>[Doc]</code> Utilities (实用函数)</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/util.md#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F"
                target="_blank"><code>[Basic]</code> 正则表达式</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>HTTP 如何通过 GET 方法 (URL) 传递 let arr = [1,2,3,4] 给服务器? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/util.md#get-param"
                target="_blank">[more]</a></li>
              <li>Node.js 中继承 (util.inherits) 的实现? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/util.md#utilinherits"
                target="_blank">[more]</a></li>
              <li>如何递归获取某个文件夹下所有的文件名? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/util.md#q-traversal"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/util.md" target="_blank">阅读更多</a>
            </p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md"
                   target="_blank">存储</a></h2>
            <ul>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md#mysql"
                     target="_blank"><code>[Point]</code> Mysql</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md#mongodb"
                     target="_blank"><code>[Point]</code> Mongodb</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md#replication"
                     target="_blank"><code>[Point]</code> Replication</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md#%E6%95%B0%E6%8D%AE%E4%B8%80%E8%87%B4%E6%80%A7"
                target="_blank"><code>[Point]</code> 数据一致性</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md#%E7%BC%93%E5%AD%98"
                target="_blank"><code>[Point]</code> 缓存</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>备份数据库与 M/S, M/M 等部署方式的区别? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md#replication"
                target="_blank">[more]</a></li>
              <li>索引有什么用，大致原理是什么? 设计索引有什么注意点? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md#%E7%B4%A2%E5%BC%95"
                target="_blank">[more]</a></li>
              <li>Monogdb 连接问题(超时/断开等)有可能是什么问题导致的? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md#Mongodb"
                target="_blank">[more]</a></li>
              <li>什么情况下数据会出现脏数据? 如何避免? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md#%E6%95%B0%E6%8D%AE%E4%B8%80%E8%87%B4%E6%80%A7"
                target="_blank">[more]</a></li>
              <li>redis 与 memcached 的区别? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md#%E7%BC%93%E5%AD%98"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/storage.md"
                  target="_blank">阅读更多</a></p>
            <h2><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md"
                   target="_blank">安全</a></h2>
            <ul>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#crypto"
                     target="_blank"><code>[Doc]</code> Crypto (加密)</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#tlsssl"
                     target="_blank"><code>[Doc]</code> TLS/SSL</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#https"
                     target="_blank"><code>[Doc]</code> HTTPS</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#xss"
                     target="_blank"><code>[Point]</code> XSS</a></li>
              <li><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#csrf"
                     target="_blank"><code>[Point]</code> CSRF</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB"
                target="_blank"><code>[Point]</code> 中间人攻击</a></li>
              <li><a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#sqlnosql-%E6%B3%A8%E5%85%A5"
                target="_blank"><code>[Point]</code> Sql/Nosql 注入</a></li>
            </ul>
            <h3>常见问题</h3>
            <ul>
              <li>加密是如何保证用户密码的安全性? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#crypto"
                target="_blank">[more]</a></li>
              <li>TLS 与 SSL 有什么区别? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#tlsssl"
                target="_blank">[more]</a></li>
              <li>HTTPS 能否被劫持? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#https"
                target="_blank">[more]</a></li>
              <li>XSS 攻击是什么? 有什么危害? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#xss"
                target="_blank">[more]</a></li>
              <li>过滤 Html 标签能否防止 XSS? 请列举不能的情况? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#xss"
                target="_blank">[more]</a></li>
              <li>CSRF 是什么? 如何防范? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#csrf"
                target="_blank">[more]</a></li>
              <li>如何避免中间人攻击? <a
                href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md#%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB"
                target="_blank">[more]</a></li>
            </ul>
            <p><a href="https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/security.md"
                  target="_blank">阅读更多</a></p>
            <h2>最后</h2>
            <p>目前 repo 处于施工现场的情况，如果发现问题欢迎在 <a href="https://github.com/ElemeFE/node-interview/issues" target="_blank">issues</a>
              中指出。如果有比较好的<code>问题/知识点/指正</code>，也欢迎提 PR。</p>
            <p>另外关于 <code>Js 基础</code> 是个比较大的话题，在本教程不会很细致深入的讨论，更多的是列出一些重要或者更服务端更相关的地方，所以如果你拿着《JavaScript 权威指南》给教程提 PR
              可能不会采纳。本教程的重点更准确的说是服务端基础中 Node.js 程序员需要了解的部分。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
