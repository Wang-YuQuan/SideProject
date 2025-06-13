import './Filter.css';
import { Layout, Checkbox, Tabs, Radio } from 'antd';
import { useState, useEffect } from 'react';
import CustomDivider from './customDivider.js'

const CheckboxGroup = Checkbox.Group;

function Filter() {
    const { Sider, Content } = Layout;
    const [townshipOptions, setTownshipOptionsOptions] = useState([]);
    const [checkedTownshipValues, setCheckedTownshipValues] = useState([]);
    const [schoolOptions, setSchoolOptionsOptions] = useState([]);
    const [checkedSchoolValues, setCheckedSchoolValues] = useState([]);
    const [MRTOptions, setMRTOptionsOptions] = useState([]);
    const [checkedMRTValues, setCheckedMRTValues] = useState([]);
    const tapPages = [
        {
            key: '1',
            label: '按鄉鎮',
            children: <CheckboxGroup
                options={townshipOptions}
                value={checkedTownshipValues}
                onChange={setCheckedTownshipValues}
            />,
        },
        {
            key: '2',
            label: '按學校',
            children: <CheckboxGroup
                options={schoolOptions}
                value={checkedSchoolValues}
                onChange={setCheckedSchoolValues}
            />,
        },
        {
            key: '3',
            label: '按捷運',
            children: <CheckboxGroup
                options={MRTOptions}
                value={checkedMRTValues}
                onChange={setCheckedMRTValues}
            />,
        },
    ];
    const kindOptions = [
        { label: '不限', value: '0' },
        { label: '整層住家', value: '1' },
        { label: '獨立套房', value: '2' },
        { label: '分租套房', value: '3' },
        { label: '雅房', value: '4' },
    ];
    const priceOptions = [
        { label: '不限', value: '0' },
        { label: '5000元以下', value: '1' },
        { label: '5000-10000元', value: '2' },
        { label: '10000-20000元', value: '3' },
        { label: '20000-30000元', value: '4' },
        { label: '40000元以上', value: '5' },
    ];
    const layoutOptions = [
        { label: '不限', value: '0' },
        { label: '1房', value: '1' },
        { label: '2房', value: '2' },
        { label: '3房', value: '3' },
        { label: '4房以上', value: '4' },
    ];

    useEffect(() => {
        fetch('http://localhost:8080/township')
            .then((res) => res.json())
            .then((data) => {
                const transformedOptions = data.map((item) => ({
                    label: item.name,
                    value: item.id
                }));
                setTownshipOptionsOptions(transformedOptions);
            })
            .catch((err) => {
                console.error('錯誤:', err);
            });
        fetch('http://localhost:8080/school')
            .then((res) => res.json())
            .then((data) => {
                const transformedOptions = data.map((item) => ({
                    label: item.name,
                    value: item.id
                }));
                setSchoolOptionsOptions(transformedOptions);
            })
            .catch((err) => {
                console.error('錯誤:', err);
            });
        fetch('http://localhost:8080/mrt')
            .then((res) => res.json())
            .then((data) => {
                const transformedOptions = data.map((item) => ({
                    label: item.name,
                    value: item.id
                }));
                setMRTOptionsOptions(transformedOptions);
            })
            .catch((err) => {
                console.error('錯誤:', err);
            });
    }, []);

    return (
        <div className="FilterArea">
            <div className="LocationArea">
                <Layout className="WhiteArea">
                    <Sider width="5%" className="WhiteArea Title">
                        <p>位置</p>
                    </Sider>
                    <Content className="WhiteArea">
                        <Tabs defaultActiveKey="1" items={tapPages} />
                    </Content>
                </Layout>
                <CustomDivider />
            </div>
            <div className="KindArea">
                <Layout className="WhiteArea CenterArea">
                    <Sider width="5%" className="WhiteArea Title">
                        <p>類型</p>
                    </Sider>
                    <Content className="WhiteArea">
                        <Radio.Group options={kindOptions} defaultValue="0" optionType="button" />
                    </Content>
                </Layout>
                <CustomDivider />
            </div>
            <div className="PriceArea">
                <Layout className="WhiteArea CenterArea">
                    <Sider width="5%" className="WhiteArea Title">
                        <p>租金</p>
                    </Sider>
                    <Content className="WhiteArea">
                        <Radio.Group options={priceOptions} defaultValue="0" optionType="button" />
                    </Content>
                </Layout>
                <CustomDivider />
            </div>
            <div className="LayoutArea">
                <Layout className="WhiteArea CenterArea">
                    <Sider width="5%" className="WhiteArea Title">
                        <p>格局</p>
                    </Sider>
                    <Content className="WhiteArea">
                        <Radio.Group options={layoutOptions} defaultValue="0" optionType="button" />
                    </Content>
                </Layout>
                <CustomDivider />
            </div>
        </div>
    );
}

export default Filter;
