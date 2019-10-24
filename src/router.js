// const Foo = { template: '<div>planets</div>' };
// const Bar = { template: '<div>ships</div>' };
import Planets from './components/Planets.vue';
import People from './components/People.vue';
import StarShips from './components/StarShips.vue';
import StarShip from './components/StarShip.vue';
import ChangingPlanet from './components/ChangingPlanet.vue';

const routes = [
  { path: '', component: ChangingPlanet },
  { path: '/planets', component: Planets },
  { path: '/people', component: People },
  {
    path: '/ships/',
    component: StarShips,
  },
  {
    path: '/ships/:id',
    name: 'StarShip',
    component: StarShip,
    props: true,
  },
];

export default routes;
