/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateTodo: OnCreateTodoSubscription;
  onUpdateTodo: OnUpdateTodoSubscription;
  onDeleteTodo: OnDeleteTodoSubscription;
  onCreateTableaulogin: OnCreateTableauloginSubscription;
  onUpdateTableaulogin: OnUpdateTableauloginSubscription;
  onDeleteTableaulogin: OnDeleteTableauloginSubscription;
  onCreateQuicksightlogin: OnCreateQuicksightloginSubscription;
  onUpdateQuicksightlogin: OnUpdateQuicksightloginSubscription;
  onDeleteQuicksightlogin: OnDeleteQuicksightloginSubscription;
  onCreateCustomer: OnCreateCustomerSubscription;
  onUpdateCustomer: OnUpdateCustomerSubscription;
  onDeleteCustomer: OnDeleteCustomerSubscription;
  onCreateDepartment: OnCreateDepartmentSubscription;
  onUpdateDepartment: OnUpdateDepartmentSubscription;
  onDeleteDepartment: OnDeleteDepartmentSubscription;
  onCreateTableauProject: OnCreateTableauProjectSubscription;
  onUpdateTableauProject: OnUpdateTableauProjectSubscription;
  onDeleteTableauProject: OnDeleteTableauProjectSubscription;
  onCreateTableauWorkbook: OnCreateTableauWorkbookSubscription;
  onUpdateTableauWorkbook: OnUpdateTableauWorkbookSubscription;
  onDeleteTableauWorkbook: OnDeleteTableauWorkbookSubscription;
  onCreateTableauSheet: OnCreateTableauSheetSubscription;
  onUpdateTableauSheet: OnUpdateTableauSheetSubscription;
  onDeleteTableauSheet: OnDeleteTableauSheetSubscription;
  onCreateTableauGraph: OnCreateTableauGraphSubscription;
  onUpdateTableauGraph: OnUpdateTableauGraphSubscription;
  onDeleteTableauGraph: OnDeleteTableauGraphSubscription;
  onCreateTableauEnv: OnCreateTableauEnvSubscription;
  onUpdateTableauEnv: OnUpdateTableauEnvSubscription;
  onDeleteTableauEnv: OnDeleteTableauEnvSubscription;
  onCreateQuicksiteProject: OnCreateQuicksiteProjectSubscription;
  onUpdateQuicksiteProject: OnUpdateQuicksiteProjectSubscription;
  onDeleteQuicksiteProject: OnDeleteQuicksiteProjectSubscription;
  onCreateQuicksiteTemplate: OnCreateQuicksiteTemplateSubscription;
  onUpdateQuicksiteTemplate: OnUpdateQuicksiteTemplateSubscription;
  onDeleteQuicksiteTemplate: OnDeleteQuicksiteTemplateSubscription;
  onCreateQuicksiteAnalysis: OnCreateQuicksiteAnalysisSubscription;
  onUpdateQuicksiteAnalysis: OnUpdateQuicksiteAnalysisSubscription;
  onDeleteQuicksiteAnalysis: OnDeleteQuicksiteAnalysisSubscription;
  onCreateQuicksiteDashboard: OnCreateQuicksiteDashboardSubscription;
  onUpdateQuicksiteDashboard: OnUpdateQuicksiteDashboardSubscription;
  onDeleteQuicksiteDashboard: OnDeleteQuicksiteDashboardSubscription;
  onCreateQuicksiteEnv: OnCreateQuicksiteEnvSubscription;
  onUpdateQuicksiteEnv: OnUpdateQuicksiteEnvSubscription;
  onDeleteQuicksiteEnv: OnDeleteQuicksiteEnvSubscription;
  onCreateBIMProject: OnCreateBIMProjectSubscription;
  onUpdateBIMProject: OnUpdateBIMProjectSubscription;
  onDeleteBIMProject: OnDeleteBIMProjectSubscription;
  onCreateDataset: OnCreateDatasetSubscription;
  onUpdateDataset: OnUpdateDatasetSubscription;
  onDeleteDataset: OnDeleteDatasetSubscription;
  onCreateDatasouce: OnCreateDatasouceSubscription;
  onUpdateDatasouce: OnUpdateDatasouceSubscription;
  onDeleteDatasouce: OnDeleteDatasouceSubscription;
  onCreateQuicksightFolder: OnCreateQuicksightFolderSubscription;
  onUpdateQuicksightFolder: OnUpdateQuicksightFolderSubscription;
  onDeleteQuicksightFolder: OnDeleteQuicksightFolderSubscription;
  onCreateQuicksightGroup: OnCreateQuicksightGroupSubscription;
  onUpdateQuicksightGroup: OnUpdateQuicksightGroupSubscription;
  onDeleteQuicksightGroup: OnDeleteQuicksightGroupSubscription;
  onCreateFile: OnCreateFileSubscription;
  onUpdateFile: OnUpdateFileSubscription;
  onDeleteFile: OnDeleteFileSubscription;
  onCreateTable: OnCreateTableSubscription;
  onUpdateTable: OnUpdateTableSubscription;
  onDeleteTable: OnDeleteTableSubscription;
};

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description: string;
  city: string;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Todo = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteTodoInput = {
  id: string;
};

export type CreateTableauloginInput = {
  id?: string | null;
  username: string;
  password: string;
  sitename: string;
};

export type ModelTableauloginConditionInput = {
  username?: ModelStringInput | null;
  password?: ModelStringInput | null;
  sitename?: ModelStringInput | null;
  and?: Array<ModelTableauloginConditionInput | null> | null;
  or?: Array<ModelTableauloginConditionInput | null> | null;
  not?: ModelTableauloginConditionInput | null;
};

export type Tableaulogin = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauloginInput = {
  id: string;
  username?: string | null;
  password?: string | null;
  sitename?: string | null;
};

export type DeleteTableauloginInput = {
  id: string;
};

export type CreateQuicksightloginInput = {
  id?: string | null;
  awsaccountId: string;
};

