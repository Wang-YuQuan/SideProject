import { Divider } from 'antd';
import './customDivider.css';

function CustomDivider() {
	return (
		<div>
            <div className="custom-divider"></div>
			<Divider style={{margin: '0px'}} />
            <div className="custom-divider"></div>
		</div>
	);
}

export default CustomDivider;
