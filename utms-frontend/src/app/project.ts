import { TestRun } from "./testRun";

export interface Project {
    id: number;
    name: string;
    description: string;
    testRuns: Array<TestRun>;
}