export type ModelQuicksightloginConditionInput = {
  awsaccountId?: ModelIDInput | null;
  and?: Array<ModelQuicksightloginConditionInput | null> | null;
  or?: Array<ModelQuicksightloginConditionInput | null> | null;
  not?: ModelQuicksightloginConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Quicksightlogin = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksightloginInput = {
  id: string;
  awsaccountId?: string | null;
};

export type DeleteQuicksightloginInput = {
  id: string;
};

export type CreateCustomerInput = {
  CustomerId: string;
  name: string;
  id?: string | null;
};

export type ModelCustomerConditionInput = {
  CustomerId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCustomerConditionInput | null> | null;
  or?: Array<ModelCustomerConditionInput | null> | null;
  not?: ModelCustomerConditionInput | null;
};

export type Customer = {
  __typename: "Customer";
  CustomerId: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCustomerInput = {
  CustomerId?: string | null;
  name?: string | null;
  id: string;
};

export type DeleteCustomerInput = {
  id: string;
};

export type CreateDepartmentInput = {
  Did: string;
  CustomerId: string;
  Dname: string;
  id?: string | null;
};

export type ModelDepartmentConditionInput = {
  Did?: ModelIDInput | null;
  CustomerId?: ModelIDInput | null;
  Dname?: ModelStringInput | null;
  and?: Array<ModelDepartmentConditionInput | null> | null;
  or?: Array<ModelDepartmentConditionInput | null> | null;
  not?: ModelDepartmentConditionInput | null;
};

export type Department = {
  __typename: "Department";
  Did: string;
  CustomerId: string;
  Dname: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDepartmentInput = {
  Did?: string | null;
  CustomerId?: string | null;
  Dname?: string | null;
  id: string;
};

export type DeleteDepartmentInput = {
  id: string;
};

export type CreateTableauProjectInput = {
  TProId: string;
  name: string;
  Did: string;
  id?: string | null;
};

export type ModelTableauProjectConditionInput = {
  TProId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  Did?: ModelStringInput | null;
  and?: Array<ModelTableauProjectConditionInput | null> | null;
  or?: Array<ModelTableauProjectConditionInput | null> | null;
  not?: ModelTableauProjectConditionInput | null;
};

export type TableauProject = {
  __typename: "TableauProject";
  TProId: string;
  name: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauProjectInput = {
  TProId?: string | null;
  name?: string | null;
  Did?: string | null;
  id: string;
};

export type DeleteTableauProjectInput = {
  id: string;
};

export type CreateTableauWorkbookInput = {
  WbId: string;
  name: string;
  TProId: string;
  id?: string | null;
};

export type ModelTableauWorkbookConditionInput = {
  WbId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  TProId?: ModelIDInput | null;
  and?: Array<ModelTableauWorkbookConditionInput | null> | null;
  or?: Array<ModelTableauWorkbookConditionInput | null> | null;
  not?: ModelTableauWorkbookConditionInput | null;
};

export type TableauWorkbook = {
  __typename: "TableauWorkbook";
  WbId: string;
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauWorkbookInput = {
  WbId?: string | null;
  name?: string | null;
  TProId?: string | null;
  id: string;
};

export type DeleteTableauWorkbookInput = {
  id: string;
};

export type CreateTableauSheetInput = {
  name: string;
  WbId: string;
  Tsid: string;
  id?: string | null;
};

export type ModelTableauSheetConditionInput = {
  name?: ModelStringInput | null;
  WbId?: ModelIDInput | null;
  Tsid?: ModelIDInput | null;
  and?: Array<ModelTableauSheetConditionInput | null> | null;
  or?: Array<ModelTableauSheetConditionInput | null> | null;
  not?: ModelTableauSheetConditionInput | null;
};

export type TableauSheet = {
  __typename: "TableauSheet";
  name: string;
  WbId: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauSheetInput = {
  name?: string | null;
  WbId?: string | null;
  Tsid?: string | null;
  id: string;
};

export type DeleteTableauSheetInput = {
  id: string;
};

export type CreateTableauGraphInput = {
  name: string;
  Tsid: string;
  id?: string | null;
};

export type ModelTableauGraphConditionInput = {
  name?: ModelStringInput | null;
  Tsid?: ModelIDInput | null;
  and?: Array<ModelTableauGraphConditionInput | null> | null;
  or?: Array<ModelTableauGraphConditionInput | null> | null;
  not?: ModelTableauGraphConditionInput | null;
};

export type TableauGraph = {
  __typename: "TableauGraph";
  name: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauGraphInput = {
  name?: string | null;
  Tsid?: string | null;
  id: string;
};

export type DeleteTableauGraphInput = {
  id: string;
};

export type CreateTableauEnvInput = {
  name: string;
  TProId: string;
  id?: string | null;
};

export type ModelTableauEnvConditionInput = {
  name?: ModelStringInput | null;
  TProId?: ModelIDInput | null;
  and?: Array<ModelTableauEnvConditionInput | null> | null;
  or?: Array<ModelTableauEnvConditionInput | null> | null;
  not?: ModelTableauEnvConditionInput | null;
};

export type TableauEnv = {
  __typename: "TableauEnv";
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauEnvInput = {
  name?: string | null;
  TProId?: string | null;
  id: string;
};

export type DeleteTableauEnvInput = {
  id: string;
};

export type CreateQuicksiteProjectInput = {
  name: string;
  QProId: string;
  Did: string;
  id?: string | null;
};

export type ModelQuicksiteProjectConditionInput = {
  name?: ModelStringInput | null;
  QProId?: ModelIDInput | null;
  Did?: ModelIDInput | null;
  and?: Array<ModelQuicksiteProjectConditionInput | null> | null;
  or?: Array<ModelQuicksiteProjectConditionInput | null> | null;
  not?: ModelQuicksiteProjectConditionInput | null;
};

export type QuicksiteProject = {
  __typename: "QuicksiteProject";
  name: string;
  QProId: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksiteProjectInput = {
  name?: string | null;
  QProId?: string | null;
  Did?: string | null;
  id: string;
};

export type DeleteQuicksiteProjectInput = {
  id: string;
};

export type CreateQuicksiteTemplateInput = {
  QtemId: string;
  name: string;
  analysisId: string;
  QProId: string;
  id?: string | null;
};

export type ModelQuicksiteTemplateConditionInput = {
  QtemId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  analysisId?: ModelIDInput | null;
  QProId?: ModelIDInput | null;
  and?: Array<ModelQuicksiteTemplateConditionInput | null> | null;
  or?: Array<ModelQuicksiteTemplateConditionInput | null> | null;
  not?: ModelQuicksiteTemplateConditionInput | null;
};

export type QuicksiteTemplate = {
  __typename: "QuicksiteTemplate";
  QtemId: string;
  name: string;
  analysisId: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksiteTemplateInput = {
  QtemId?: string | null;
  name?: string | null;
  analysisId?: string | null;
  QProId?: string | null;
  id: string;
};

export type DeleteQuicksiteTemplateInput = {
  id: string;
};

export type CreateQuicksiteAnalysisInput = {
  name: string;
  analysisId: string;
  QtemId: string;
  id?: string | null;
};

export type ModelQuicksiteAnalysisConditionInput = {
  name?: ModelStringInput | null;
  analysisId?: ModelIDInput | null;
  QtemId?: ModelIDInput | null;
  and?: Array<ModelQuicksiteAnalysisConditionInput | null> | null;
  or?: Array<ModelQuicksiteAnalysisConditionInput | null> | null;
  not?: ModelQuicksiteAnalysisConditionInput | null;
};

export type QuicksiteAnalysis = {
  __typename: "QuicksiteAnalysis";
  name: string;
  analysisId: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksiteAnalysisInput = {
  name?: string | null;
  analysisId?: string | null;
  QtemId?: string | null;
  id: string;
};

export type DeleteQuicksiteAnalysisInput = {
  id: string;
};

export type CreateQuicksiteDashboardInput = {
  name: string;
  QtemId: string;
  id?: string | null;
};

export type ModelQuicksiteDashboardConditionInput = {
  name?: ModelStringInput | null;
  QtemId?: ModelIDInput | null;
  and?: Array<ModelQuicksiteDashboardConditionInput | null> | null;
  or?: Array<ModelQuicksiteDashboardConditionInput | null> | null;
  not?: ModelQuicksiteDashboardConditionInput | null;
};

export type QuicksiteDashboard = {
  __typename: "QuicksiteDashboard";
  name: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksiteDashboardInput = {
  name?: string | null;
  QtemId?: string | null;
  id: string;
};

export type DeleteQuicksiteDashboardInput = {
  id: string;
};

export type CreateQuicksiteEnvInput = {
  name: string;
  QProId: string;
  id?: string | null;
};

export type ModelQuicksiteEnvConditionInput = {
  name?: ModelStringInput | null;
  QProId?: ModelIDInput | null;
  and?: Array<ModelQuicksiteEnvConditionInput | null> | null;
  or?: Array<ModelQuicksiteEnvConditionInput | null> | null;
  not?: ModelQuicksiteEnvConditionInput | null;
};

export type QuicksiteEnv = {
  __typename: "QuicksiteEnv";
  name: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksiteEnvInput = {
  name?: string | null;
  QProId?: string | null;
  id: string;
};

export type DeleteQuicksiteEnvInput = {
  id: string;
};

export type CreateBIMProjectInput = {
  Did: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id?: string | null;
};

export enum BIPlatform {
  TABLEAU = "TABLEAU",
  QUICKSIGHT = "QUICKSIGHT"
}

export type ModelBIMProjectConditionInput = {
  Did?: ModelIDInput | null;
  name?: ModelStringInput | null;
  source?: ModelBIPlatformInput | null;
  destination?: ModelBIPlatformInput | null;
  and?: Array<ModelBIMProjectConditionInput | null> | null;
  or?: Array<ModelBIMProjectConditionInput | null> | null;
  not?: ModelBIMProjectConditionInput | null;
};

export type ModelBIPlatformInput = {
  eq?: BIPlatform | null;
  ne?: BIPlatform | null;
};

export type BIMProject = {
  __typename: "BIMProject";
  Did: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBIMProjectInput = {
  Did?: string | null;
  name?: string | null;
  source?: BIPlatform | null;
  destination?: BIPlatform | null;
  id: string;
};

export type DeleteBIMProjectInput = {
  id: string;
};

export type CreateDatasetInput = {
  name: string;
  datasources: string;
  files: string;
  id?: string | null;
};

export type ModelDatasetConditionInput = {
  name?: ModelStringInput | null;
  datasources?: ModelStringInput | null;
  files?: ModelStringInput | null;
  and?: Array<ModelDatasetConditionInput | null> | null;
  or?: Array<ModelDatasetConditionInput | null> | null;
  not?: ModelDatasetConditionInput | null;
};

export type Dataset = {
  __typename: "Dataset";
  name: string;
  datasources: string;
  files: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDatasetInput = {
  name?: string | null;
  datasources?: string | null;
  files?: string | null;
  id: string;
};

export type DeleteDatasetInput = {
  id: string;
};

export type CreateDatasouceInput = {
  name: string;
  dsid: string;
  id?: string | null;
};

export type ModelDatasouceConditionInput = {
  name?: ModelStringInput | null;
  dsid?: ModelIDInput | null;
  and?: Array<ModelDatasouceConditionInput | null> | null;
  or?: Array<ModelDatasouceConditionInput | null> | null;
  not?: ModelDatasouceConditionInput | null;
};

export type Datasouce = {
  __typename: "Datasouce";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDatasouceInput = {
  name?: string | null;
  dsid?: string | null;
  id: string;
};

export type DeleteDatasouceInput = {
  id: string;
};

export type CreateQuicksightFolderInput = {
  name: string;
  id?: string | null;
};

export type ModelQuicksightFolderConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelQuicksightFolderConditionInput | null> | null;
  or?: Array<ModelQuicksightFolderConditionInput | null> | null;
  not?: ModelQuicksightFolderConditionInput | null;
};

export type QuicksightFolder = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksightFolderInput = {
  name?: string | null;
  id: string;
};

export type DeleteQuicksightFolderInput = {
  id: string;
};

export type CreateQuicksightGroupInput = {
  name: string;
  id?: string | null;
};

export type ModelQuicksightGroupConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelQuicksightGroupConditionInput | null> | null;
  or?: Array<ModelQuicksightGroupConditionInput | null> | null;
  not?: ModelQuicksightGroupConditionInput | null;
};

export type QuicksightGroup = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksightGroupInput = {
  name?: string | null;
  id: string;
};

export type DeleteQuicksightGroupInput = {
  id: string;
};

export type CreateFileInput = {
  name: string;
  id?: string | null;
};

export type ModelFileConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelFileConditionInput | null> | null;
  or?: Array<ModelFileConditionInput | null> | null;
  not?: ModelFileConditionInput | null;
};

export type File = {
  __typename: "File";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFileInput = {
  name?: string | null;
  id: string;
};

export type DeleteFileInput = {
  id: string;
};

export type CreateTableInput = {
  name: string;
  dsid: string;
  id?: string | null;
};

export type ModelTableConditionInput = {
  name?: ModelStringInput | null;
  dsid?: ModelIDInput | null;
  and?: Array<ModelTableConditionInput | null> | null;
  or?: Array<ModelTableConditionInput | null> | null;
  not?: ModelTableConditionInput | null;
};

export type Table = {
  __typename: "Table";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableInput = {
  name?: string | null;
  dsid?: string | null;
  id: string;
};

export type DeleteTableInput = {
  id: string;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection";
  items: Array<Todo | null>;
  nextToken?: string | null;
};

export type ModelTableauloginFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  password?: ModelStringInput | null;
  sitename?: ModelStringInput | null;
  and?: Array<ModelTableauloginFilterInput | null> | null;
  or?: Array<ModelTableauloginFilterInput | null> | null;
  not?: ModelTableauloginFilterInput | null;
};

export type ModelTableauloginConnection = {
  __typename: "ModelTableauloginConnection";
  items: Array<Tableaulogin | null>;
  nextToken?: string | null;
};

export type ModelQuicksightloginFilterInput = {
  id?: ModelIDInput | null;
  awsaccountId?: ModelIDInput | null;
  and?: Array<ModelQuicksightloginFilterInput | null> | null;
  or?: Array<ModelQuicksightloginFilterInput | null> | null;
  not?: ModelQuicksightloginFilterInput | null;
};

export type ModelQuicksightloginConnection = {
  __typename: "ModelQuicksightloginConnection";
  items: Array<Quicksightlogin | null>;
  nextToken?: string | null;
};

export type ModelCustomerFilterInput = {
  CustomerId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection";
  items: Array<Customer | null>;
  nextToken?: string | null;
};

export type ModelDepartmentFilterInput = {
  Did?: ModelIDInput | null;
  CustomerId?: ModelIDInput | null;
  Dname?: ModelStringInput | null;
  and?: Array<ModelDepartmentFilterInput | null> | null;
  or?: Array<ModelDepartmentFilterInput | null> | null;
  not?: ModelDepartmentFilterInput | null;
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection";
  items: Array<Department | null>;
  nextToken?: string | null;
};

export type ModelTableauProjectFilterInput = {
  TProId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  Did?: ModelStringInput | null;
  and?: Array<ModelTableauProjectFilterInput | null> | null;
  or?: Array<ModelTableauProjectFilterInput | null> | null;
  not?: ModelTableauProjectFilterInput | null;
};

export type ModelTableauProjectConnection = {
  __typename: "ModelTableauProjectConnection";
  items: Array<TableauProject | null>;
  nextToken?: string | null;
};

export type ModelTableauWorkbookFilterInput = {
  WbId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  TProId?: ModelIDInput | null;
  and?: Array<ModelTableauWorkbookFilterInput | null> | null;
  or?: Array<ModelTableauWorkbookFilterInput | null> | null;
  not?: ModelTableauWorkbookFilterInput | null;
};

export type ModelTableauWorkbookConnection = {
  __typename: "ModelTableauWorkbookConnection";
  items: Array<TableauWorkbook | null>;
  nextToken?: string | null;
};

export type ModelTableauSheetFilterInput = {
  name?: ModelStringInput | null;
  WbId?: ModelIDInput | null;
  Tsid?: ModelIDInput | null;
  and?: Array<ModelTableauSheetFilterInput | null> | null;
  or?: Array<ModelTableauSheetFilterInput | null> | null;
  not?: ModelTableauSheetFilterInput | null;
};

export type ModelTableauSheetConnection = {
  __typename: "ModelTableauSheetConnection";
  items: Array<TableauSheet | null>;
  nextToken?: string | null;
};

export type ModelTableauGraphFilterInput = {
  name?: ModelStringInput | null;
  Tsid?: ModelIDInput | null;
  and?: Array<ModelTableauGraphFilterInput | null> | null;
  or?: Array<ModelTableauGraphFilterInput | null> | null;
  not?: ModelTableauGraphFilterInput | null;
};

export type ModelTableauGraphConnection = {
  __typename: "ModelTableauGraphConnection";
  items: Array<TableauGraph | null>;
  nextToken?: string | null;
};

export type ModelTableauEnvFilterInput = {
  name?: ModelStringInput | null;
  TProId?: ModelIDInput | null;
  and?: Array<ModelTableauEnvFilterInput | null> | null;
  or?: Array<ModelTableauEnvFilterInput | null> | null;
  not?: ModelTableauEnvFilterInput | null;
};

export type ModelTableauEnvConnection = {
  __typename: "ModelTableauEnvConnection";
  items: Array<TableauEnv | null>;
  nextToken?: string | null;
};

export type ModelQuicksiteProjectFilterInput = {
  name?: ModelStringInput | null;
  QProId?: ModelIDInput | null;
  Did?: ModelIDInput | null;
  and?: Array<ModelQuicksiteProjectFilterInput | null> | null;
  or?: Array<ModelQuicksiteProjectFilterInput | null> | null;
  not?: ModelQuicksiteProjectFilterInput | null;
};

export type ModelQuicksiteProjectConnection = {
  __typename: "ModelQuicksiteProjectConnection";
  items: Array<QuicksiteProject | null>;
  nextToken?: string | null;
};

export type ModelQuicksiteTemplateFilterInput = {
  QtemId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  analysisId?: ModelIDInput | null;
  QProId?: ModelIDInput | null;
  and?: Array<ModelQuicksiteTemplateFilterInput | null> | null;
  or?: Array<ModelQuicksiteTemplateFilterInput | null> | null;
  not?: ModelQuicksiteTemplateFilterInput | null;
};

export type ModelQuicksiteTemplateConnection = {
  __typename: "ModelQuicksiteTemplateConnection";
  items: Array<QuicksiteTemplate | null>;
  nextToken?: string | null;
};

export type ModelQuicksiteAnalysisFilterInput = {
  name?: ModelStringInput | null;
  analysisId?: ModelIDInput | null;
  QtemId?: ModelIDInput | null;
  and?: Array<ModelQuicksiteAnalysisFilterInput | null> | null;
  or?: Array<ModelQuicksiteAnalysisFilterInput | null> | null;
  not?: ModelQuicksiteAnalysisFilterInput | null;
};

export type ModelQuicksiteAnalysisConnection = {
  __typename: "ModelQuicksiteAnalysisConnection";
  items: Array<QuicksiteAnalysis | null>;
  nextToken?: string | null;
};

export type ModelQuicksiteDashboardFilterInput = {
  name?: ModelStringInput | null;
  QtemId?: ModelIDInput | null;
  and?: Array<ModelQuicksiteDashboardFilterInput | null> | null;
  or?: Array<ModelQuicksiteDashboardFilterInput | null> | null;
  not?: ModelQuicksiteDashboardFilterInput | null;
};

export type ModelQuicksiteDashboardConnection = {
  __typename: "ModelQuicksiteDashboardConnection";
  items: Array<QuicksiteDashboard | null>;
  nextToken?: string | null;
};

export type ModelQuicksiteEnvFilterInput = {
  name?: ModelStringInput | null;
  QProId?: ModelIDInput | null;
  and?: Array<ModelQuicksiteEnvFilterInput | null> | null;
  or?: Array<ModelQuicksiteEnvFilterInput | null> | null;
  not?: ModelQuicksiteEnvFilterInput | null;
};

export type ModelQuicksiteEnvConnection = {
  __typename: "ModelQuicksiteEnvConnection";
  items: Array<QuicksiteEnv | null>;
  nextToken?: string | null;
};

export type ModelBIMProjectFilterInput = {
  Did?: ModelIDInput | null;
  name?: ModelStringInput | null;
  source?: ModelBIPlatformInput | null;
  destination?: ModelBIPlatformInput | null;
  and?: Array<ModelBIMProjectFilterInput | null> | null;
  or?: Array<ModelBIMProjectFilterInput | null> | null;
  not?: ModelBIMProjectFilterInput | null;
};

export type ModelBIMProjectConnection = {
  __typename: "ModelBIMProjectConnection";
  items: Array<BIMProject | null>;
  nextToken?: string | null;
};

export type ModelDatasetFilterInput = {
  name?: ModelStringInput | null;
  datasources?: ModelStringInput | null;
  files?: ModelStringInput | null;
  and?: Array<ModelDatasetFilterInput | null> | null;
  or?: Array<ModelDatasetFilterInput | null> | null;
  not?: ModelDatasetFilterInput | null;
};

export type ModelDatasetConnection = {
  __typename: "ModelDatasetConnection";
  items: Array<Dataset | null>;
  nextToken?: string | null;
};

export type ModelDatasouceFilterInput = {
  name?: ModelStringInput | null;
  dsid?: ModelIDInput | null;
  and?: Array<ModelDatasouceFilterInput | null> | null;
  or?: Array<ModelDatasouceFilterInput | null> | null;
  not?: ModelDatasouceFilterInput | null;
};

export type ModelDatasouceConnection = {
  __typename: "ModelDatasouceConnection";
  items: Array<Datasouce | null>;
  nextToken?: string | null;
};

export type ModelQuicksightFolderFilterInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelQuicksightFolderFilterInput | null> | null;
  or?: Array<ModelQuicksightFolderFilterInput | null> | null;
  not?: ModelQuicksightFolderFilterInput | null;
};

export type ModelQuicksightFolderConnection = {
  __typename: "ModelQuicksightFolderConnection";
  items: Array<QuicksightFolder | null>;
  nextToken?: string | null;
};

export type ModelQuicksightGroupFilterInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelQuicksightGroupFilterInput | null> | null;
  or?: Array<ModelQuicksightGroupFilterInput | null> | null;
  not?: ModelQuicksightGroupFilterInput | null;
};

export type ModelQuicksightGroupConnection = {
  __typename: "ModelQuicksightGroupConnection";
  items: Array<QuicksightGroup | null>;
  nextToken?: string | null;
};

export type ModelFileFilterInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelFileFilterInput | null> | null;
  or?: Array<ModelFileFilterInput | null> | null;
  not?: ModelFileFilterInput | null;
};

export type ModelFileConnection = {
  __typename: "ModelFileConnection";
  items: Array<File | null>;
  nextToken?: string | null;
};

export type ModelTableFilterInput = {
  name?: ModelStringInput | null;
  dsid?: ModelIDInput | null;
  and?: Array<ModelTableFilterInput | null> | null;
  or?: Array<ModelTableFilterInput | null> | null;
  not?: ModelTableFilterInput | null;
};

export type ModelTableConnection = {
  __typename: "ModelTableConnection";
  items: Array<Table | null>;
  nextToken?: string | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTableauloginMutation = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauloginMutation = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTableauloginMutation = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuicksightloginMutation = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksightloginMutation = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuicksightloginMutation = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCustomerMutation = {
  __typename: "Customer";
  CustomerId: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCustomerMutation = {
  __typename: "Customer";
  CustomerId: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCustomerMutation = {
  __typename: "Customer";
  CustomerId: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateDepartmentMutation = {
  __typename: "Department";
  Did: string;
  CustomerId: string;
  Dname: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDepartmentMutation = {
  __typename: "Department";
  Did: string;
  CustomerId: string;
  Dname: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDepartmentMutation = {
  __typename: "Department";
  Did: string;
  CustomerId: string;
  Dname: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTableauProjectMutation = {
  __typename: "TableauProject";
  TProId: string;
  name: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauProjectMutation = {
  __typename: "TableauProject";
  TProId: string;
  name: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTableauProjectMutation = {
  __typename: "TableauProject";
  TProId: string;
  name: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTableauWorkbookMutation = {
  __typename: "TableauWorkbook";
  WbId: string;
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauWorkbookMutation = {
  __typename: "TableauWorkbook";
  WbId: string;
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTableauWorkbookMutation = {
  __typename: "TableauWorkbook";
  WbId: string;
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTableauSheetMutation = {
  __typename: "TableauSheet";
  name: string;
  WbId: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauSheetMutation = {
  __typename: "TableauSheet";
  name: string;
  WbId: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTableauSheetMutation = {
  __typename: "TableauSheet";
  name: string;
  WbId: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTableauGraphMutation = {
  __typename: "TableauGraph";
  name: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauGraphMutation = {
  __typename: "TableauGraph";
  name: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTableauGraphMutation = {
  __typename: "TableauGraph";
  name: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTableauEnvMutation = {
  __typename: "TableauEnv";
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableauEnvMutation = {
  __typename: "TableauEnv";
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTableauEnvMutation = {
  __typename: "TableauEnv";
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuicksiteProjectMutation = {
  __typename: "QuicksiteProject";
  name: string;
  QProId: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksiteProjectMutation = {
  __typename: "QuicksiteProject";
  name: string;
  QProId: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuicksiteProjectMutation = {
  __typename: "QuicksiteProject";
  name: string;
  QProId: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuicksiteTemplateMutation = {
  __typename: "QuicksiteTemplate";
  QtemId: string;
  name: string;
  analysisId: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksiteTemplateMutation = {
  __typename: "QuicksiteTemplate";
  QtemId: string;
  name: string;
  analysisId: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuicksiteTemplateMutation = {
  __typename: "QuicksiteTemplate";
  QtemId: string;
  name: string;
  analysisId: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuicksiteAnalysisMutation = {
  __typename: "QuicksiteAnalysis";
  name: string;
  analysisId: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksiteAnalysisMutation = {
  __typename: "QuicksiteAnalysis";
  name: string;
  analysisId: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuicksiteAnalysisMutation = {
  __typename: "QuicksiteAnalysis";
  name: string;
  analysisId: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuicksiteDashboardMutation = {
  __typename: "QuicksiteDashboard";
  name: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksiteDashboardMutation = {
  __typename: "QuicksiteDashboard";
  name: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuicksiteDashboardMutation = {
  __typename: "QuicksiteDashboard";
  name: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuicksiteEnvMutation = {
  __typename: "QuicksiteEnv";
  name: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksiteEnvMutation = {
  __typename: "QuicksiteEnv";
  name: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuicksiteEnvMutation = {
  __typename: "QuicksiteEnv";
  name: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateBIMProjectMutation = {
  __typename: "BIMProject";
  Did: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBIMProjectMutation = {
  __typename: "BIMProject";
  Did: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBIMProjectMutation = {
  __typename: "BIMProject";
  Did: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateDatasetMutation = {
  __typename: "Dataset";
  name: string;
  datasources: string;
  files: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDatasetMutation = {
  __typename: "Dataset";
  name: string;
  datasources: string;
  files: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDatasetMutation = {
  __typename: "Dataset";
  name: string;
  datasources: string;
  files: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateDatasouceMutation = {
  __typename: "Datasouce";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDatasouceMutation = {
  __typename: "Datasouce";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDatasouceMutation = {
  __typename: "Datasouce";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuicksightFolderMutation = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksightFolderMutation = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuicksightFolderMutation = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuicksightGroupMutation = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuicksightGroupMutation = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuicksightGroupMutation = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateFileMutation = {
  __typename: "File";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFileMutation = {
  __typename: "File";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFileMutation = {
  __typename: "File";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTableMutation = {
  __typename: "Table";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTableMutation = {
  __typename: "Table";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTableMutation = {
  __typename: "Table";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTableauloginQuery = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTableauloginsQuery = {
  __typename: "ModelTableauloginConnection";
  items: Array<{
    __typename: "Tableaulogin";
    id: string;
    username: string;
    password: string;
    sitename: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuicksightloginQuery = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
};

export type ListQuicksightloginsQuery = {
  __typename: "ModelQuicksightloginConnection";
  items: Array<{
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCustomerQuery = {
  __typename: "Customer";
  CustomerId: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
    CustomerId: string;
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetDepartmentQuery = {
  __typename: "Department";
  Did: string;
  CustomerId: string;
  Dname: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListDepartmentsQuery = {
  __typename: "ModelDepartmentConnection";
  items: Array<{
    __typename: "Department";
    Did: string;
    CustomerId: string;
    Dname: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTableauProjectQuery = {
  __typename: "TableauProject";
  TProId: string;
  name: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTableauProjectsQuery = {
  __typename: "ModelTableauProjectConnection";
  items: Array<{
    __typename: "TableauProject";
    TProId: string;
    name: string;
    Did: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTableauWorkbookQuery = {
  __typename: "TableauWorkbook";
  WbId: string;
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTableauWorkbooksQuery = {
  __typename: "ModelTableauWorkbookConnection";
  items: Array<{
    __typename: "TableauWorkbook";
    WbId: string;
    name: string;
    TProId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTableauSheetQuery = {
  __typename: "TableauSheet";
  name: string;
  WbId: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTableauSheetsQuery = {
  __typename: "ModelTableauSheetConnection";
  items: Array<{
    __typename: "TableauSheet";
    name: string;
    WbId: string;
    Tsid: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTableauGraphQuery = {
  __typename: "TableauGraph";
  name: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTableauGraphsQuery = {
  __typename: "ModelTableauGraphConnection";
  items: Array<{
    __typename: "TableauGraph";
    name: string;
    Tsid: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTableauEnvQuery = {
  __typename: "TableauEnv";
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTableauEnvsQuery = {
  __typename: "ModelTableauEnvConnection";
  items: Array<{
    __typename: "TableauEnv";
    name: string;
    TProId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuicksiteProjectQuery = {
  __typename: "QuicksiteProject";
  name: string;
  QProId: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListQuicksiteProjectsQuery = {
  __typename: "ModelQuicksiteProjectConnection";
  items: Array<{
    __typename: "QuicksiteProject";
    name: string;
    QProId: string;
    Did: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuicksiteTemplateQuery = {
  __typename: "QuicksiteTemplate";
  QtemId: string;
  name: string;
  analysisId: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListQuicksiteTemplatesQuery = {
  __typename: "ModelQuicksiteTemplateConnection";
  items: Array<{
    __typename: "QuicksiteTemplate";
    QtemId: string;
    name: string;
    analysisId: string;
    QProId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuicksiteAnalysisQuery = {
  __typename: "QuicksiteAnalysis";
  name: string;
  analysisId: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListQuicksiteAnalysesQuery = {
  __typename: "ModelQuicksiteAnalysisConnection";
  items: Array<{
    __typename: "QuicksiteAnalysis";
    name: string;
    analysisId: string;
    QtemId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuicksiteDashboardQuery = {
  __typename: "QuicksiteDashboard";
  name: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListQuicksiteDashboardsQuery = {
  __typename: "ModelQuicksiteDashboardConnection";
  items: Array<{
    __typename: "QuicksiteDashboard";
    name: string;
    QtemId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuicksiteEnvQuery = {
  __typename: "QuicksiteEnv";
  name: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListQuicksiteEnvsQuery = {
  __typename: "ModelQuicksiteEnvConnection";
  items: Array<{
    __typename: "QuicksiteEnv";
    name: string;
    QProId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetBIMProjectQuery = {
  __typename: "BIMProject";
  Did: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListBIMProjectsQuery = {
  __typename: "ModelBIMProjectConnection";
  items: Array<{
    __typename: "BIMProject";
    Did: string;
    name: string;
    source: BIPlatform;
    destination: BIPlatform;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetDatasetQuery = {
  __typename: "Dataset";
  name: string;
  datasources: string;
  files: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListDatasetsQuery = {
  __typename: "ModelDatasetConnection";
  items: Array<{
    __typename: "Dataset";
    name: string;
    datasources: string;
    files: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetDatasouceQuery = {
  __typename: "Datasouce";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListDatasoucesQuery = {
  __typename: "ModelDatasouceConnection";
  items: Array<{
    __typename: "Datasouce";
    name: string;
    dsid: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuicksightFolderQuery = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListQuicksightFoldersQuery = {
  __typename: "ModelQuicksightFolderConnection";
  items: Array<{
    __typename: "QuicksightFolder";
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuicksightGroupQuery = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListQuicksightGroupsQuery = {
  __typename: "ModelQuicksightGroupConnection";
  items: Array<{
    __typename: "QuicksightGroup";
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetFileQuery = {
  __typename: "File";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListFilesQuery = {
  __typename: "ModelFileConnection";
  items: Array<{
    __typename: "File";
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTableQuery = {
  __typename: "Table";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTablesQuery = {
  __typename: "ModelTableConnection";
  items: Array<{
    __typename: "Table";
    name: string;
    dsid: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTableauloginSubscription = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTableauloginSubscription = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTableauloginSubscription = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuicksightloginSubscription = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuicksightloginSubscription = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuicksightloginSubscription = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCustomerSubscription = {
  __typename: "Customer";
  CustomerId: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCustomerSubscription = {
  __typename: "Customer";
  CustomerId: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCustomerSubscription = {
  __typename: "Customer";
  CustomerId: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDepartmentSubscription = {
  __typename: "Department";
  Did: string;
  CustomerId: string;
  Dname: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDepartmentSubscription = {
  __typename: "Department";
  Did: string;
  CustomerId: string;
  Dname: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDepartmentSubscription = {
  __typename: "Department";
  Did: string;
  CustomerId: string;
  Dname: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTableauProjectSubscription = {
  __typename: "TableauProject";
  TProId: string;
  name: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTableauProjectSubscription = {
  __typename: "TableauProject";
  TProId: string;
  name: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTableauProjectSubscription = {
  __typename: "TableauProject";
  TProId: string;
  name: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTableauWorkbookSubscription = {
  __typename: "TableauWorkbook";
  WbId: string;
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTableauWorkbookSubscription = {
  __typename: "TableauWorkbook";
  WbId: string;
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTableauWorkbookSubscription = {
  __typename: "TableauWorkbook";
  WbId: string;
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTableauSheetSubscription = {
  __typename: "TableauSheet";
  name: string;
  WbId: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTableauSheetSubscription = {
  __typename: "TableauSheet";
  name: string;
  WbId: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTableauSheetSubscription = {
  __typename: "TableauSheet";
  name: string;
  WbId: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTableauGraphSubscription = {
  __typename: "TableauGraph";
  name: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTableauGraphSubscription = {
  __typename: "TableauGraph";
  name: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTableauGraphSubscription = {
  __typename: "TableauGraph";
  name: string;
  Tsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTableauEnvSubscription = {
  __typename: "TableauEnv";
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTableauEnvSubscription = {
  __typename: "TableauEnv";
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTableauEnvSubscription = {
  __typename: "TableauEnv";
  name: string;
  TProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuicksiteProjectSubscription = {
  __typename: "QuicksiteProject";
  name: string;
  QProId: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuicksiteProjectSubscription = {
  __typename: "QuicksiteProject";
  name: string;
  QProId: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuicksiteProjectSubscription = {
  __typename: "QuicksiteProject";
  name: string;
  QProId: string;
  Did: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuicksiteTemplateSubscription = {
  __typename: "QuicksiteTemplate";
  QtemId: string;
  name: string;
  analysisId: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuicksiteTemplateSubscription = {
  __typename: "QuicksiteTemplate";
  QtemId: string;
  name: string;
  analysisId: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuicksiteTemplateSubscription = {
  __typename: "QuicksiteTemplate";
  QtemId: string;
  name: string;
  analysisId: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuicksiteAnalysisSubscription = {
  __typename: "QuicksiteAnalysis";
  name: string;
  analysisId: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuicksiteAnalysisSubscription = {
  __typename: "QuicksiteAnalysis";
  name: string;
  analysisId: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuicksiteAnalysisSubscription = {
  __typename: "QuicksiteAnalysis";
  name: string;
  analysisId: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuicksiteDashboardSubscription = {
  __typename: "QuicksiteDashboard";
  name: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuicksiteDashboardSubscription = {
  __typename: "QuicksiteDashboard";
  name: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuicksiteDashboardSubscription = {
  __typename: "QuicksiteDashboard";
  name: string;
  QtemId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuicksiteEnvSubscription = {
  __typename: "QuicksiteEnv";
  name: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuicksiteEnvSubscription = {
  __typename: "QuicksiteEnv";
  name: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuicksiteEnvSubscription = {
  __typename: "QuicksiteEnv";
  name: string;
  QProId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBIMProjectSubscription = {
  __typename: "BIMProject";
  Did: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBIMProjectSubscription = {
  __typename: "BIMProject";
  Did: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBIMProjectSubscription = {
  __typename: "BIMProject";
  Did: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDatasetSubscription = {
  __typename: "Dataset";
  name: string;
  datasources: string;
  files: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDatasetSubscription = {
  __typename: "Dataset";
  name: string;
  datasources: string;
  files: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDatasetSubscription = {
  __typename: "Dataset";
  name: string;
  datasources: string;
  files: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDatasouceSubscription = {
  __typename: "Datasouce";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDatasouceSubscription = {
  __typename: "Datasouce";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDatasouceSubscription = {
  __typename: "Datasouce";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuicksightFolderSubscription = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuicksightFolderSubscription = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuicksightFolderSubscription = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuicksightGroupSubscription = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuicksightGroupSubscription = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuicksightGroupSubscription = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateFileSubscription = {
  __typename: "File";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFileSubscription = {
  __typename: "File";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFileSubscription = {
  __typename: "File";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTableSubscription = {
  __typename: "Table";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTableSubscription = {
  __typename: "Table";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTableSubscription = {
  __typename: "Table";
  name: string;
  dsid: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async CreateTableaulogin(
    input: CreateTableauloginInput,
    condition?: ModelTableauloginConditionInput
  ): Promise<CreateTableauloginMutation> {
    const statement = `mutation CreateTableaulogin($input: CreateTableauloginInput!, $condition: ModelTableauloginConditionInput) {
        createTableaulogin(input: $input, condition: $condition) {
          __typename
          id
          username
          password
          sitename
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauloginMutation>response.data.createTableaulogin;
  }
  async UpdateTableaulogin(
    input: UpdateTableauloginInput,
    condition?: ModelTableauloginConditionInput
  ): Promise<UpdateTableauloginMutation> {
    const statement = `mutation UpdateTableaulogin($input: UpdateTableauloginInput!, $condition: ModelTableauloginConditionInput) {
        updateTableaulogin(input: $input, condition: $condition) {
          __typename
          id
          username
          password
          sitename
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauloginMutation>response.data.updateTableaulogin;
  }
  async DeleteTableaulogin(
    input: DeleteTableauloginInput,
    condition?: ModelTableauloginConditionInput
  ): Promise<DeleteTableauloginMutation> {
    const statement = `mutation DeleteTableaulogin($input: DeleteTableauloginInput!, $condition: ModelTableauloginConditionInput) {
        deleteTableaulogin(input: $input, condition: $condition) {
          __typename
          id
          username
          password
          sitename
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauloginMutation>response.data.deleteTableaulogin;
  }
  async CreateQuicksightlogin(
    input: CreateQuicksightloginInput,
    condition?: ModelQuicksightloginConditionInput
  ): Promise<CreateQuicksightloginMutation> {
    const statement = `mutation CreateQuicksightlogin($input: CreateQuicksightloginInput!, $condition: ModelQuicksightloginConditionInput) {
        createQuicksightlogin(input: $input, condition: $condition) {
          __typename
          id
          awsaccountId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightloginMutation>response.data.createQuicksightlogin;
  }
  async UpdateQuicksightlogin(
    input: UpdateQuicksightloginInput,
    condition?: ModelQuicksightloginConditionInput
  ): Promise<UpdateQuicksightloginMutation> {
    const statement = `mutation UpdateQuicksightlogin($input: UpdateQuicksightloginInput!, $condition: ModelQuicksightloginConditionInput) {
        updateQuicksightlogin(input: $input, condition: $condition) {
          __typename
          id
          awsaccountId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightloginMutation>response.data.updateQuicksightlogin;
  }
  async DeleteQuicksightlogin(
    input: DeleteQuicksightloginInput,
    condition?: ModelQuicksightloginConditionInput
  ): Promise<DeleteQuicksightloginMutation> {
    const statement = `mutation DeleteQuicksightlogin($input: DeleteQuicksightloginInput!, $condition: ModelQuicksightloginConditionInput) {
        deleteQuicksightlogin(input: $input, condition: $condition) {
          __typename
          id
          awsaccountId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightloginMutation>response.data.deleteQuicksightlogin;
  }
  async CreateCustomer(
    input: CreateCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<CreateCustomerMutation> {
    const statement = `mutation CreateCustomer($input: CreateCustomerInput!, $condition: ModelCustomerConditionInput) {
        createCustomer(input: $input, condition: $condition) {
          __typename
          CustomerId
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCustomerMutation>response.data.createCustomer;
  }
  async UpdateCustomer(
    input: UpdateCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<UpdateCustomerMutation> {
    const statement = `mutation UpdateCustomer($input: UpdateCustomerInput!, $condition: ModelCustomerConditionInput) {
        updateCustomer(input: $input, condition: $condition) {
          __typename
          CustomerId
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCustomerMutation>response.data.updateCustomer;
  }
  async DeleteCustomer(
    input: DeleteCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<DeleteCustomerMutation> {
    const statement = `mutation DeleteCustomer($input: DeleteCustomerInput!, $condition: ModelCustomerConditionInput) {
        deleteCustomer(input: $input, condition: $condition) {
          __typename
          CustomerId
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCustomerMutation>response.data.deleteCustomer;
  }
  async CreateDepartment(
    input: CreateDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<CreateDepartmentMutation> {
    const statement = `mutation CreateDepartment($input: CreateDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        createDepartment(input: $input, condition: $condition) {
          __typename
          Did
          CustomerId
          Dname
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDepartmentMutation>response.data.createDepartment;
  }
  async UpdateDepartment(
    input: UpdateDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<UpdateDepartmentMutation> {
    const statement = `mutation UpdateDepartment($input: UpdateDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        updateDepartment(input: $input, condition: $condition) {
          __typename
          Did
          CustomerId
          Dname
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDepartmentMutation>response.data.updateDepartment;
  }
  async DeleteDepartment(
    input: DeleteDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<DeleteDepartmentMutation> {
    const statement = `mutation DeleteDepartment($input: DeleteDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        deleteDepartment(input: $input, condition: $condition) {
          __typename
          Did
          CustomerId
          Dname
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDepartmentMutation>response.data.deleteDepartment;
  }
  async CreateTableauProject(
    input: CreateTableauProjectInput,
    condition?: ModelTableauProjectConditionInput
  ): Promise<CreateTableauProjectMutation> {
    const statement = `mutation CreateTableauProject($input: CreateTableauProjectInput!, $condition: ModelTableauProjectConditionInput) {
        createTableauProject(input: $input, condition: $condition) {
          __typename
          TProId
          name
          Did
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauProjectMutation>response.data.createTableauProject;
  }
  async UpdateTableauProject(
    input: UpdateTableauProjectInput,
    condition?: ModelTableauProjectConditionInput
  ): Promise<UpdateTableauProjectMutation> {
    const statement = `mutation UpdateTableauProject($input: UpdateTableauProjectInput!, $condition: ModelTableauProjectConditionInput) {
        updateTableauProject(input: $input, condition: $condition) {
          __typename
          TProId
          name
          Did
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauProjectMutation>response.data.updateTableauProject;
  }
  async DeleteTableauProject(
    input: DeleteTableauProjectInput,
    condition?: ModelTableauProjectConditionInput
  ): Promise<DeleteTableauProjectMutation> {
    const statement = `mutation DeleteTableauProject($input: DeleteTableauProjectInput!, $condition: ModelTableauProjectConditionInput) {
        deleteTableauProject(input: $input, condition: $condition) {
          __typename
          TProId
          name
          Did
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauProjectMutation>response.data.deleteTableauProject;
  }
  async CreateTableauWorkbook(
    input: CreateTableauWorkbookInput,
    condition?: ModelTableauWorkbookConditionInput
  ): Promise<CreateTableauWorkbookMutation> {
    const statement = `mutation CreateTableauWorkbook($input: CreateTableauWorkbookInput!, $condition: ModelTableauWorkbookConditionInput) {
        createTableauWorkbook(input: $input, condition: $condition) {
          __typename
          WbId
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauWorkbookMutation>response.data.createTableauWorkbook;
  }
  async UpdateTableauWorkbook(
    input: UpdateTableauWorkbookInput,
    condition?: ModelTableauWorkbookConditionInput
  ): Promise<UpdateTableauWorkbookMutation> {
    const statement = `mutation UpdateTableauWorkbook($input: UpdateTableauWorkbookInput!, $condition: ModelTableauWorkbookConditionInput) {
        updateTableauWorkbook(input: $input, condition: $condition) {
          __typename
          WbId
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauWorkbookMutation>response.data.updateTableauWorkbook;
  }
  async DeleteTableauWorkbook(
    input: DeleteTableauWorkbookInput,
    condition?: ModelTableauWorkbookConditionInput
  ): Promise<DeleteTableauWorkbookMutation> {
    const statement = `mutation DeleteTableauWorkbook($input: DeleteTableauWorkbookInput!, $condition: ModelTableauWorkbookConditionInput) {
        deleteTableauWorkbook(input: $input, condition: $condition) {
          __typename
          WbId
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauWorkbookMutation>response.data.deleteTableauWorkbook;
  }
  async CreateTableauSheet(
    input: CreateTableauSheetInput,
    condition?: ModelTableauSheetConditionInput
  ): Promise<CreateTableauSheetMutation> {
    const statement = `mutation CreateTableauSheet($input: CreateTableauSheetInput!, $condition: ModelTableauSheetConditionInput) {
        createTableauSheet(input: $input, condition: $condition) {
          __typename
          name
          WbId
          Tsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauSheetMutation>response.data.createTableauSheet;
  }
  async UpdateTableauSheet(
    input: UpdateTableauSheetInput,
    condition?: ModelTableauSheetConditionInput
  ): Promise<UpdateTableauSheetMutation> {
    const statement = `mutation UpdateTableauSheet($input: UpdateTableauSheetInput!, $condition: ModelTableauSheetConditionInput) {
        updateTableauSheet(input: $input, condition: $condition) {
          __typename
          name
          WbId
          Tsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauSheetMutation>response.data.updateTableauSheet;
  }
  async DeleteTableauSheet(
    input: DeleteTableauSheetInput,
    condition?: ModelTableauSheetConditionInput
  ): Promise<DeleteTableauSheetMutation> {
    const statement = `mutation DeleteTableauSheet($input: DeleteTableauSheetInput!, $condition: ModelTableauSheetConditionInput) {
        deleteTableauSheet(input: $input, condition: $condition) {
          __typename
          name
          WbId
          Tsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauSheetMutation>response.data.deleteTableauSheet;
  }
  async CreateTableauGraph(
    input: CreateTableauGraphInput,
    condition?: ModelTableauGraphConditionInput
  ): Promise<CreateTableauGraphMutation> {
    const statement = `mutation CreateTableauGraph($input: CreateTableauGraphInput!, $condition: ModelTableauGraphConditionInput) {
        createTableauGraph(input: $input, condition: $condition) {
          __typename
          name
          Tsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauGraphMutation>response.data.createTableauGraph;
  }
  async UpdateTableauGraph(
    input: UpdateTableauGraphInput,
    condition?: ModelTableauGraphConditionInput
  ): Promise<UpdateTableauGraphMutation> {
    const statement = `mutation UpdateTableauGraph($input: UpdateTableauGraphInput!, $condition: ModelTableauGraphConditionInput) {
        updateTableauGraph(input: $input, condition: $condition) {
          __typename
          name
          Tsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauGraphMutation>response.data.updateTableauGraph;
  }
  async DeleteTableauGraph(
    input: DeleteTableauGraphInput,
    condition?: ModelTableauGraphConditionInput
  ): Promise<DeleteTableauGraphMutation> {
    const statement = `mutation DeleteTableauGraph($input: DeleteTableauGraphInput!, $condition: ModelTableauGraphConditionInput) {
        deleteTableauGraph(input: $input, condition: $condition) {
          __typename
          name
          Tsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauGraphMutation>response.data.deleteTableauGraph;
  }
  async CreateTableauEnv(
    input: CreateTableauEnvInput,
    condition?: ModelTableauEnvConditionInput
  ): Promise<CreateTableauEnvMutation> {
    const statement = `mutation CreateTableauEnv($input: CreateTableauEnvInput!, $condition: ModelTableauEnvConditionInput) {
        createTableauEnv(input: $input, condition: $condition) {
          __typename
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauEnvMutation>response.data.createTableauEnv;
  }
  async UpdateTableauEnv(
    input: UpdateTableauEnvInput,
    condition?: ModelTableauEnvConditionInput
  ): Promise<UpdateTableauEnvMutation> {
    const statement = `mutation UpdateTableauEnv($input: UpdateTableauEnvInput!, $condition: ModelTableauEnvConditionInput) {
        updateTableauEnv(input: $input, condition: $condition) {
          __typename
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauEnvMutation>response.data.updateTableauEnv;
  }
  async DeleteTableauEnv(
    input: DeleteTableauEnvInput,
    condition?: ModelTableauEnvConditionInput
  ): Promise<DeleteTableauEnvMutation> {
    const statement = `mutation DeleteTableauEnv($input: DeleteTableauEnvInput!, $condition: ModelTableauEnvConditionInput) {
        deleteTableauEnv(input: $input, condition: $condition) {
          __typename
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauEnvMutation>response.data.deleteTableauEnv;
  }
  async CreateQuicksiteProject(
    input: CreateQuicksiteProjectInput,
    condition?: ModelQuicksiteProjectConditionInput
  ): Promise<CreateQuicksiteProjectMutation> {
    const statement = `mutation CreateQuicksiteProject($input: CreateQuicksiteProjectInput!, $condition: ModelQuicksiteProjectConditionInput) {
        createQuicksiteProject(input: $input, condition: $condition) {
          __typename
          name
          QProId
          Did
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksiteProjectMutation>response.data.createQuicksiteProject;
  }
  async UpdateQuicksiteProject(
    input: UpdateQuicksiteProjectInput,
    condition?: ModelQuicksiteProjectConditionInput
  ): Promise<UpdateQuicksiteProjectMutation> {
    const statement = `mutation UpdateQuicksiteProject($input: UpdateQuicksiteProjectInput!, $condition: ModelQuicksiteProjectConditionInput) {
        updateQuicksiteProject(input: $input, condition: $condition) {
          __typename
          name
          QProId
          Did
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksiteProjectMutation>response.data.updateQuicksiteProject;
  }
  async DeleteQuicksiteProject(
    input: DeleteQuicksiteProjectInput,
    condition?: ModelQuicksiteProjectConditionInput
  ): Promise<DeleteQuicksiteProjectMutation> {
    const statement = `mutation DeleteQuicksiteProject($input: DeleteQuicksiteProjectInput!, $condition: ModelQuicksiteProjectConditionInput) {
        deleteQuicksiteProject(input: $input, condition: $condition) {
          __typename
          name
          QProId
          Did
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksiteProjectMutation>response.data.deleteQuicksiteProject;
  }
  async CreateQuicksiteTemplate(
    input: CreateQuicksiteTemplateInput,
    condition?: ModelQuicksiteTemplateConditionInput
  ): Promise<CreateQuicksiteTemplateMutation> {
    const statement = `mutation CreateQuicksiteTemplate($input: CreateQuicksiteTemplateInput!, $condition: ModelQuicksiteTemplateConditionInput) {
        createQuicksiteTemplate(input: $input, condition: $condition) {
          __typename
          QtemId
          name
          analysisId
          QProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksiteTemplateMutation>(
      response.data.createQuicksiteTemplate
    );
  }
  async UpdateQuicksiteTemplate(
    input: UpdateQuicksiteTemplateInput,
    condition?: ModelQuicksiteTemplateConditionInput
  ): Promise<UpdateQuicksiteTemplateMutation> {
    const statement = `mutation UpdateQuicksiteTemplate($input: UpdateQuicksiteTemplateInput!, $condition: ModelQuicksiteTemplateConditionInput) {
        updateQuicksiteTemplate(input: $input, condition: $condition) {
          __typename
          QtemId
          name
          analysisId
          QProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksiteTemplateMutation>(
      response.data.updateQuicksiteTemplate
    );
  }
  async DeleteQuicksiteTemplate(
    input: DeleteQuicksiteTemplateInput,
    condition?: ModelQuicksiteTemplateConditionInput
  ): Promise<DeleteQuicksiteTemplateMutation> {
    const statement = `mutation DeleteQuicksiteTemplate($input: DeleteQuicksiteTemplateInput!, $condition: ModelQuicksiteTemplateConditionInput) {
        deleteQuicksiteTemplate(input: $input, condition: $condition) {
          __typename
          QtemId
          name
          analysisId
          QProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksiteTemplateMutation>(
      response.data.deleteQuicksiteTemplate
    );
  }
  async CreateQuicksiteAnalysis(
    input: CreateQuicksiteAnalysisInput,
    condition?: ModelQuicksiteAnalysisConditionInput
  ): Promise<CreateQuicksiteAnalysisMutation> {
    const statement = `mutation CreateQuicksiteAnalysis($input: CreateQuicksiteAnalysisInput!, $condition: ModelQuicksiteAnalysisConditionInput) {
        createQuicksiteAnalysis(input: $input, condition: $condition) {
          __typename
          name
          analysisId
          QtemId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksiteAnalysisMutation>(
      response.data.createQuicksiteAnalysis
    );
  }
  async UpdateQuicksiteAnalysis(
    input: UpdateQuicksiteAnalysisInput,
    condition?: ModelQuicksiteAnalysisConditionInput
  ): Promise<UpdateQuicksiteAnalysisMutation> {
    const statement = `mutation UpdateQuicksiteAnalysis($input: UpdateQuicksiteAnalysisInput!, $condition: ModelQuicksiteAnalysisConditionInput) {
        updateQuicksiteAnalysis(input: $input, condition: $condition) {
          __typename
          name
          analysisId
          QtemId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksiteAnalysisMutation>(
      response.data.updateQuicksiteAnalysis
    );
  }
  async DeleteQuicksiteAnalysis(
    input: DeleteQuicksiteAnalysisInput,
    condition?: ModelQuicksiteAnalysisConditionInput
  ): Promise<DeleteQuicksiteAnalysisMutation> {
    const statement = `mutation DeleteQuicksiteAnalysis($input: DeleteQuicksiteAnalysisInput!, $condition: ModelQuicksiteAnalysisConditionInput) {
        deleteQuicksiteAnalysis(input: $input, condition: $condition) {
          __typename
          name
          analysisId
          QtemId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksiteAnalysisMutation>(
      response.data.deleteQuicksiteAnalysis
    );
  }
  async CreateQuicksiteDashboard(
    input: CreateQuicksiteDashboardInput,
    condition?: ModelQuicksiteDashboardConditionInput
  ): Promise<CreateQuicksiteDashboardMutation> {
    const statement = `mutation CreateQuicksiteDashboard($input: CreateQuicksiteDashboardInput!, $condition: ModelQuicksiteDashboardConditionInput) {
        createQuicksiteDashboard(input: $input, condition: $condition) {
          __typename
          name
          QtemId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksiteDashboardMutation>(
      response.data.createQuicksiteDashboard
    );
  }
  async UpdateQuicksiteDashboard(
    input: UpdateQuicksiteDashboardInput,
    condition?: ModelQuicksiteDashboardConditionInput
  ): Promise<UpdateQuicksiteDashboardMutation> {
    const statement = `mutation UpdateQuicksiteDashboard($input: UpdateQuicksiteDashboardInput!, $condition: ModelQuicksiteDashboardConditionInput) {
        updateQuicksiteDashboard(input: $input, condition: $condition) {
          __typename
          name
          QtemId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksiteDashboardMutation>(
      response.data.updateQuicksiteDashboard
    );
  }
  async DeleteQuicksiteDashboard(
    input: DeleteQuicksiteDashboardInput,
    condition?: ModelQuicksiteDashboardConditionInput
  ): Promise<DeleteQuicksiteDashboardMutation> {
    const statement = `mutation DeleteQuicksiteDashboard($input: DeleteQuicksiteDashboardInput!, $condition: ModelQuicksiteDashboardConditionInput) {
        deleteQuicksiteDashboard(input: $input, condition: $condition) {
          __typename
          name
          QtemId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksiteDashboardMutation>(
      response.data.deleteQuicksiteDashboard
    );
  }
  async CreateQuicksiteEnv(
    input: CreateQuicksiteEnvInput,
    condition?: ModelQuicksiteEnvConditionInput
  ): Promise<CreateQuicksiteEnvMutation> {
    const statement = `mutation CreateQuicksiteEnv($input: CreateQuicksiteEnvInput!, $condition: ModelQuicksiteEnvConditionInput) {
        createQuicksiteEnv(input: $input, condition: $condition) {
          __typename
          name
          QProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksiteEnvMutation>response.data.createQuicksiteEnv;
  }
  async UpdateQuicksiteEnv(
    input: UpdateQuicksiteEnvInput,
    condition?: ModelQuicksiteEnvConditionInput
  ): Promise<UpdateQuicksiteEnvMutation> {
    const statement = `mutation UpdateQuicksiteEnv($input: UpdateQuicksiteEnvInput!, $condition: ModelQuicksiteEnvConditionInput) {
        updateQuicksiteEnv(input: $input, condition: $condition) {
          __typename
          name
          QProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksiteEnvMutation>response.data.updateQuicksiteEnv;
  }
  async DeleteQuicksiteEnv(
    input: DeleteQuicksiteEnvInput,
    condition?: ModelQuicksiteEnvConditionInput
  ): Promise<DeleteQuicksiteEnvMutation> {
    const statement = `mutation DeleteQuicksiteEnv($input: DeleteQuicksiteEnvInput!, $condition: ModelQuicksiteEnvConditionInput) {
        deleteQuicksiteEnv(input: $input, condition: $condition) {
          __typename
          name
          QProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksiteEnvMutation>response.data.deleteQuicksiteEnv;
  }
  async CreateBIMProject(
    input: CreateBIMProjectInput,
    condition?: ModelBIMProjectConditionInput
  ): Promise<CreateBIMProjectMutation> {
    const statement = `mutation CreateBIMProject($input: CreateBIMProjectInput!, $condition: ModelBIMProjectConditionInput) {
        createBIMProject(input: $input, condition: $condition) {
          __typename
          Did
          name
          source
          destination
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBIMProjectMutation>response.data.createBIMProject;
  }
  async UpdateBIMProject(
    input: UpdateBIMProjectInput,
    condition?: ModelBIMProjectConditionInput
  ): Promise<UpdateBIMProjectMutation> {
    const statement = `mutation UpdateBIMProject($input: UpdateBIMProjectInput!, $condition: ModelBIMProjectConditionInput) {
        updateBIMProject(input: $input, condition: $condition) {
          __typename
          Did
          name
          source
          destination
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBIMProjectMutation>response.data.updateBIMProject;
  }
  async DeleteBIMProject(
    input: DeleteBIMProjectInput,
    condition?: ModelBIMProjectConditionInput
  ): Promise<DeleteBIMProjectMutation> {
    const statement = `mutation DeleteBIMProject($input: DeleteBIMProjectInput!, $condition: ModelBIMProjectConditionInput) {
        deleteBIMProject(input: $input, condition: $condition) {
          __typename
          Did
          name
          source
          destination
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBIMProjectMutation>response.data.deleteBIMProject;
  }
  async CreateDataset(
    input: CreateDatasetInput,
    condition?: ModelDatasetConditionInput
  ): Promise<CreateDatasetMutation> {
    const statement = `mutation CreateDataset($input: CreateDatasetInput!, $condition: ModelDatasetConditionInput) {
        createDataset(input: $input, condition: $condition) {
          __typename
          name
          datasources
          files
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDatasetMutation>response.data.createDataset;
  }
  async UpdateDataset(
    input: UpdateDatasetInput,
    condition?: ModelDatasetConditionInput
  ): Promise<UpdateDatasetMutation> {
    const statement = `mutation UpdateDataset($input: UpdateDatasetInput!, $condition: ModelDatasetConditionInput) {
        updateDataset(input: $input, condition: $condition) {
          __typename
          name
          datasources
          files
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDatasetMutation>response.data.updateDataset;
  }
  async DeleteDataset(
    input: DeleteDatasetInput,
    condition?: ModelDatasetConditionInput
  ): Promise<DeleteDatasetMutation> {
    const statement = `mutation DeleteDataset($input: DeleteDatasetInput!, $condition: ModelDatasetConditionInput) {
        deleteDataset(input: $input, condition: $condition) {
          __typename
          name
          datasources
          files
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDatasetMutation>response.data.deleteDataset;
  }
  async CreateDatasouce(
    input: CreateDatasouceInput,
    condition?: ModelDatasouceConditionInput
  ): Promise<CreateDatasouceMutation> {
    const statement = `mutation CreateDatasouce($input: CreateDatasouceInput!, $condition: ModelDatasouceConditionInput) {
        createDatasouce(input: $input, condition: $condition) {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDatasouceMutation>response.data.createDatasouce;
  }
  async UpdateDatasouce(
    input: UpdateDatasouceInput,
    condition?: ModelDatasouceConditionInput
  ): Promise<UpdateDatasouceMutation> {
    const statement = `mutation UpdateDatasouce($input: UpdateDatasouceInput!, $condition: ModelDatasouceConditionInput) {
        updateDatasouce(input: $input, condition: $condition) {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDatasouceMutation>response.data.updateDatasouce;
  }
  async DeleteDatasouce(
    input: DeleteDatasouceInput,
    condition?: ModelDatasouceConditionInput
  ): Promise<DeleteDatasouceMutation> {
    const statement = `mutation DeleteDatasouce($input: DeleteDatasouceInput!, $condition: ModelDatasouceConditionInput) {
        deleteDatasouce(input: $input, condition: $condition) {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDatasouceMutation>response.data.deleteDatasouce;
  }
  async CreateQuicksightFolder(
    input: CreateQuicksightFolderInput,
    condition?: ModelQuicksightFolderConditionInput
  ): Promise<CreateQuicksightFolderMutation> {
    const statement = `mutation CreateQuicksightFolder($input: CreateQuicksightFolderInput!, $condition: ModelQuicksightFolderConditionInput) {
        createQuicksightFolder(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightFolderMutation>response.data.createQuicksightFolder;
  }
  async UpdateQuicksightFolder(
    input: UpdateQuicksightFolderInput,
    condition?: ModelQuicksightFolderConditionInput
  ): Promise<UpdateQuicksightFolderMutation> {
    const statement = `mutation UpdateQuicksightFolder($input: UpdateQuicksightFolderInput!, $condition: ModelQuicksightFolderConditionInput) {
        updateQuicksightFolder(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightFolderMutation>response.data.updateQuicksightFolder;
  }
  async DeleteQuicksightFolder(
    input: DeleteQuicksightFolderInput,
    condition?: ModelQuicksightFolderConditionInput
  ): Promise<DeleteQuicksightFolderMutation> {
    const statement = `mutation DeleteQuicksightFolder($input: DeleteQuicksightFolderInput!, $condition: ModelQuicksightFolderConditionInput) {
        deleteQuicksightFolder(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightFolderMutation>response.data.deleteQuicksightFolder;
  }
  async CreateQuicksightGroup(
    input: CreateQuicksightGroupInput,
    condition?: ModelQuicksightGroupConditionInput
  ): Promise<CreateQuicksightGroupMutation> {
    const statement = `mutation CreateQuicksightGroup($input: CreateQuicksightGroupInput!, $condition: ModelQuicksightGroupConditionInput) {
        createQuicksightGroup(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightGroupMutation>response.data.createQuicksightGroup;
  }
  async UpdateQuicksightGroup(
    input: UpdateQuicksightGroupInput,
    condition?: ModelQuicksightGroupConditionInput
  ): Promise<UpdateQuicksightGroupMutation> {
    const statement = `mutation UpdateQuicksightGroup($input: UpdateQuicksightGroupInput!, $condition: ModelQuicksightGroupConditionInput) {
        updateQuicksightGroup(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightGroupMutation>response.data.updateQuicksightGroup;
  }
  async DeleteQuicksightGroup(
    input: DeleteQuicksightGroupInput,
    condition?: ModelQuicksightGroupConditionInput
  ): Promise<DeleteQuicksightGroupMutation> {
    const statement = `mutation DeleteQuicksightGroup($input: DeleteQuicksightGroupInput!, $condition: ModelQuicksightGroupConditionInput) {
        deleteQuicksightGroup(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightGroupMutation>response.data.deleteQuicksightGroup;
  }
  async CreateFile(
    input: CreateFileInput,
    condition?: ModelFileConditionInput
  ): Promise<CreateFileMutation> {
    const statement = `mutation CreateFile($input: CreateFileInput!, $condition: ModelFileConditionInput) {
        createFile(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFileMutation>response.data.createFile;
  }
  async UpdateFile(
    input: UpdateFileInput,
    condition?: ModelFileConditionInput
  ): Promise<UpdateFileMutation> {
    const statement = `mutation UpdateFile($input: UpdateFileInput!, $condition: ModelFileConditionInput) {
        updateFile(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFileMutation>response.data.updateFile;
  }
  async DeleteFile(
    input: DeleteFileInput,
    condition?: ModelFileConditionInput
  ): Promise<DeleteFileMutation> {
    const statement = `mutation DeleteFile($input: DeleteFileInput!, $condition: ModelFileConditionInput) {
        deleteFile(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFileMutation>response.data.deleteFile;
  }
  async CreateTable(
    input: CreateTableInput,
    condition?: ModelTableConditionInput
  ): Promise<CreateTableMutation> {
    const statement = `mutation CreateTable($input: CreateTableInput!, $condition: ModelTableConditionInput) {
        createTable(input: $input, condition: $condition) {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableMutation>response.data.createTable;
  }
  async UpdateTable(
    input: UpdateTableInput,
    condition?: ModelTableConditionInput
  ): Promise<UpdateTableMutation> {
    const statement = `mutation UpdateTable($input: UpdateTableInput!, $condition: ModelTableConditionInput) {
        updateTable(input: $input, condition: $condition) {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableMutation>response.data.updateTable;
  }
  async DeleteTable(
    input: DeleteTableInput,
    condition?: ModelTableConditionInput
  ): Promise<DeleteTableMutation> {
    const statement = `mutation DeleteTable($input: DeleteTableInput!, $condition: ModelTableConditionInput) {
        deleteTable(input: $input, condition: $condition) {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableMutation>response.data.deleteTable;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async GetTableaulogin(id: string): Promise<GetTableauloginQuery> {
    const statement = `query GetTableaulogin($id: ID!) {
        getTableaulogin(id: $id) {
          __typename
          id
          username
          password
          sitename
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauloginQuery>response.data.getTableaulogin;
  }
  async ListTableaulogins(
    filter?: ModelTableauloginFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauloginsQuery> {
    const statement = `query ListTableaulogins($filter: ModelTableauloginFilterInput, $limit: Int, $nextToken: String) {
        listTableaulogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            password
            sitename
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauloginsQuery>response.data.listTableaulogins;
  }
  async GetQuicksightlogin(id: string): Promise<GetQuicksightloginQuery> {
    const statement = `query GetQuicksightlogin($id: ID!) {
        getQuicksightlogin(id: $id) {
          __typename
          id
          awsaccountId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightloginQuery>response.data.getQuicksightlogin;
  }
  async ListQuicksightlogins(
    filter?: ModelQuicksightloginFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightloginsQuery> {
    const statement = `query ListQuicksightlogins($filter: ModelQuicksightloginFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightlogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            awsaccountId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightloginsQuery>response.data.listQuicksightlogins;
  }
  async GetCustomer(id: string): Promise<GetCustomerQuery> {
    const statement = `query GetCustomer($id: ID!) {
        getCustomer(id: $id) {
          __typename
          CustomerId
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCustomerQuery>response.data.getCustomer;
  }
  async ListCustomers(
    filter?: ModelCustomerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCustomersQuery> {
    const statement = `query ListCustomers($filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String) {
        listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            CustomerId
            name
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCustomersQuery>response.data.listCustomers;
  }
  async GetDepartment(id: string): Promise<GetDepartmentQuery> {
    const statement = `query GetDepartment($id: ID!) {
        getDepartment(id: $id) {
          __typename
          Did
          CustomerId
          Dname
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDepartmentQuery>response.data.getDepartment;
  }
  async ListDepartments(
    filter?: ModelDepartmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDepartmentsQuery> {
    const statement = `query ListDepartments($filter: ModelDepartmentFilterInput, $limit: Int, $nextToken: String) {
        listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            Did
            CustomerId
            Dname
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDepartmentsQuery>response.data.listDepartments;
  }
  async GetTableauProject(id: string): Promise<GetTableauProjectQuery> {
    const statement = `query GetTableauProject($id: ID!) {
        getTableauProject(id: $id) {
          __typename
          TProId
          name
          Did
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauProjectQuery>response.data.getTableauProject;
  }
  async ListTableauProjects(
    filter?: ModelTableauProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauProjectsQuery> {
    const statement = `query ListTableauProjects($filter: ModelTableauProjectFilterInput, $limit: Int, $nextToken: String) {
        listTableauProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            TProId
            name
            Did
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauProjectsQuery>response.data.listTableauProjects;
  }
  async GetTableauWorkbook(id: string): Promise<GetTableauWorkbookQuery> {
    const statement = `query GetTableauWorkbook($id: ID!) {
        getTableauWorkbook(id: $id) {
          __typename
          WbId
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauWorkbookQuery>response.data.getTableauWorkbook;
  }
  async ListTableauWorkbooks(
    filter?: ModelTableauWorkbookFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauWorkbooksQuery> {
    const statement = `query ListTableauWorkbooks($filter: ModelTableauWorkbookFilterInput, $limit: Int, $nextToken: String) {
        listTableauWorkbooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            WbId
            name
            TProId
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauWorkbooksQuery>response.data.listTableauWorkbooks;
  }
  async GetTableauSheet(id: string): Promise<GetTableauSheetQuery> {
    const statement = `query GetTableauSheet($id: ID!) {
        getTableauSheet(id: $id) {
          __typename
          name
          WbId
          Tsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauSheetQuery>response.data.getTableauSheet;
  }
  async ListTableauSheets(
    filter?: ModelTableauSheetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauSheetsQuery> {
    const statement = `query ListTableauSheets($filter: ModelTableauSheetFilterInput, $limit: Int, $nextToken: String) {
        listTableauSheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            WbId
            Tsid
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauSheetsQuery>response.data.listTableauSheets;
  }
  async GetTableauGraph(id: string): Promise<GetTableauGraphQuery> {
    const statement = `query GetTableauGraph($id: ID!) {
        getTableauGraph(id: $id) {
          __typename
          name
          Tsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauGraphQuery>response.data.getTableauGraph;
  }
  async ListTableauGraphs(
    filter?: ModelTableauGraphFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauGraphsQuery> {
    const statement = `query ListTableauGraphs($filter: ModelTableauGraphFilterInput, $limit: Int, $nextToken: String) {
        listTableauGraphs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            Tsid
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauGraphsQuery>response.data.listTableauGraphs;
  }
  async GetTableauEnv(id: string): Promise<GetTableauEnvQuery> {
    const statement = `query GetTableauEnv($id: ID!) {
        getTableauEnv(id: $id) {
          __typename
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauEnvQuery>response.data.getTableauEnv;
  }
  async ListTableauEnvs(
    filter?: ModelTableauEnvFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauEnvsQuery> {
    const statement = `query ListTableauEnvs($filter: ModelTableauEnvFilterInput, $limit: Int, $nextToken: String) {
        listTableauEnvs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            TProId
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauEnvsQuery>response.data.listTableauEnvs;
  }
  async GetQuicksiteProject(id: string): Promise<GetQuicksiteProjectQuery> {
    const statement = `query GetQuicksiteProject($id: ID!) {
        getQuicksiteProject(id: $id) {
          __typename
          name
          QProId
          Did
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksiteProjectQuery>response.data.getQuicksiteProject;
  }
  async ListQuicksiteProjects(
    filter?: ModelQuicksiteProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksiteProjectsQuery> {
    const statement = `query ListQuicksiteProjects($filter: ModelQuicksiteProjectFilterInput, $limit: Int, $nextToken: String) {
        listQuicksiteProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            QProId
            Did
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksiteProjectsQuery>response.data.listQuicksiteProjects;
  }
  async GetQuicksiteTemplate(id: string): Promise<GetQuicksiteTemplateQuery> {
    const statement = `query GetQuicksiteTemplate($id: ID!) {
        getQuicksiteTemplate(id: $id) {
          __typename
          QtemId
          name
          analysisId
          QProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksiteTemplateQuery>response.data.getQuicksiteTemplate;
  }
  async ListQuicksiteTemplates(
    filter?: ModelQuicksiteTemplateFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksiteTemplatesQuery> {
    const statement = `query ListQuicksiteTemplates($filter: ModelQuicksiteTemplateFilterInput, $limit: Int, $nextToken: String) {
        listQuicksiteTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            QtemId
            name
            analysisId
            QProId
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksiteTemplatesQuery>response.data.listQuicksiteTemplates;
  }
  async GetQuicksiteAnalysis(id: string): Promise<GetQuicksiteAnalysisQuery> {
    const statement = `query GetQuicksiteAnalysis($id: ID!) {
        getQuicksiteAnalysis(id: $id) {
          __typename
          name
          analysisId
          QtemId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksiteAnalysisQuery>response.data.getQuicksiteAnalysis;
  }
  async ListQuicksiteAnalyses(
    filter?: ModelQuicksiteAnalysisFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksiteAnalysesQuery> {
    const statement = `query ListQuicksiteAnalyses($filter: ModelQuicksiteAnalysisFilterInput, $limit: Int, $nextToken: String) {
        listQuicksiteAnalyses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            analysisId
            QtemId
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksiteAnalysesQuery>response.data.listQuicksiteAnalyses;
  }
  async GetQuicksiteDashboard(id: string): Promise<GetQuicksiteDashboardQuery> {
    const statement = `query GetQuicksiteDashboard($id: ID!) {
        getQuicksiteDashboard(id: $id) {
          __typename
          name
          QtemId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksiteDashboardQuery>response.data.getQuicksiteDashboard;
  }
  async ListQuicksiteDashboards(
    filter?: ModelQuicksiteDashboardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksiteDashboardsQuery> {
    const statement = `query ListQuicksiteDashboards($filter: ModelQuicksiteDashboardFilterInput, $limit: Int, $nextToken: String) {
        listQuicksiteDashboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            QtemId
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksiteDashboardsQuery>response.data.listQuicksiteDashboards;
  }
  async GetQuicksiteEnv(id: string): Promise<GetQuicksiteEnvQuery> {
    const statement = `query GetQuicksiteEnv($id: ID!) {
        getQuicksiteEnv(id: $id) {
          __typename
          name
          QProId
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksiteEnvQuery>response.data.getQuicksiteEnv;
  }
  async ListQuicksiteEnvs(
    filter?: ModelQuicksiteEnvFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksiteEnvsQuery> {
    const statement = `query ListQuicksiteEnvs($filter: ModelQuicksiteEnvFilterInput, $limit: Int, $nextToken: String) {
        listQuicksiteEnvs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            QProId
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksiteEnvsQuery>response.data.listQuicksiteEnvs;
  }
  async GetBIMProject(id: string): Promise<GetBIMProjectQuery> {
    const statement = `query GetBIMProject($id: ID!) {
        getBIMProject(id: $id) {
          __typename
          Did
          name
          source
          destination
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBIMProjectQuery>response.data.getBIMProject;
  }
  async ListBIMProjects(
    filter?: ModelBIMProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBIMProjectsQuery> {
    const statement = `query ListBIMProjects($filter: ModelBIMProjectFilterInput, $limit: Int, $nextToken: String) {
        listBIMProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            Did
            name
            source
            destination
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBIMProjectsQuery>response.data.listBIMProjects;
  }
  async GetDataset(id: string): Promise<GetDatasetQuery> {
    const statement = `query GetDataset($id: ID!) {
        getDataset(id: $id) {
          __typename
          name
          datasources
          files
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDatasetQuery>response.data.getDataset;
  }
  async ListDatasets(
    filter?: ModelDatasetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatasetsQuery> {
    const statement = `query ListDatasets($filter: ModelDatasetFilterInput, $limit: Int, $nextToken: String) {
        listDatasets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            datasources
            files
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatasetsQuery>response.data.listDatasets;
  }
  async GetDatasouce(id: string): Promise<GetDatasouceQuery> {
    const statement = `query GetDatasouce($id: ID!) {
        getDatasouce(id: $id) {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDatasouceQuery>response.data.getDatasouce;
  }
  async ListDatasouces(
    filter?: ModelDatasouceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatasoucesQuery> {
    const statement = `query ListDatasouces($filter: ModelDatasouceFilterInput, $limit: Int, $nextToken: String) {
        listDatasouces(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            dsid
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatasoucesQuery>response.data.listDatasouces;
  }
  async GetQuicksightFolder(id: string): Promise<GetQuicksightFolderQuery> {
    const statement = `query GetQuicksightFolder($id: ID!) {
        getQuicksightFolder(id: $id) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightFolderQuery>response.data.getQuicksightFolder;
  }
  async ListQuicksightFolders(
    filter?: ModelQuicksightFolderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightFoldersQuery> {
    const statement = `query ListQuicksightFolders($filter: ModelQuicksightFolderFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightFoldersQuery>response.data.listQuicksightFolders;
  }
  async GetQuicksightGroup(id: string): Promise<GetQuicksightGroupQuery> {
    const statement = `query GetQuicksightGroup($id: ID!) {
        getQuicksightGroup(id: $id) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightGroupQuery>response.data.getQuicksightGroup;
  }
  async ListQuicksightGroups(
    filter?: ModelQuicksightGroupFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightGroupsQuery> {
    const statement = `query ListQuicksightGroups($filter: ModelQuicksightGroupFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightGroupsQuery>response.data.listQuicksightGroups;
  }
  async GetFile(id: string): Promise<GetFileQuery> {
    const statement = `query GetFile($id: ID!) {
        getFile(id: $id) {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFileQuery>response.data.getFile;
  }
  async ListFiles(
    filter?: ModelFileFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFilesQuery> {
    const statement = `query ListFiles($filter: ModelFileFilterInput, $limit: Int, $nextToken: String) {
        listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFilesQuery>response.data.listFiles;
  }
  async GetTable(id: string): Promise<GetTableQuery> {
    const statement = `query GetTable($id: ID!) {
        getTable(id: $id) {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableQuery>response.data.getTable;
  }
  async ListTables(
    filter?: ModelTableFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTablesQuery> {
    const statement = `query ListTables($filter: ModelTableFilterInput, $limit: Int, $nextToken: String) {
        listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            dsid
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTablesQuery>response.data.listTables;
  }
  OnCreateTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
  >;

  OnUpdateTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
  >;

  OnDeleteTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
  >;

  OnCreateTableauloginListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableaulogin">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableaulogin {
        onCreateTableaulogin {
          __typename
          id
          username
          password
          sitename
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableaulogin">>
  >;

  OnUpdateTableauloginListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableaulogin">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableaulogin {
        onUpdateTableaulogin {
          __typename
          id
          username
          password
          sitename
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableaulogin">>
  >;

  OnDeleteTableauloginListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableaulogin">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableaulogin {
        onDeleteTableaulogin {
          __typename
          id
          username
          password
          sitename
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableaulogin">>
  >;

  OnCreateQuicksightloginListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightlogin">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightlogin {
        onCreateQuicksightlogin {
          __typename
          id
          awsaccountId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightlogin">
    >
  >;

  OnUpdateQuicksightloginListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightlogin">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightlogin {
        onUpdateQuicksightlogin {
          __typename
          id
          awsaccountId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightlogin">
    >
  >;

  OnDeleteQuicksightloginListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightlogin">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightlogin {
        onDeleteQuicksightlogin {
          __typename
          id
          awsaccountId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightlogin">
    >
  >;

  OnCreateCustomerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCustomer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCustomer {
        onCreateCustomer {
          __typename
          CustomerId
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCustomer">>
  >;

  OnUpdateCustomerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCustomer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCustomer {
        onUpdateCustomer {
          __typename
          CustomerId
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCustomer">>
  >;

  OnDeleteCustomerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCustomer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCustomer {
        onDeleteCustomer {
          __typename
          CustomerId
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCustomer">>
  >;

  OnCreateDepartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDepartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDepartment {
        onCreateDepartment {
          __typename
          Did
          CustomerId
          Dname
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDepartment">>
  >;

  OnUpdateDepartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDepartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDepartment {
        onUpdateDepartment {
          __typename
          Did
          CustomerId
          Dname
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDepartment">>
  >;

  OnDeleteDepartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDepartment {
        onDeleteDepartment {
          __typename
          Did
          CustomerId
          Dname
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
  >;

  OnCreateTableauProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateTableauProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableauProject {
        onCreateTableauProject {
          __typename
          TProId
          name
          Did
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateTableauProject">
    >
  >;

  OnUpdateTableauProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateTableauProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableauProject {
        onUpdateTableauProject {
          __typename
          TProId
          name
          Did
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateTableauProject">
    >
  >;

  OnDeleteTableauProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteTableauProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableauProject {
        onDeleteTableauProject {
          __typename
          TProId
          name
          Did
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteTableauProject">
    >
  >;

  OnCreateTableauWorkbookListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateTableauWorkbook">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableauWorkbook {
        onCreateTableauWorkbook {
          __typename
          WbId
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateTableauWorkbook">
    >
  >;

  OnUpdateTableauWorkbookListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateTableauWorkbook">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableauWorkbook {
        onUpdateTableauWorkbook {
          __typename
          WbId
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateTableauWorkbook">
    >
  >;

  OnDeleteTableauWorkbookListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteTableauWorkbook">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableauWorkbook {
        onDeleteTableauWorkbook {
          __typename
          WbId
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteTableauWorkbook">
    >
  >;

  OnCreateTableauSheetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauSheet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableauSheet {
        onCreateTableauSheet {
          __typename
          name
          WbId
          Tsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauSheet">>
  >;

  OnUpdateTableauSheetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauSheet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableauSheet {
        onUpdateTableauSheet {
          __typename
          name
          WbId
          Tsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauSheet">>
  >;

  OnDeleteTableauSheetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauSheet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableauSheet {
        onDeleteTableauSheet {
          __typename
          name
          WbId
          Tsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauSheet">>
  >;

  OnCreateTableauGraphListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauGraph">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableauGraph {
        onCreateTableauGraph {
          __typename
          name
          Tsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauGraph">>
  >;

  OnUpdateTableauGraphListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauGraph">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableauGraph {
        onUpdateTableauGraph {
          __typename
          name
          Tsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauGraph">>
  >;

  OnDeleteTableauGraphListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauGraph">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableauGraph {
        onDeleteTableauGraph {
          __typename
          name
          Tsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauGraph">>
  >;

  OnCreateTableauEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableauEnv {
        onCreateTableauEnv {
          __typename
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauEnv">>
  >;

  OnUpdateTableauEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableauEnv {
        onUpdateTableauEnv {
          __typename
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauEnv">>
  >;

  OnDeleteTableauEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableauEnv {
        onDeleteTableauEnv {
          __typename
          name
          TProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauEnv">>
  >;

  OnCreateQuicksiteProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksiteProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksiteProject {
        onCreateQuicksiteProject {
          __typename
          name
          QProId
          Did
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksiteProject">
    >
  >;

  OnUpdateQuicksiteProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksiteProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksiteProject {
        onUpdateQuicksiteProject {
          __typename
          name
          QProId
          Did
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksiteProject">
    >
  >;

  OnDeleteQuicksiteProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksiteProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksiteProject {
        onDeleteQuicksiteProject {
          __typename
          name
          QProId
          Did
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksiteProject">
    >
  >;

  OnCreateQuicksiteTemplateListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksiteTemplate">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksiteTemplate {
        onCreateQuicksiteTemplate {
          __typename
          QtemId
          name
          analysisId
          QProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksiteTemplate">
    >
  >;

  OnUpdateQuicksiteTemplateListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksiteTemplate">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksiteTemplate {
        onUpdateQuicksiteTemplate {
          __typename
          QtemId
          name
          analysisId
          QProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksiteTemplate">
    >
  >;

  OnDeleteQuicksiteTemplateListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksiteTemplate">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksiteTemplate {
        onDeleteQuicksiteTemplate {
          __typename
          QtemId
          name
          analysisId
          QProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksiteTemplate">
    >
  >;

  OnCreateQuicksiteAnalysisListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksiteAnalysis">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksiteAnalysis {
        onCreateQuicksiteAnalysis {
          __typename
          name
          analysisId
          QtemId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksiteAnalysis">
    >
  >;

  OnUpdateQuicksiteAnalysisListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksiteAnalysis">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksiteAnalysis {
        onUpdateQuicksiteAnalysis {
          __typename
          name
          analysisId
          QtemId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksiteAnalysis">
    >
  >;

  OnDeleteQuicksiteAnalysisListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksiteAnalysis">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksiteAnalysis {
        onDeleteQuicksiteAnalysis {
          __typename
          name
          analysisId
          QtemId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksiteAnalysis">
    >
  >;

  OnCreateQuicksiteDashboardListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksiteDashboard">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksiteDashboard {
        onCreateQuicksiteDashboard {
          __typename
          name
          QtemId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksiteDashboard">
    >
  >;

  OnUpdateQuicksiteDashboardListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksiteDashboard">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksiteDashboard {
        onUpdateQuicksiteDashboard {
          __typename
          name
          QtemId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksiteDashboard">
    >
  >;

  OnDeleteQuicksiteDashboardListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksiteDashboard">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksiteDashboard {
        onDeleteQuicksiteDashboard {
          __typename
          name
          QtemId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksiteDashboard">
    >
  >;

  OnCreateQuicksiteEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuicksiteEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksiteEnv {
        onCreateQuicksiteEnv {
          __typename
          name
          QProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuicksiteEnv">>
  >;

  OnUpdateQuicksiteEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuicksiteEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksiteEnv {
        onUpdateQuicksiteEnv {
          __typename
          name
          QProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuicksiteEnv">>
  >;

  OnDeleteQuicksiteEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuicksiteEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksiteEnv {
        onDeleteQuicksiteEnv {
          __typename
          name
          QProId
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuicksiteEnv">>
  >;

  OnCreateBIMProjectListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBIMProject">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBIMProject {
        onCreateBIMProject {
          __typename
          Did
          name
          source
          destination
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBIMProject">>
  >;

  OnUpdateBIMProjectListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBIMProject">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBIMProject {
        onUpdateBIMProject {
          __typename
          Did
          name
          source
          destination
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBIMProject">>
  >;

  OnDeleteBIMProjectListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBIMProject">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBIMProject {
        onDeleteBIMProject {
          __typename
          Did
          name
          source
          destination
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBIMProject">>
  >;

  OnCreateDatasetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDataset">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDataset {
        onCreateDataset {
          __typename
          name
          datasources
          files
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDataset">>
  >;

  OnUpdateDatasetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDataset">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDataset {
        onUpdateDataset {
          __typename
          name
          datasources
          files
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDataset">>
  >;

  OnDeleteDatasetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDataset">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDataset {
        onDeleteDataset {
          __typename
          name
          datasources
          files
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDataset">>
  >;

  OnCreateDatasouceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDatasouce">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDatasouce {
        onCreateDatasouce {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDatasouce">>
  >;

  OnUpdateDatasouceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDatasouce">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDatasouce {
        onUpdateDatasouce {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDatasouce">>
  >;

  OnDeleteDatasouceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDatasouce">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDatasouce {
        onDeleteDatasouce {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDatasouce">>
  >;

  OnCreateQuicksightFolderListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightFolder">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightFolder {
        onCreateQuicksightFolder {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightFolder">
    >
  >;

  OnUpdateQuicksightFolderListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightFolder">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightFolder {
        onUpdateQuicksightFolder {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightFolder">
    >
  >;

  OnDeleteQuicksightFolderListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightFolder">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightFolder {
        onDeleteQuicksightFolder {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightFolder">
    >
  >;

  OnCreateQuicksightGroupListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightGroup">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightGroup {
        onCreateQuicksightGroup {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightGroup">
    >
  >;

  OnUpdateQuicksightGroupListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightGroup">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightGroup {
        onUpdateQuicksightGroup {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightGroup">
    >
  >;

  OnDeleteQuicksightGroupListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightGroup">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightGroup {
        onDeleteQuicksightGroup {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightGroup">
    >
  >;

  OnCreateFileListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFile">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFile {
        onCreateFile {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFile">>
  >;

  OnUpdateFileListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFile">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFile {
        onUpdateFile {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFile">>
  >;

  OnDeleteFileListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFile">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFile {
        onDeleteFile {
          __typename
          name
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFile">>
  >;

  OnCreateTableListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTable">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTable {
        onCreateTable {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTable">>
  >;

  OnUpdateTableListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTable">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTable {
        onUpdateTable {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTable">>
  >;

  OnDeleteTableListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTable">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTable {
        onDeleteTable {
          __typename
          name
          dsid
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTable">>
  >;
}
