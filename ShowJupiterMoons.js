import { cloneDeep } from 'lodash';

function sortMoonsByField(moons = [], field = '', sortOrder = 'D') {
  const sortedMoons = cloneDeep(moons);
  if (sortedMoons.length > 0 && field.length > 0) {
    if (sortOrder.toUpperCase()[0] === 'D') {
      sortedMoons.sort((a, b) => (a[field] > b[field] ? -1 : 1));
    } else {
      sortedMoons.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    }
  }
  return sortedMoons;
}

function kmToMiles(km) {
  return Math.round(km * 0.621371, 0);
}

export default function ShowJupiterMoons(props) {
  const { moons = [] } = props;
  const sortedMoons = sortMoonsByField(moons, 'diameterKM', 'D');
  return (
    <div>
      {sortedMoons.map((moon, index) => (
        <ShowJupiterMoon key={index} moon={moon} />
      ))}
    </div>
  );
}

function ShowJupiterMoon(props) {
  const { name = '', diameterKM = 0, image = '', link = '' } = props.moon;
  if (name.length > 0) {
    return (
      <div>
        {name} {diameterKM > 0 ? `(${kmToMiles(diameterKM)} miles)` : ''}
        <br />
        <a href={link}>
          <img src={`images/${image}`} alt={name} width="100" />
        </a>
      </div>
    );
  } else {
    return null;
  }
}
