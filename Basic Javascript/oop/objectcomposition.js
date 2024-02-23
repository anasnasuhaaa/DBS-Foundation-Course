class Developer {
  constructor(name) {
    this.name = name;
  }
  commitChanges() {
    console.log(`${this.name} is commiting changes...`);
  }
}

function canBuildUI(Developer) {
  return {
    buildUI: () => {
      console.log(`${Developer.name} is building UI`);
    },
  };
}
function canBuildAPI(Developer) {
  return {
    buildAPI: () => {
      console.log(`${Developer.name} is building API`);
    },
  };
}
function canDeployApp(Developer) {
  return {
    deployApp: () => {
      console.log(`${Developer.name} is Deploying App`);
    },
  };
}

function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(
    developer,
    canBuildUI(developer),
    canBuildAPI(developer),
    canDeployApp(developer)
  );
}

const frontEndDeveloper = createFrontEndDeveloper("Ansu");
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(
  `is ${frontEndDeveloper.name} developer? `,
  frontEndDeveloper instanceof Developer
);

const backEndDeveloper = createBackEndDeveloper("Ansu");
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(
  `is ${backEndDeveloper.name} developer? `,
  backEndDeveloper instanceof Developer
);

const devOpsDeveloper = createDevOps("Ansu");
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(
  `is ${devOpsDeveloper.name} developer? `,
  devOpsDeveloper instanceof Developer
);

const fullStackDeveloper = createFullStackDeveloper("Ansu");
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(
  `is ${fullStackDeveloper.name} developer? `,
  fullStackDeveloper instanceof Developer
);
