import { Layout } from 'antd';
import HouseDesc from './HouseDesc.js';
import './HouseList.css'

function HouseList() {
    const { Sider, Content } = Layout;
    const imageURL = ["https://csrone.com/api/img/upload/articles/cUdaDovkhC9WOtV0BpuB2cTBEOJSXdxIHAgBqc8q.png?w=718"
                    , "https://csrone.com/api/img/upload/articles/cUdaDovkhC9WOtV0BpuB2cTBEOJSXdxIHAgBqc8q.png?w=718"
                    , "https://csrone.com/api/img/upload/articles/cUdaDovkhC9WOtV0BpuB2cTBEOJSXdxIHAgBqc8q.png?w=718"
                    , "https://csrone.com/api/img/upload/articles/cUdaDovkhC9WOtV0BpuB2cTBEOJSXdxIHAgBqc8q.png?w=718"]

    return (
        <div className="HouseListArea">
            <Layout className="">
                <Sider width="60%" className="WhiteArea">
                    <HouseDesc imageURL={imageURL}></HouseDesc>
                    <HouseDesc imageURL={imageURL}></HouseDesc>
                    <HouseDesc imageURL={imageURL}></HouseDesc>
                </Sider>
                <Content className="WhiteArea">
                    <p>右欄資訊</p>
                </Content>
            </Layout>
        </div>
    );
}

export default HouseList;
