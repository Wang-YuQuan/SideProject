import { Layout, Card, Carousel, Tag } from 'antd';
import { EnvironmentOutlined, HomeOutlined } from '@ant-design/icons';
import './HouseDesc.css'

function HouseDesc(props) {
    const { Sider, Content } = Layout;

    return (
        <div className="HouseDescArea">
            <Card hoverable onClick={() => window.location.href = 'https://github.com/Wang-YuQuan'}>
                <Layout className="WhiteArea">
                    <Sider width="30%" className="WhiteArea">
                        <Carousel arrows infinite={true}>
                            {props.imageURL.map((url, index) => (
                                <div key={index}>
                                    <img className="imgStyle" src={url} alt={`img-${index}`} />
                                </div>
                            ))}
                        </Carousel>
                    </Sider>
                    <Content className="WhiteArea DescRightArea">
                        <div>
                            <b style={{ fontSize: '20px' }}>新成屋多戶可選可寵全新家具電。近捷運華山台北車站</b>
                        </div>
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <HomeOutlined style={{ marginRight: '10px' }} />
                            <Tag>整層住家</Tag>
                            <Tag>3房2廳1衛</Tag>
                            <Tag>15F</Tag>
                        </div>
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <EnvironmentOutlined style={{ marginRight: '10px' }} />新北市板橋區文化路一段123巷45號7樓
                        </div>
                        <div className='HousePriceArea'>
                            <b>20000 元/月</b>
                        </div>
                    </Content>
                </Layout>
            </Card>
        </div>
    );
}

export default HouseDesc;
