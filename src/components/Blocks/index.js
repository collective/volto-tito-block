import titoSVG from '../../icons/tito.svg';
import TitoBlockView from './Tito/View';
import TitoBlockEdit from './Tito/Edit';

const blocks = {
  tito: {
    id: 'tito',
    title: 'Tito',
    icon: titoSVG,
    group: 'common',
    view: TitoBlockView,
    edit: TitoBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    defaultEvent: '',
  },
};

export default blocks;
