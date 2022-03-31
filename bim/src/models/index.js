// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BiPlatform = {
  "TABLEAU": "TABLEAU",
  "QUICKSIGHT": "QUICKSIGHT"
};

const { Tableaulogin, Quicksightlogin, Customer, Department, BIMProject, dataset, datasources, File } = initSchema(schema);

export {
  Tableaulogin,
  Quicksightlogin,
  Customer,
  Department,
  BIMProject,
  dataset,
  datasources,
  File,
  BiPlatform
};