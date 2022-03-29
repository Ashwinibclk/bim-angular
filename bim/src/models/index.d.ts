import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum BiPlatform {
  TABLEAU = "TABLEAU",
  QUICKSIGHT = "QUICKSIGHT"
}



type TableauloginMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightloginMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DepartmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauEnvMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauWorkbookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauSheetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauGraphMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksiteProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksiteTemplateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksiteAnalysisMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksiteDashboardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksiteEnvMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BIMProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DatasetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DatasouceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightFolderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightGroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tableaulogin {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly sitename: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tableaulogin, TableauloginMetaData>);
  static copyOf(source: Tableaulogin, mutator: (draft: MutableModel<Tableaulogin, TableauloginMetaData>) => MutableModel<Tableaulogin, TableauloginMetaData> | void): Tableaulogin;
}

export declare class Quicksightlogin {
  readonly id: string;
  readonly awsaccountId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Quicksightlogin, QuicksightloginMetaData>);
  static copyOf(source: Quicksightlogin, mutator: (draft: MutableModel<Quicksightlogin, QuicksightloginMetaData>) => MutableModel<Quicksightlogin, QuicksightloginMetaData> | void): Quicksightlogin;
}

export declare class Customer {
  readonly id: string;
  readonly CustomerId: string;
  readonly name: string;
  readonly Did?: Department | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly customerDidId?: string | null;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Department {
  readonly id: string;
  readonly Did: string;
  readonly CustomerId?: Customer | null;
  readonly Dname: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Department, DepartmentMetaData>);
  static copyOf(source: Department, mutator: (draft: MutableModel<Department, DepartmentMetaData>) => MutableModel<Department, DepartmentMetaData> | void): Department;
}

export declare class TableauProject {
  readonly id: string;
  readonly TProId: string;
  readonly name: string;
  readonly Did?: Department | null;
  readonly envname?: TableauEnv | null;
  readonly WbId?: (TableauWorkbook | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tableauProjectDidId?: string | null;
  readonly tableauProjectEnvnameId?: string | null;
  constructor(init: ModelInit<TableauProject, TableauProjectMetaData>);
  static copyOf(source: TableauProject, mutator: (draft: MutableModel<TableauProject, TableauProjectMetaData>) => MutableModel<TableauProject, TableauProjectMetaData> | void): TableauProject;
}

export declare class TableauEnv {
  readonly id: string;
  readonly name: string;
  readonly TProId?: TableauProject | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TableauEnv, TableauEnvMetaData>);
  static copyOf(source: TableauEnv, mutator: (draft: MutableModel<TableauEnv, TableauEnvMetaData>) => MutableModel<TableauEnv, TableauEnvMetaData> | void): TableauEnv;
}

export declare class TableauWorkbook {
  readonly id: string;
  readonly WbId: string;
  readonly name: string;
  readonly TProId?: TableauProject | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TableauWorkbook, TableauWorkbookMetaData>);
  static copyOf(source: TableauWorkbook, mutator: (draft: MutableModel<TableauWorkbook, TableauWorkbookMetaData>) => MutableModel<TableauWorkbook, TableauWorkbookMetaData> | void): TableauWorkbook;
}

export declare class TableauSheet {
  readonly id: string;
  readonly name: string;
  readonly WbId?: TableauWorkbook | null;
  readonly Tsid: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tableauSheetWbIdId?: string | null;
  constructor(init: ModelInit<TableauSheet, TableauSheetMetaData>);
  static copyOf(source: TableauSheet, mutator: (draft: MutableModel<TableauSheet, TableauSheetMetaData>) => MutableModel<TableauSheet, TableauSheetMetaData> | void): TableauSheet;
}

export declare class TableauGraph {
  readonly id: string;
  readonly name: string;
  readonly Tsid?: TableauSheet | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tableauGraphTsidId?: string | null;
  constructor(init: ModelInit<TableauGraph, TableauGraphMetaData>);
  static copyOf(source: TableauGraph, mutator: (draft: MutableModel<TableauGraph, TableauGraphMetaData>) => MutableModel<TableauGraph, TableauGraphMetaData> | void): TableauGraph;
}

export declare class QuicksiteProject {
  readonly id: string;
  readonly name: string;
  readonly QProId: string;
  readonly Did?: Department | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly quicksiteProjectDidId?: string | null;
  constructor(init: ModelInit<QuicksiteProject, QuicksiteProjectMetaData>);
  static copyOf(source: QuicksiteProject, mutator: (draft: MutableModel<QuicksiteProject, QuicksiteProjectMetaData>) => MutableModel<QuicksiteProject, QuicksiteProjectMetaData> | void): QuicksiteProject;
}

