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

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
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
}
