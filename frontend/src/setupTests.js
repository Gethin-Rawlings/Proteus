import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LocalStorage } from './localstorage';

global.localStorage = new LocalStorage(jest);
global.sessionStorage = new LocalStorage(jest);

configure({ adapter: new Adapter() });



