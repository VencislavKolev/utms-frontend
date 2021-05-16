export interface TestRun {
    id: number;
    status: string;
    runForProject: number;
    testSuites: Array<Object>;
}