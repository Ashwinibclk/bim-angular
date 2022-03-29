// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BiPlatform = {
  "TABLEAU": "TABLEAU",
  "QUICKSIGHT": "QUICKSIGHT"
};

const { Tableaulogin, Quicksightlogin, Customer, Department, TableauProject, TableauEnv, TableauWorkbook, TableauSheet, TableauGraph, QuicksiteProject, QuicksiteTemplate, QuicksiteAnalysis, QuicksiteDashboard, QuicksiteEnv, BIMProject, Dataset, Datasouce, QuicksightFolder, QuicksightGroup, File, Table } = initSchema(schema);

export {
  Tableaulogin,
  Quicksightlogin,
  Customer,
  Department,
  TableauProject,
  TableauEnv,
  TableauWorkbook,
  TableauSheet,
  TableauGraph,
  QuicksiteProject,
  QuicksiteTemplate,
  QuicksiteAnalysis,
  QuicksiteDashboard,
  QuicksiteEnv,
  BIMProject,
  Dataset,
  Datasouce,
  QuicksightFolder,
  QuicksightGroup,
  File,
  Table,
  BiPlatform
};