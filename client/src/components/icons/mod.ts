import home from './home.vue';
import create from './create.vue';
import peopleEmoji from './people-emoji.vue';
import dot from './dot.vue';
import dotsCircle from './dots-circle.vue';

const _list = {
	home, create, dot,
	"people-emoji": peopleEmoji,
	"dots-circle": dotsCircle
};

const icons = new Map(Object.entries(_list));

type IconNameType = keyof typeof _list;





export { icons, IconNameType };