export declare class QuicksiteTemplate {
  readonly id: string;
  readonly QtemId: string;
  readonly name: string;
  readonly analysisId?: QuicksiteAnalysis | null;
  readonly QProId?: QuicksiteProject | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly quicksiteTemplateAnalysisIdId?: string | null;
  readonly quicksiteTemplateQProIdId?: string | null;
  constructor(init: ModelInit<QuicksiteTemplate, QuicksiteTemplateMetaData>);
  static copyOf(source: QuicksiteTemplate, mutator: (draft: MutableModel<QuicksiteTemplate, QuicksiteTemplateMetaData>) => MutableModel<QuicksiteTemplate, QuicksiteTemplateMetaData> | void): QuicksiteTemplate;
}

export declare class QuicksiteAnalysis {
  readonly id: string;
  readonly name: string;
  readonly analysisId: string;
  readonly QtemId?: QuicksiteTemplate | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QuicksiteAnalysis, QuicksiteAnalysisMetaData>);
  static copyOf(source: QuicksiteAnalysis, mutator: (draft: MutableModel<QuicksiteAnalysis, QuicksiteAnalysisMetaData>) => MutableModel<QuicksiteAnalysis, QuicksiteAnalysisMetaData> | void): QuicksiteAnalysis;
}

export declare class QuicksiteDashboard {
  readonly id: string;
  readonly name: string;
  readonly QtemId?: QuicksiteTemplate | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly quicksiteDashboardQtemIdId?: string | null;
  constructor(init: ModelInit<QuicksiteDashboard, QuicksiteDashboardMetaData>);
  static copyOf(source: QuicksiteDashboard, mutator: (draft: MutableModel<QuicksiteDashboard, QuicksiteDashboardMetaData>) => MutableModel<QuicksiteDashboard, QuicksiteDashboardMetaData> | void): QuicksiteDashboard;
}

export declare class QuicksiteEnv {
  readonly id: string;
  readonly name: string;
  readonly QProId?: QuicksiteProject | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly quicksiteEnvQProIdId?: string | null;
  constructor(init: ModelInit<QuicksiteEnv, QuicksiteEnvMetaData>);
  static copyOf(source: QuicksiteEnv, mutator: (draft: MutableModel<QuicksiteEnv, QuicksiteEnvMetaData>) => MutableModel<QuicksiteEnv, QuicksiteEnvMetaData> | void): QuicksiteEnv;
}

export declare class BIMProject {
  readonly id: string;
  readonly Did: string;
  readonly name: string;
  readonly source: BiPlatform | keyof typeof BiPlatform;
  readonly destination: BiPlatform | keyof typeof BiPlatform;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BIMProject, BIMProjectMetaData>);
  static copyOf(source: BIMProject, mutator: (draft: MutableModel<BIMProject, BIMProjectMetaData>) => MutableModel<BIMProject, BIMProjectMetaData> | void): BIMProject;
}

export declare class Dataset {
  readonly id: string;
  readonly name: string;
  readonly datasources: string;
  readonly files: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dataset, DatasetMetaData>);
  static copyOf(source: Dataset, mutator: (draft: MutableModel<Dataset, DatasetMetaData>) => MutableModel<Dataset, DatasetMetaData> | void): Dataset;
}

export declare class Datasouce {
  readonly id: string;
  readonly name?: (string | null)[] | null;
  readonly dsid: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Datasouce, DatasouceMetaData>);
  static copyOf(source: Datasouce, mutator: (draft: MutableModel<Datasouce, DatasouceMetaData>) => MutableModel<Datasouce, DatasouceMetaData> | void): Datasouce;
}

export declare class QuicksightFolder {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QuicksightFolder, QuicksightFolderMetaData>);
  static copyOf(source: QuicksightFolder, mutator: (draft: MutableModel<QuicksightFolder, QuicksightFolderMetaData>) => MutableModel<QuicksightFolder, QuicksightFolderMetaData> | void): QuicksightFolder;
}

export declare class QuicksightGroup {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QuicksightGroup, QuicksightGroupMetaData>);
  static copyOf(source: QuicksightGroup, mutator: (draft: MutableModel<QuicksightGroup, QuicksightGroupMetaData>) => MutableModel<QuicksightGroup, QuicksightGroupMetaData> | void): QuicksightGroup;
}

export declare class File {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<File, FileMetaData>);
  static copyOf(source: File, mutator: (draft: MutableModel<File, FileMetaData>) => MutableModel<File, FileMetaData> | void): File;
}

export declare class Table {
  readonly id: string;
  readonly name: string;
  readonly dsid: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Table, TableMetaData>);
  static copyOf(source: Table, mutator: (draft: MutableModel<Table, TableMetaData>) => MutableModel<Table, TableMetaData> | void): Table;
}