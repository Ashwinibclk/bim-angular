// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BiPlatform = {
  "TABLEAU": "TABLEAU",
  "QUICKSIGHT": "QUICKSIGHT"
};

const { Tableaulogin, Quicksightlogin, Customer, Department, TableauProject, QuicksightProject, QuicksightTemplate, QuicksightAnalysis, QuicksightDashboard, QuicksightEnv, BIMProject, dataset, datasources, Table, File, TableauEnv, TaleauWorkbook, TableauSheet, TableauGraph, QuicksightFolder, QuicksightGroup } = initSchema(schema);

export {
  Tableaulogin,
  Quicksightlogin,
  Customer,
  Department,
  TableauProject,
  QuicksightProject,
  QuicksightTemplate,
  QuicksightAnalysis,
  QuicksightDashboard,
  QuicksightEnv,
  BIMProject,
  dataset,
  datasources,
  Table,
  File,
  TableauEnv,
  TaleauWorkbook,
  TableauSheet,
  TableauGraph,
  QuicksightFolder,
  QuicksightGroup,
  BiPlatform
};