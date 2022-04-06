// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BiPlatform = {
  "TABLEAU": "TABLEAU",
  "QUICKSIGHT": "QUICKSIGHT"
};

const { Tableaulogin, TableauEnv, TableauProject, Department, Customer, QuicksightProject, QuicksightTemplate, QuicksightAnalysis, QuicksightDashboard, QuicksightEnv, Quicksightlogin, BIMProject, dataset, datasources, Table, File, TaleauWorkbook, TableauSheet, TableauGraph, QuicksightFolder, QuicksightGroup, comments } = initSchema(schema);

export {
  Tableaulogin,
  TableauEnv,
  TableauProject,
  Department,
  Customer,
  QuicksightProject,
  QuicksightTemplate,
  QuicksightAnalysis,
  QuicksightDashboard,
  QuicksightEnv,
  Quicksightlogin,
  BIMProject,
  dataset,
  datasources,
  Table,
  File,
  TaleauWorkbook,
  TableauSheet,
  TableauGraph,
  QuicksightFolder,
  QuicksightGroup,
  comments,
  BiPlatform
};