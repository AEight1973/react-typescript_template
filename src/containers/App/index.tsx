import React from 'react';
import './style.css';
import Container from "../Container";
// 配置antd
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import {ConfigProvider} from "antd";

dayjs.locale("zh-cn");

function App() {
    return (
        <ConfigProvider locale={zhCN}>
            <div className="App">
                <Container />
            </div>
        </ConfigProvider>
    );
}

export default App;
