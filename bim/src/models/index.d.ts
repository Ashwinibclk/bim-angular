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

type BIMProjectMetaData = {
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
  readonly name: string;
  readonly department?: Department | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Department {
  readonly id: string;
  readonly DName: string;
  readonly customers?: (Customer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Department, DepartmentMetaData>);
  static copyOf(source: Department, mutator: (draft: MutableModel<Department, DepartmentMetaData>) => MutableModel<Department, DepartmentMetaData> | void): Department;
}

export declare class BIMProject {
  readonly id: string;
  readonly Did: string;
  readonly department?: Department | null;
  readonly migrationid: string;
  readonly name: string;
  readonly source: BiPlatform | keyof typeof BiPlatform;
  readonly destination: BiPlatform | keyof typeof BiPlatform;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BIMProject, BIMProjectMetaData>);
  static copyOf(source: BIMProject, mutator: (draft: MutableModel<BIMProject, BIMProjectMetaData>) => MutableModel<BIMProject, BIMProjectMetaData> | void): BIMProject;
}