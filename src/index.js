import Tabbar from './packages/tabbar/tabbar';
import tabItem from './packages/tab-item/tab-item';
import Header from './packages/header/header';
import Navbar from './packages/navbar/navbar';
const install = function (Vue, config = {}) {
    if (install.installed) return;
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(tabItem.name, tabItem);
    Vue.component(Header.name, Header);
    Vue.component(Navbar.name, Navbar);
    // Vue.$toast = Vue.prototype.$toast = Toast;
    // Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
    // Vue.$indicator = Vue.prototype.$indicator = Indicator;
  }

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  
export {install}