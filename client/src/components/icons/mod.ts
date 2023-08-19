import home from './home.vue';


const _list = {
	home
};

const icons = new Map(Object.entries(_list));

type IconNameType = keyof typeof _list;





export { icons, IconNameType };