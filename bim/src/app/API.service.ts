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
}
