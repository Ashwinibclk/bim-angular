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
  onCreateBIMProject: OnCreateBIMProjectSubscription;
  onUpdateBIMProject: OnUpdateBIMProjectSubscription;
  onDeleteBIMProject: OnDeleteBIMProjectSubscription;
  onCreateDataset: OnCreateDatasetSubscription;
  onUpdateDataset: OnUpdateDatasetSubscription;
  onDeleteDataset: OnDeleteDatasetSubscription;
  onCreateFile: OnCreateFileSubscription;
  onUpdateFile: OnUpdateFileSubscription;
  onDeleteFile: OnDeleteFileSubscription;
  onCreateDatasources: OnCreateDatasourcesSubscription;
  onUpdateDatasources: OnUpdateDatasourcesSubscription;
  onDeleteDatasources: OnDeleteDatasourcesSubscription;
};

export type CreateTableauloginInput = {
  id?: string | null;
  username: string;
  password: string;
  sitename: string;
  _version?: number | null;
};

export type ModelTableauloginConditionInput = {
  username?: ModelStringInput | null;
  password?: ModelStringInput | null;
  sitename?: ModelStringInput | null;
  and?: Array<ModelTableauloginConditionInput | null> | null;
  or?: Array<ModelTableauloginConditionInput | null> | null;
  not?: ModelTableauloginConditionInput | null;
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

export type Tableaulogin = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableauloginInput = {
  id: string;
  username?: string | null;
  password?: string | null;
  sitename?: string | null;
  _version?: number | null;
};

export type DeleteTableauloginInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuicksightloginInput = {
  id?: string | null;
  awsaccountId: string;
  _version?: number | null;
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
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightloginInput = {
  id: string;
  awsaccountId?: string | null;
  _version?: number | null;
};

export type DeleteQuicksightloginInput = {
  id: string;
  _version?: number | null;
};

export type CreateCustomerInput = {
  id?: string | null;
  name: string;
  Did: string;
  _version?: number | null;
};

export type ModelCustomerConditionInput = {
  name?: ModelStringInput | null;
  Did?: ModelIDInput | null;
  and?: Array<ModelCustomerConditionInput | null> | null;
  or?: Array<ModelCustomerConditionInput | null> | null;
  not?: ModelCustomerConditionInput | null;
};

export type Customer = {
  __typename: "Customer";
  id: string;
  name: string;
  Did: string;
  department?: Department | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Department = {
  __typename: "Department";
  id: string;
  DName: string;
  customers?: ModelCustomerConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection";
  items: Array<Customer | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateCustomerInput = {
  id: string;
  name?: string | null;
  Did?: string | null;
  _version?: number | null;
};

export type DeleteCustomerInput = {
  id: string;
  _version?: number | null;
};

export type CreateDepartmentInput = {
  id?: string | null;
  DName: string;
  _version?: number | null;
};

export type ModelDepartmentConditionInput = {
  DName?: ModelStringInput | null;
  and?: Array<ModelDepartmentConditionInput | null> | null;
  or?: Array<ModelDepartmentConditionInput | null> | null;
  not?: ModelDepartmentConditionInput | null;
};

export type UpdateDepartmentInput = {
  id: string;
  DName?: string | null;
  _version?: number | null;
};

export type DeleteDepartmentInput = {
  id: string;
  _version?: number | null;
};

export type CreateBIMProjectInput = {
  Did: string;
  migrationid: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id?: string | null;
  _version?: number | null;
};

export enum BIPlatform {
  TABLEAU = "TABLEAU",
  QUICKSIGHT = "QUICKSIGHT"
}

export type ModelBIMProjectConditionInput = {
  Did?: ModelIDInput | null;
  migrationid?: ModelIDInput | null;
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
  department?: Department | null;
  migrationid: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateBIMProjectInput = {
  Did?: string | null;
  migrationid?: string | null;
  name?: string | null;
  source?: BIPlatform | null;
  destination?: BIPlatform | null;
  id: string;
  _version?: number | null;
};

export type DeleteBIMProjectInput = {
  id: string;
  _version?: number | null;
};

export type CreateDatasetInput = {
  datasetid: string;
  name: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelDatasetConditionInput = {
  datasetid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelDatasetConditionInput | null> | null;
  or?: Array<ModelDatasetConditionInput | null> | null;
  not?: ModelDatasetConditionInput | null;
};

export type dataset = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: ModeldatasourcesConnection | null;
  Files?: ModelFileConnection | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModeldatasourcesConnection = {
  __typename: "ModeldatasourcesConnection";
  items: Array<datasources | null>;
  nextToken?: string | null;
};

export type datasources = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: dataset | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelFileConnection = {
  __typename: "ModelFileConnection";
  items: Array<File | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type File = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: dataset | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDatasetInput = {
  datasetid?: string | null;
  name?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteDatasetInput = {
  id: string;
  _version?: number | null;
};

export type CreateFileInput = {
  name: string;
  url: string;
  datasetid: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelFileConditionInput = {
  name?: ModelStringInput | null;
  url?: ModelStringInput | null;
  datasetid?: ModelIDInput | null;
  and?: Array<ModelFileConditionInput | null> | null;
  or?: Array<ModelFileConditionInput | null> | null;
  not?: ModelFileConditionInput | null;
};

export type UpdateFileInput = {
  name?: string | null;
  url?: string | null;
  datasetid?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteFileInput = {
  id: string;
  _version?: number | null;
};

export type CreateDatasourcesInput = {
  dsid: string;
  name: string;
  datasetid: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelDatasourcesConditionInput = {
  dsid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  datasetid?: ModelIDInput | null;
  and?: Array<ModelDatasourcesConditionInput | null> | null;
  or?: Array<ModelDatasourcesConditionInput | null> | null;
  not?: ModelDatasourcesConditionInput | null;
};

export type UpdateDatasourcesInput = {
  dsid?: string | null;
  name?: string | null;
  datasetid?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteDatasourcesInput = {
  id: string;
  _version?: number | null;
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
  startedAt?: number | null;
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
  startedAt?: number | null;
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  Did?: ModelIDInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null;
  DName?: ModelStringInput | null;
  and?: Array<ModelDepartmentFilterInput | null> | null;
  or?: Array<ModelDepartmentFilterInput | null> | null;
  not?: ModelDepartmentFilterInput | null;
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection";
  items: Array<Department | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelBIMProjectFilterInput = {
  Did?: ModelIDInput | null;
  migrationid?: ModelIDInput | null;
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
  startedAt?: number | null;
};

export type ModelDatasetFilterInput = {
  datasetid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelDatasetFilterInput | null> | null;
  or?: Array<ModelDatasetFilterInput | null> | null;
  not?: ModelDatasetFilterInput | null;
};

export type ModelDatasetConnection = {
  __typename: "ModelDatasetConnection";
  items: Array<dataset | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelFileFilterInput = {
  name?: ModelStringInput | null;
  url?: ModelStringInput | null;
  datasetid?: ModelIDInput | null;
  and?: Array<ModelFileFilterInput | null> | null;
  or?: Array<ModelFileFilterInput | null> | null;
  not?: ModelFileFilterInput | null;
};

export type ModelDatasourcesFilterInput = {
  dsid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  datasetid?: ModelIDInput | null;
  and?: Array<ModelDatasourcesFilterInput | null> | null;
  or?: Array<ModelDatasourcesFilterInput | null> | null;
  not?: ModelDatasourcesFilterInput | null;
};

export type ModelDatasourcesConnection = {
  __typename: "ModelDatasourcesConnection";
  items: Array<datasources | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateTableauloginMutation = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableauloginMutation = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTableauloginMutation = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuicksightloginMutation = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightloginMutation = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuicksightloginMutation = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateCustomerMutation = {
  __typename: "Customer";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCustomerMutation = {
  __typename: "Customer";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteCustomerMutation = {
  __typename: "Customer";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateDepartmentMutation = {
  __typename: "Department";
  id: string;
  DName: string;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDepartmentMutation = {
  __typename: "Department";
  id: string;
  DName: string;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteDepartmentMutation = {
  __typename: "Department";
  id: string;
  DName: string;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateBIMProjectMutation = {
  __typename: "BIMProject";
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  migrationid: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateBIMProjectMutation = {
  __typename: "BIMProject";
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  migrationid: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteBIMProjectMutation = {
  __typename: "BIMProject";
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  migrationid: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateDatasetMutation = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDatasetMutation = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteDatasetMutation = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateFileMutation = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateFileMutation = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteFileMutation = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateDatasourcesMutation = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDatasourcesMutation = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteDatasourcesMutation = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetTableauloginQuery = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
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
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTableauloginsQuery = {
  __typename: "ModelTableauloginConnection";
  items: Array<{
    __typename: "Tableaulogin";
    id: string;
    username: string;
    password: string;
    sitename: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuicksightloginQuery = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuicksightloginsQuery = {
  __typename: "ModelQuicksightloginConnection";
  items: Array<{
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuicksightloginsQuery = {
  __typename: "ModelQuicksightloginConnection";
  items: Array<{
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCustomerQuery = {
  __typename: "Customer";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      id: string;
      DName: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      id: string;
      DName: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetDepartmentQuery = {
  __typename: "Department";
  id: string;
  DName: string;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListDepartmentsQuery = {
  __typename: "ModelDepartmentConnection";
  items: Array<{
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncDepartmentsQuery = {
  __typename: "ModelDepartmentConnection";
  items: Array<{
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetBIMProjectQuery = {
  __typename: "BIMProject";
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  migrationid: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListBIMProjectsQuery = {
  __typename: "ModelBIMProjectConnection";
  items: Array<{
    __typename: "BIMProject";
    Did: string;
    department?: {
      __typename: "Department";
      id: string;
      DName: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    migrationid: string;
    name: string;
    source: BIPlatform;
    destination: BIPlatform;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncBIMProjectsQuery = {
  __typename: "ModelBIMProjectConnection";
  items: Array<{
    __typename: "BIMProject";
    Did: string;
    department?: {
      __typename: "Department";
      id: string;
      DName: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    migrationid: string;
    name: string;
    source: BIPlatform;
    destination: BIPlatform;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetDatasetQuery = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListDatasetsQuery = {
  __typename: "ModelDatasetConnection";
  items: Array<{
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncDatasetsQuery = {
  __typename: "ModelDatasetConnection";
  items: Array<{
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetFileQuery = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListFilesQuery = {
  __typename: "ModelFileConnection";
  items: Array<{
    __typename: "File";
    name: string;
    url: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncFilesQuery = {
  __typename: "ModelFileConnection";
  items: Array<{
    __typename: "File";
    name: string;
    url: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetDatasourcesQuery = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListDatasourcesQuery = {
  __typename: "ModelDatasourcesConnection";
  items: Array<{
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncDatasourcesQuery = {
  __typename: "ModelDatasourcesConnection";
  items: Array<{
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateTableauloginSubscription = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTableauloginSubscription = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTableauloginSubscription = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuicksightloginSubscription = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuicksightloginSubscription = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuicksightloginSubscription = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateCustomerSubscription = {
  __typename: "Customer";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateCustomerSubscription = {
  __typename: "Customer";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteCustomerSubscription = {
  __typename: "Customer";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateDepartmentSubscription = {
  __typename: "Department";
  id: string;
  DName: string;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateDepartmentSubscription = {
  __typename: "Department";
  id: string;
  DName: string;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteDepartmentSubscription = {
  __typename: "Department";
  id: string;
  DName: string;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateBIMProjectSubscription = {
  __typename: "BIMProject";
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  migrationid: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateBIMProjectSubscription = {
  __typename: "BIMProject";
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  migrationid: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteBIMProjectSubscription = {
  __typename: "BIMProject";
  Did: string;
  department?: {
    __typename: "Department";
    id: string;
    DName: string;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  migrationid: string;
  name: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateDatasetSubscription = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateDatasetSubscription = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteDatasetSubscription = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateFileSubscription = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateFileSubscription = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteFileSubscription = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateDatasourcesSubscription = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateDatasourcesSubscription = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteDatasourcesSubscription = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          id
          name
          Did
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          id
          name
          Did
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          id
          name
          Did
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          id
          DName
          customers {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          id
          DName
          customers {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          id
          DName
          customers {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
  async CreateBIMProject(
    input: CreateBIMProjectInput,
    condition?: ModelBIMProjectConditionInput
  ): Promise<CreateBIMProjectMutation> {
    const statement = `mutation CreateBIMProject($input: CreateBIMProjectInput!, $condition: ModelBIMProjectConditionInput) {
        createBIMProject(input: $input, condition: $condition) {
          __typename
          Did
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          migrationid
          name
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          migrationid
          name
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          migrationid
          name
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
  async CreateFile(
    input: CreateFileInput,
    condition?: ModelFileConditionInput
  ): Promise<CreateFileMutation> {
    const statement = `mutation CreateFile($input: CreateFileInput!, $condition: ModelFileConditionInput) {
        createFile(input: $input, condition: $condition) {
          __typename
          name
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
  async CreateDatasources(
    input: CreateDatasourcesInput,
    condition?: ModelDatasourcesConditionInput
  ): Promise<CreateDatasourcesMutation> {
    const statement = `mutation CreateDatasources($input: CreateDatasourcesInput!, $condition: ModelDatasourcesConditionInput) {
        createDatasources(input: $input, condition: $condition) {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
    return <CreateDatasourcesMutation>response.data.createDatasources;
  }
  async UpdateDatasources(
    input: UpdateDatasourcesInput,
    condition?: ModelDatasourcesConditionInput
  ): Promise<UpdateDatasourcesMutation> {
    const statement = `mutation UpdateDatasources($input: UpdateDatasourcesInput!, $condition: ModelDatasourcesConditionInput) {
        updateDatasources(input: $input, condition: $condition) {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
    return <UpdateDatasourcesMutation>response.data.updateDatasources;
  }
  async DeleteDatasources(
    input: DeleteDatasourcesInput,
    condition?: ModelDatasourcesConditionInput
  ): Promise<DeleteDatasourcesMutation> {
    const statement = `mutation DeleteDatasources($input: DeleteDatasourcesInput!, $condition: ModelDatasourcesConditionInput) {
        deleteDatasources(input: $input, condition: $condition) {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
    return <DeleteDatasourcesMutation>response.data.deleteDatasources;
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
          _version
          _deleted
          _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
  async SyncTableaulogins(
    filter?: ModelTableauloginFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTableauloginsQuery> {
    const statement = `query SyncTableaulogins($filter: ModelTableauloginFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTableaulogins(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            username
            password
            sitename
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTableauloginsQuery>response.data.syncTableaulogins;
  }
  async GetQuicksightlogin(id: string): Promise<GetQuicksightloginQuery> {
    const statement = `query GetQuicksightlogin($id: ID!) {
        getQuicksightlogin(id: $id) {
          __typename
          id
          awsaccountId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
  async SyncQuicksightlogins(
    filter?: ModelQuicksightloginFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuicksightloginsQuery> {
    const statement = `query SyncQuicksightlogins($filter: ModelQuicksightloginFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuicksightlogins(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            awsaccountId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuicksightloginsQuery>response.data.syncQuicksightlogins;
  }
  async GetCustomer(id: string): Promise<GetCustomerQuery> {
    const statement = `query GetCustomer($id: ID!) {
        getCustomer(id: $id) {
          __typename
          id
          name
          Did
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            id
            name
            Did
            department {
              __typename
              id
              DName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
  async SyncCustomers(
    filter?: ModelCustomerFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCustomersQuery> {
    const statement = `query SyncCustomers($filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCustomers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            Did
            department {
              __typename
              id
              DName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCustomersQuery>response.data.syncCustomers;
  }
  async GetDepartment(id: string): Promise<GetDepartmentQuery> {
    const statement = `query GetDepartment($id: ID!) {
        getDepartment(id: $id) {
          __typename
          id
          DName
          customers {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
  async SyncDepartments(
    filter?: ModelDepartmentFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncDepartmentsQuery> {
    const statement = `query SyncDepartments($filter: ModelDepartmentFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncDepartments(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncDepartmentsQuery>response.data.syncDepartments;
  }
  async GetBIMProject(id: string): Promise<GetBIMProjectQuery> {
    const statement = `query GetBIMProject($id: ID!) {
        getBIMProject(id: $id) {
          __typename
          Did
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          migrationid
          name
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            department {
              __typename
              id
              DName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            migrationid
            name
            source
            destination
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
  async SyncBIMProjects(
    filter?: ModelBIMProjectFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncBIMProjectsQuery> {
    const statement = `query SyncBIMProjects($filter: ModelBIMProjectFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncBIMProjects(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            Did
            department {
              __typename
              id
              DName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            migrationid
            name
            source
            destination
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncBIMProjectsQuery>response.data.syncBIMProjects;
  }
  async GetDataset(id: string): Promise<GetDatasetQuery> {
    const statement = `query GetDataset($id: ID!) {
        getDataset(id: $id) {
          __typename
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
  async SyncDatasets(
    filter?: ModelDatasetFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncDatasetsQuery> {
    const statement = `query SyncDatasets($filter: ModelDatasetFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncDatasets(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncDatasetsQuery>response.data.syncDatasets;
  }
  async GetFile(id: string): Promise<GetFileQuery> {
    const statement = `query GetFile($id: ID!) {
        getFile(id: $id) {
          __typename
          name
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            url
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
  async SyncFiles(
    filter?: ModelFileFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFilesQuery> {
    const statement = `query SyncFiles($filter: ModelFileFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFiles(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            url
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFilesQuery>response.data.syncFiles;
  }
  async GetDatasources(id: string): Promise<GetDatasourcesQuery> {
    const statement = `query GetDatasources($id: ID!) {
        getDatasources(id: $id) {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDatasourcesQuery>response.data.getDatasources;
  }
  async ListDatasources(
    filter?: ModelDatasourcesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatasourcesQuery> {
    const statement = `query ListDatasources($filter: ModelDatasourcesFilterInput, $limit: Int, $nextToken: String) {
        listDatasources(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    return <ListDatasourcesQuery>response.data.listDatasources;
  }
  async SyncDatasources(
    filter?: ModelDatasourcesFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncDatasourcesQuery> {
    const statement = `query SyncDatasources($filter: ModelDatasourcesFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncDatasources(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncDatasourcesQuery>response.data.syncDatasources;
  }
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          id
          name
          Did
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          id
          name
          Did
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          id
          name
          Did
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          id
          DName
          customers {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          id
          DName
          customers {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          id
          DName
          customers {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
  >;

  OnCreateBIMProjectListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBIMProject">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBIMProject {
        onCreateBIMProject {
          __typename
          Did
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          migrationid
          name
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          migrationid
          name
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          department {
            __typename
            id
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          migrationid
          name
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDataset">>
  >;

  OnCreateFileListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFile">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFile {
        onCreateFile {
          __typename
          name
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFile">>
  >;

  OnCreateDatasourcesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDatasources">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDatasources {
        onCreateDatasources {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDatasources">>
  >;

  OnUpdateDatasourcesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDatasources">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDatasources {
        onUpdateDatasources {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDatasources">>
  >;

  OnDeleteDatasourcesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDatasources">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDatasources {
        onDeleteDatasources {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDatasources">>
  >;
}
