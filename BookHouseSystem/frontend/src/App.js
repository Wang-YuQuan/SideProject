import './App.css';
import './Filter.js';
import Filter from './Filter.js';
import HouseList from './HouseList.js';
import CustomDivider from './customDivider.js'

function App() {
	return (
		<div className="App">
			<Filter></Filter>
			<div style={{ flexBasis: '100%' }} />
			<CustomDivider></CustomDivider>
			<HouseList></HouseList>
		</div>
	);
}

export default App;
